import React from 'react';
import RegisterForm from '../components/AuthForm/RegisterForm';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151a1e]">
      <RegisterForm onSwitchToLogin={() => navigate('/login')} />
    </div>
  );
}
