import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
export { default as LoginForm } from './LoginForm';
export { default as RegisterForm } from './RegisterForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);