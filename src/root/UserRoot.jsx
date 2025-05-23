import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function UserRoot({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] w-screen'>
      <Outlet />

      </div>
<Footer/>
    </>
  );
}

export default UserRoot;