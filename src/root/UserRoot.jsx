import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
function UserRoot({ isDarkMode, toggleDarkMode }) {
  return (
    <><div className=''>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-[600px] w-screen'>
      <Outlet />

      </div>
<Footer/>
<ToastContainer />
    </div>
  
    </>
  );
}

export default UserRoot;