import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import db from '../data/db.json';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    const user = db.users.find(u => u.email === email && u.password === password);
    if (!user) {
      alert('Invalid email or password.');
      return;
    }
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    if (user.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 dark:bg-gray-700 shadow-xl w-full max-w-md">
        <div className="card-body">
          <h2 className="card-title flex justify-center text-2xl mb-4 text-center ">Login</h2>
          <div>
            <div className="form-control flex justify-between mb-4">
              <label className="label">
                <span >Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control flex justify-between mb-4">
              <label className="label">
                <span >Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={handleLogin}
              className="btn btn-primary w-full"
            >
              Login
            </button>
            <div className='flex items-center justify-between'>
            <p className="mt-4 text-center">
              Don't have an account?
              </p>
              <p className='mt-4 text-center'>
               <Link to="/register" className="link link-primary"> Register</Link>
            </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;