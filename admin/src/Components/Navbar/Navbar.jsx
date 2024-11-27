import React from 'react';
import './Navbar.css';
import navlogo from '../Assets/logooo.jpeg';
import navprofileIcon from '../Assets/nav-profile.svg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Use the navigate hook for better navigation handling

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={navlogo} className='nav-logo' alt="Logo" />

      {/* Title */}
      <div className='alo' style={{ textAlign: 'left', flex: 1 }}>
        <h3 align="left">ALO</h3>
      </div>

      {/* Login/Logout Button */}
      <div className="nav">
        {localStorage.getItem('auth-token') ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login1' style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        )}
      </div>

      {/* Profile Icon */}
      <img src={navprofileIcon} className='nav-profile' alt="Profile Icon" />
    </div>
  );
};

export default Navbar;

