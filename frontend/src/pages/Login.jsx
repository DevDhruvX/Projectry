// frontend/src/pages/Login.jsx
import React from 'react';
import LoginForm from '../components/AuthForm/LoginForm.jsx';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151a1e]">
      <LoginForm onSwitchToRegister={() => navigate('/register')} />
    </div>
  );
}
