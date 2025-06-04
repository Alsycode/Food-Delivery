import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { setCartItems } from '../store/cartSlice';
import { login, logout } from '../store/authSlice';

const useAuth = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      try {
        const storedCart = localStorage.getItem(`cart_${user.id}`);
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          dispatch(setCartItems(parsedCart.items || []));
        }
      } catch (e) {
        console.error('Failed to load user cart:', e);
      }

      // Restrict routes based on role
      if (user.role === 'admin' && !location.pathname.startsWith('/admin')) {
        navigate('/admin', { replace: true });
      } else if (user.role !== 'admin' && location.pathname.startsWith('/admin')) {
        navigate('/', { replace: true });
      }
    } else {
      dispatch(setCartItems([]));
      if (location.pathname.startsWith('/admin')) {
        navigate('/login', { replace: true });
      }
    }
  }, [user, location.pathname, dispatch, navigate]);

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  const handleLogout = () => {
    if (user) {
      try {
        const state = window.store.getState();
        localStorage.setItem(`cart_${user.id}`, JSON.stringify(state.cart));
      } catch (e) {
        console.error('Failed to save user cart:', e);
      }
    }
    localStorage.removeItem('loggedInUser');
    dispatch(logout());
    navigate('/login');
  };

  const canAddToCart = () => {
    return user && user.role !== 'admin';
  };

  return { user, login: handleLogin, logout: handleLogout, canAddToCart };
};

export default useAuth;