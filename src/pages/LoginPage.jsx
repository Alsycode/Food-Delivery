import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const API_URL = 'https://jsondata-1-uc7k.onrender.com';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/users?email=${email}&password=${password}`);
      const user = response.data[0];
      if (!user) {
        toast.error('Invalid email or password.');
        setLoading(false);
        return;
      }
      login(user);
      toast.success('Login successful!');
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Failed to login. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="card bg-white dark:bg-gray-800 shadow-xl w-full max-w-md p-6">
        <div className="card-body flex justify-center items-center text-center">
          <h2 className="card-title text-2xl font-bold text-center text-[#e17e0f] mb-6">Login to Yummm</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control mb-4 flex justify-between gap-3">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Enter your email"
                aria-label="Email address"
                required
                disabled={loading}
              />
            </div>
            <div className="form-control mb-6 flex justify-between gap-3">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Enter your password"
                aria-label="Password"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#e17e0f] text-white hover:bg-[#f37335] transition-colors disabled:bg-gray-400"
              aria-label="Login"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?
              </p>
              <Link
                to="/register"
                className="text-sm text-[#e17e0f] hover:text-[#f37335] font-medium"
                aria-label="Register for a new account"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;