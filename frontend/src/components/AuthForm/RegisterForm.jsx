// frontend/src/components/AuthForm/RegisterForm.jsx
import React, { useState } from 'react';
import supabase from '../../utils/supabaseClient';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  university: '',
  techSkills: '',
  portfolio: '',
};

const RegisterForm = ({ onSwitchToLogin }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    
    try {
      console.log('Attempting registration with:', form.email);
      
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            fullName: form.fullName,
            university: form.university,
            techSkills: form.techSkills,
            portfolio: form.portfolio,
          },
        },
      });
      
      if (error) {
        console.error('Registration error:', error);
        setError(error.message);
      } else {
        console.log('Registration successful:', data);
        setSuccess('Registration successful! Please check your email to verify your account.');
        setForm(initialState);
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
      <h2 className="text-white text-[28px] font-bold text-center mb-6">Create Your Account</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-400 text-sm text-center">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-900/50 border border-green-500 rounded-lg text-green-400 text-sm text-center">
          {success}
        </div>
      )}

      <label className="flex flex-col gap-2 mb-3 text-white font-medium">
        Full Name
        <input
          name="fullName"
          type="text"
          value={form.fullName}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="form-input rounded-xl bg-[#2b3740] text-white h-14 p-4 placeholder:text-[#9eafbd] border border-transparent focus:border-[#c9dcec] focus:outline-none transition"
        />
      </label>

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

      <label className="flex flex-col gap-2 mb-3 text-white font-medium">
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Create a password (min 6 characters)"
          minLength="6"
          className="form-input rounded-xl bg-[#2b3740] text-white h-14 p-4 placeholder:text-[#9eafbd] border border-transparent focus:border-[#c9dcec] focus:outline-none transition"
        />
      </label>

      <label className="flex flex-col gap-2 mb-3 text-white font-medium">
        University Affiliation
        <select
          name="university"
          value={form.university}
          onChange={handleChange}
          required
          className="form-input rounded-xl bg-[#2b3740] text-white h-14 p-4 border border-transparent focus:border-[#c9dcec] focus:outline-none transition"
        >
          <option value="">Select your university</option>
          <option value="IIT Delhi">IIT Delhi</option>
          <option value="NIT Trichy">NIT Trichy</option>
          <option value="IIT Bombay">IIT Bombay</option>
          <option value="IIT Kanpur">IIT Kanpur</option>
          <option value="BITS Pilani">BITS Pilani</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 mb-3 text-white font-medium">
        Tech Skills <span className="font-normal text-xs text-[#9eafbd]">(Optional)</span>
        <input
          name="techSkills"
          type="text"
          value={form.techSkills}
          onChange={handleChange}
          placeholder="e.g., Python, Java, React, Node.js"
          className="form-input rounded-xl bg-[#2b3740] text-white h-14 p-4 placeholder:text-[#9eafbd] border border-transparent focus:border-[#c9dcec] focus:outline-none transition"
        />
      </label>

      <label className="flex flex-col gap-2 mb-4 text-white font-medium">
        Portfolio/GitHub Link <span className="font-normal text-xs text-[#9eafbd]">(Optional)</span>
        <input
          name="portfolio"
          type="url"
          value={form.portfolio}
          onChange={handleChange}
          placeholder="https://github.com/yourusername or portfolio link"
          className="form-input rounded-xl bg-[#2b3740] text-white h-14 p-4 placeholder:text-[#9eafbd] border border-transparent focus:border-[#c9dcec] focus:outline-none transition"
        />
      </label>

      <button
        type="submit"
        className="bg-[#c9dcec] text-[#151a1e] text-sm font-bold rounded-full h-12 px-4 mb-4 transition hover:bg-[#b5cee0] disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>
      
      <p
        className="text-[#9eafbd] text-sm underline text-center cursor-pointer hover:text-white transition"
        onClick={onSwitchToLogin}
      >
        Already have an account? Log In
      </p>
    </form>
  );
};

export default RegisterForm;