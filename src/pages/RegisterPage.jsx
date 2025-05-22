import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Check for duplicate email
      const response = await fetch('http://localhost:3001/users?email=' + encodeURIComponent(email));
      const users = await response.json();
      if (users.length > 0) {
        alert('Email already registered.');
        return;
      }

      // Generate new user ID
      const allUsersResponse = await fetch('http://localhost:3001/users');
      const allUsers = await allUsersResponse.json();
      const newUser = {
        id: allUsers.length + 1,
        name,
        email,
        password,
        role: 'user',
      };

      // Add new user to db.json
      const postResponse = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!postResponse.ok) {
        throw new Error('Failed to register user.');
      }

      localStorage.setItem('loggedInUser', JSON.stringify(newUser));
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 dark:bg-gray-700 shadow-xl w-full max-w-md">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Register</h2>
          <div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
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
              onClick={handleRegister}
              className="btn btn-primary w-full"
            >
              Register
            </button>
            <p className="mt-4 text-center">
              Already have an account? <Link to="/login" className="link link-primary">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;