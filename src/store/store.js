import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './authSlice';

// Middleware to save cart and auth state to localStorage
const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  
  // Save cart items after cart-related actions
  if (['cart/addItem', 'cart/updateQuantity', 'cart/removeItem', 'cart/clearCart', 'cart/setCartItems'].includes(action.type)) {
    if (state.auth.user) {
      localStorage.setItem(`cart_${state.auth.user.id}`, JSON.stringify(state.cart));
    }
  }
  
  // Save user after auth-related actions
  if (['auth/login', 'auth/logout'].includes(action.type)) {
    localStorage.setItem('loggedInUser', JSON.stringify(state.auth.user));
  }
  
  return result;
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// Expose store for useAuth
window.store = store;

export default store;