import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    weather: 'sunny', // Default weather is sunny
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        if (quantity < 1) {
          state.items = state.items.filter(i => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    setWeather: (state, action) => {
      state.weather = action.payload; // Set weather to 'rainy' or 'sunny'
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart, setWeather } = cartSlice.actions;
export default cartSlice.reducer;