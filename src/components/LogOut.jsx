import React from 'react';
import { useInRouterContext, useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('UserData') 
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>You have been logged out</h1>
      <button onClick={handleLogout} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Logout
      </button>
    </div>
  );
};

export default LogOut;
