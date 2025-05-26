import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './pages/Homepage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import UserRoot from './root/UserRoot';
import AdminRoot from './root/AdminRoot';
import AboutUspage from './pages/AboutUspage';
import MenuPage from './pages/MenuPage';
import ContactUsPage from './pages/ContactUsPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
function AppWrapper({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Provider store={store}>
      <div className="font-roboto min-h-screen">
        {React.cloneElement(children, { isDarkMode, toggleDarkMode })}
      </div>
    </Provider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper><UserRoot /></AppWrapper>,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'about',
        element: <AboutUspage />,
      },
      {
        path: 'contactus',
        element: <ContactUsPage />,
      },
      {
        path: 'menu',
        element: <MenuPage />,
      },
      {
        path:"order-confirmation",
         element:<OrderConfirmationPage/>
      },
    ],
  },
  {
    path: '/admin',
    element: <AppWrapper><AdminRoot /></AppWrapper>,
    children: [
      {
        path: '',
        element: <AdminPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);