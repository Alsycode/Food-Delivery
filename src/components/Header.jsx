import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs";
import DarkModeToggle from "../components/DarkModeToggle"
const Header = ({ isDarkMode, toggleDarkMode }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar bg-base-100 dark:bg-gray-800 md:px-10 sm:px-10" style={{background: "#e17e0f"}}>
      <div className="navbar-start">
        <Link to={isAdmin ? "/admin" : "/"} className="text-3xl font-bold text-white">Yummm</Link>
      </div>

      {/* Navigation links for all screens */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-2">
          <NavLink 
            to="" 
            className={({ isActive }) => 
              `text-white hover:text-gray-200 ${isActive ? 'font-bold' : ''}`
            }
          >
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 " style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
    <span>
    Home
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => 
              `text-white hover:text-gray-200 ${isActive ? 'font-bold' : ''}`
            }
          >
               <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 " style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
    <span>
Menu
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-white hover:text-gray-200 ${isActive ? 'font-bold' : ''}`
            }
          >
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 " style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
    <span>
    About
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
          </NavLink>
          <NavLink 
            to="/contactus" 
            className={({ isActive }) => 
              `text-white hover:text-gray-200 ${isActive ? 'font-bold' : ''}`
            }
          >
               <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 " style={{ background: 'linear-gradient(to right, #fdc830, #f37335)' }}>
    <span>
Contact Us
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
          </NavLink>
        </div>
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
            <NavLink 
              to="" 
              className={({ isActive }) => 
                `btn btn-ghost w-full ${isActive ? 'font-bold' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/menu" 
              className={({ isActive }) => 
                `btn btn-ghost w-full ${isActive ? 'font-bold' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `btn btn-ghost w-full ${isActive ? 'font-bold' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contactus" 
              className={({ isActive }) => 
                `btn btn-ghost w-full ${isActive ? 'font-bold' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <DarkModeToggle />
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
          <DarkModeToggle />
          {!isAdmin && (
            <>
              <Link to="/cart" className='relative'>
                <BsCart4 className="text-4xl"/>
                <div className='absolute top-0 right-0 rounded-full w-[20px] h-[20px] bg-black text-white text-[9px] flex justify-center items-center'>
                  {cartCount}
                </div>
              </Link>
              <Link to="/login" className="btn btn-neutral">
                Login
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
