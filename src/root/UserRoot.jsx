import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function UserRoot({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className='flex justify-center '>
      <Outlet />
      </div>

    </>
  );
}

export default UserRoot;