import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ isDarkMode, toggleDarkMode }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar bg-base-100   dark:bg-gray-800 " style={{background:"#e17e0f"}}>
      <div className="navbar-start">
        <Link to={isAdmin ? "/admin" : "/"} className="text-2xl font-bold text-white" >Yummm</Link>
      </div>

      {/* Hamburger for mobile and md screens */}
      <div className="navbar-end md:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute right-4 top-16 z-50 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col space-y-2">
            <button
              onClick={toggleDarkMode}
              className={`btn ${isDarkMode ? 'btn-soft' : 'btn-neutral'} w-full`}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {!isAdmin && (
              <>
                <Link to="/cart" className="btn btn-neutral w-full" onClick={() => setMenuOpen(false)}>
                  Cart ({cartCount})
                </Link>
                <Link to="/login" className="btn btn-neutral w-full" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="btn btn-neutral w-full" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
            {isAdmin && (
              <Link to="/" className="btn btn-outline btn-sm w-full" onClick={() => setMenuOpen(false)}>
                User Portal
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Right-side buttons for large screens */}
      <div className="navbar-end hidden md:flex">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`btn ${isDarkMode ? 'btn-soft' : 'btn-neutral'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {!isAdmin && (
            <>
              <Link to="/cart" className="btn btn-neutral">
                Cart ({cartCount})
              </Link>
              <Link to="/login" className="btn btn-neutral">
                Login
              </Link>
              <Link to="/register" className="btn btn-neutral">
                Register
              </Link>
            </>
          )}
          {isAdmin && (
            <Link to="/" className="btn btn-outline btn-sm">
              User Portal
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
