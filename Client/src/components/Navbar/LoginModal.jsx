import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-header'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
            className='close-button'
            onClick={onClose}
          >
            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
        </div>
        <div className='modal-content'>
          <div className='inner-box'>
            <h2 className='modal-heading'>Login</h2>
            <div className='input-box'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1c-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <input type="text" placeholder="Username" className="input-field"/>
            </div>
            <div className='input-box'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M12 1C7.58 1 4 4.58 4 9v4c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1V9c0-4.42-3.58-8-8-8zm1 15v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm3-7H8V9c0-2.76 2.24-5 5-5s5 2.24 5 5v1z"/>
              </svg>
              <input type="password" placeholder="Password" className="input-field"/>
            </div>
            <button className='login-button'>Login Now</button>
            <div className='separator'>
              <div className='separator-line'></div>
              <div className='separator-text'>Login with Others</div>
              <div className='separator-line'></div>
            </div>
            <div className='google-login-box'>
              Login with Google
            </div>
            <div className='register-text'>
              Don't have an account? <a href='#' style={{ fontWeight: 'bold', color: 'white' }}>Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
