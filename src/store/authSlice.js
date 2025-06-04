import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: (() => {
      try {
        return JSON.parse(localStorage.getItem('loggedInUser')) || null;
      } catch (e) {
        console.error('Failed to parse loggedInUser:', e);
        return null;
      }
    })(),
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;