import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../utils/supabaseClient';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ onSwitchToRegister }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Attempting login with:', form.email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) {
        console.error('Login error:', error);
        setError(error.message);
      } else {
        console.log('Login successful:', data.user);
        alert('Login successful! User: ' + data.user.email);
        navigate('/home');  // Navigate to home page on success
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[512px] max-w-full py-5 mx-auto"
      autoComplete="off"
    >
      <h2 className="text-white text-[28px] font-bold text-center mb-6">Welcome back</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <label className="flex flex-col gap-2 mb-3 text-white font-medium">
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="form-input rounded-xl bg-[#2b3740] text-white h-14 p-4 placeholder:text-[#9eafbd] border border-transparent focus:border-[#c9dcec] focus:outline-none transition"
        />
      </label>

      <label className="flex flex-col gap-2 mb-4 text-white font-medium">
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
          className="form-input rounded-xl bg-[#2b3740] text-white h-14 p-4 placeholder:text-[#9eafbd] border border-transparent focus:border-[#c9dcec] focus:outline-none transition"
        />
      </label>

      <button
        type="submit"
        className="bg-[#c9dcec] text-[#151a1e] text-sm font-bold rounded-full h-12 px-4 mb-4 transition hover:bg-[#b5cee0] disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Log In"}
      </button>

      <p className="text-[#9eafbd] text-sm underline text-center my-2 cursor-pointer hover:text-white transition">
        Forgot password?
      </p>

      <p
        className="text-[#9eafbd] text-sm underline text-center cursor-pointer hover:text-white transition"
        onClick={onSwitchToRegister}
      >
        Don&apos;t have an account? Sign up
      </p>
    </form>
  );
};

export default LoginForm;
