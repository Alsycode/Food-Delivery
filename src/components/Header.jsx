import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs";
import DarkModeToggle from "../components/DarkModeToggle";
import useAuth from "../hooks/useAuth";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const { user, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar bg-[#e17e0f] text-white md:px-10 sm:px-10 shadow-md" role="navigation">
      <div className="navbar-start">
        <Link to={isAdmin ? "/admin" : "/"} className="text-3xl font-bold">Yummm</Link>
      </div>

      {/* Navigation links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-4">
          {['/', '/menu', '/about', '/contactus'].map((path, index) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? 'bg-[#ec4f00] font-bold' : 'hover:bg-[#fdc830]'
                }`
              }
            >
              {['Home', 'Menu', 'About', 'Contact Us'][index]}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Hamburger for mobile and medium screens */}
      <div className="navbar-end md:hidden">
        <button
          className="btn btn-square btn-ghost w-20 h-20"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute right-4 top-16 z-50 w-48 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-xl rounded-lg p-4 flex flex-col space-y-2">
            {['/', '/menu', '/about', '/contactus'].map((path, index) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `btn btn-ghost w-full text-left ${isActive ? 'font-bold bg-gray-200 dark:bg-gray-600' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {['Home', 'Menu', 'About', 'Contact Us'][index]}
              </NavLink>
            ))}
            <div className="flex justify-center items-center">
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
            {user && !isAdmin ? (
              <>
                <span className="text-center font-semibold">{user.name}</span>
                <Link
                  to="/cart"
                  className="btn btn-outline btn-sm w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Cart ({cartCount})
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="btn btn-outline btn-sm w-full"
                >
                  Logout
                </button>
              </>
            ) : !user && !isAdmin ? (
              <>
                <Link
                  to="/cart"
                  className="btn btn-outline btn-sm w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Cart ({cartCount})
                </Link>
                <Link
                  to="/login"
                  className="btn btn-primary btn-sm w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline btn-sm w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {user && (
                  <>
                    <span className="text-center font-semibold">{user.name}</span>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="btn btn-outline btn-sm w-full"
                    >
                      Logout
                    </button>
                  </>
                )}
                <Link
                  to="/"
                  className="btn btn-outline btn-sm w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  User Portal
                </Link>
              </>
            )}
          </div>
        )}
      </div>

      {/* Right-side buttons for large screens */}
      <div className="navbar-end hidden md:flex items-center space-x-4">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        {user && !isAdmin ? (
          <>
            <span className="font-semibold">{user.name}</span>
            <Link to="/cart" className="relative" aria-label={`Cart with ${cartCount} items`}>
              <BsCart4 className="text-3xl" />
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 bg-black text-white text-xs flex justify-center items-center">
                  {cartCount}
                </div>
              )}
            </Link>
            <button
              onClick={logout}
              className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335]"
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        ) : !user && !isAdmin ? (
          <>
            <Link to="/cart" className="relative" aria-label={`Cart with ${cartCount} items`}>
              <BsCart4 className="text-3xl" />
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 bg-black text-white text-xs flex justify-center items-center">
                  {cartCount}
                </div>
              )}
            </Link>
            <Link to="/login" className="btn btn-primary btn-sm" aria-label="Login">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335]" aria-label="Register">
              Register
            </Link>
          </>
        ) : (
          <>
            {user && (
              <>
                <span className="font-semibold">{user.name}</span>
                <button
                  onClick={logout}
                  className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335]"
                  aria-label="Logout"
                >
                  Logout
                </button>
              </>
            )}
            <Link
              to="/"
              className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335]"
              aria-label="User Portal"
            >
              User Portal
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;