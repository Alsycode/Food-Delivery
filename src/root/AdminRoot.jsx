import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import db from '../data/db.json';

function AdminRoot({ isDarkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      navigate('/login');
      return;
    }
    const user = JSON.parse(loggedInUser);
    if (user.role !== 'admin') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
    </>
  );
}

export default AdminRoot;