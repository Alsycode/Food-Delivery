import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart4 } from 'react-icons/bs';
import DarkModeToggle from '../components/DarkModeToggle';
import useAuth from '../hooks/useAuth';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const { user, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className="navbar bg-[#e17e0f] text-white shadow-md px-4 sm:px-6 lg:px-10"
      role="navigation"
    >
      {/* Logo */}
      <div className="navbar-start">
        <Link
          to={isAdmin ? '/admin' : '/'}
          className="text-2xl font-bold sm:text-3xl"
          aria-label="Yummm Logo"
        >
          Yummm
        </Link>
      </div>

      {/* Navigation links for lg (1024px) and above */}
      <div className="navbar-center hidden lg:flex">
        <nav className="flex gap-4" aria-label="Main navigation">
          {['/', '/menu', '/about', '/contactus'].map((path, index) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                  isActive ? 'bg-[#ec4f00] font-bold' : 'hover:bg-[#f37335] hover:text-white'
                }`
              }
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              {['Home', 'Menu', 'About', 'Contact Us'][index]}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Right-side actions for lg (1024px) and above */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        {user && !isAdmin ? (
          <>
            <span className="text-base font-semibold truncate max-w-[120px]">
              {user.name}
            </span>
            <Link
              to="/cart"
              className="relative flex items-center"
              aria-label={`Cart with ${cartCount} items`}
            >
              <BsCart4 className="text-3xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full w-5 h-5 bg-black text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={logout}
              className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335] hover:border-[#f37335] text-sm"
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        ) : !user && !isAdmin ? (
          <>
            <Link
              to="/cart"
              className="relative flex items-center"
              aria-label={`Cart with ${cartCount} items`}
            >
              <BsCart4 className="text-3xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full w-5 h-5 bg-black text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              to="/login"
              className="btn btn-primary btn-sm text-sm"
              aria-label="Login"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335] hover:border-[#f37335] text-sm"
              aria-label="Register"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {user && (
              <>
                <span className="text-base font-semibold truncate max-w-[120px]">
                  {user.name}
                </span>
                <button
                  onClick={logout}
                  className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335] hover:border-[#f37335] text-sm"
                  aria-label="Logout"
                >
                  Logout
                </button>
              </>
            )}
            <Link
              to="/"
              className="btn btn-outline btn-sm text-white border-white hover:bg-[#f37335] hover:border-[#f37335] text-sm"
              aria-label="User Portal"
            >
              User Portal
            </Link>
          </>
        )}
      </div>

      {/* Hamburger menu for screens below lg (1024px) */}
      <div className="navbar-end lg:hidden">
        <button
          className="btn btn-square btn-ghost p-2 w-20 h-20"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50  bg-opacity-50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-xl p-4 flex flex-col space-y-3 transform transition-transform duration-300 translate-x-0">
            <button
              className="self-end btn btn-square btn-ghost p-2 w-20 h-20"
              onClick={toggleMenu}
              aria-label="Close navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {['/', '/menu', '/about', '/contactus'].map((path, index) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `btn btn-ghost text-left text-base ${
                      isActive ? 'font-bold bg-gray-200 dark:bg-gray-600' : ''
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {['Home', 'Menu', 'About', 'Contact Us'][index]}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 flex flex-col  justify-center items-center gap-3">
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              {user && !isAdmin ? (
                <>
                  <span className="text-center font-semibold text-base">{user.name}</span>
                  <Link
                    to="/cart"
                    className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2"
                    onClick={() => setMenuOpen(false)}
                    aria-label={`Cart with ${cartCount} items`}
                  >
                    <BsCart4 className="text-lg" /> Cart ({cartCount})
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="btn btn-outline btn-sm w-full text-gray-800 dark:text-white border-gray-300 dark:border-gray-500 hover:bg-[#f37335] hover:text-white"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </>
              ) : !user && !isAdmin ? (
                <>
                  <Link
                    to="/cart"
                    className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2"
                    onClick={() => setMenuOpen(false)}
                    aria-label={`Cart with ${cartCount} items`}
                  >
                    <BsCart4 className="text-lg" /> Cart ({cartCount})
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-primary btn-sm w-full"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Login"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-outline btn-sm w-full text-gray-800 dark:text-white border-gray-300 dark:border-gray-500 hover:bg-[#f37335] hover:text-white"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Register"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  {user && (
                    <>
                      <span className="text-center font-semibold text-base">{user.name}</span>
                      <button
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                        }}
                        className="btn btn-outline btn-sm w-full text-gray-800 dark:text-white border-gray-300 dark:border-gray-500 hover:bg-[#f37335] hover:text-white"
                        aria-label="Logout"
                      >
                        Logout
                      </button>
                    </>
                  )}
                  <Link
                    to="/"
                    className="btn btn-outline btn-sm w-full text-gray-800 dark:text-white border-gray-300 dark:border-gray-500 hover:bg-[#f37335] hover:text-white"
                    onClick={() => setMenuOpen(false)}
                    aria-label="User Portal"
                  >
                    User Portal
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;