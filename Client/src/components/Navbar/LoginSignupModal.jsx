import React, { useState } from 'react';

const LoginSignupModal = ({ toggleModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed text-black inset-0 flex items-center justify-center font-montserrat-medium">
      <div className="bg-white rounded-lg w-96 p-6 mt-[40rem] ">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`p-12 w-48 py-2 ${isLogin ? 'bg-slate-200 border-b-2 border-violet-300' : ''}`}
          >
            Sign in
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-56 py-2 ${!isLogin ? 'bg-slate-200  border-b-2 border-violet-300' : ''}`}
          >
            New account
          </button>
        </div>
        {isLogin ? (
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex items-center mb-3">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </div>
            <button className="w-full bg-violet-400 text-white p-2 rounded">
              Login
            </button>
          </div>
        ) : (
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-3 p-2 border rounded"
            />
            <button className="w-full bg-violet-400 text-white p-2 rounded">
              Sign Up
            </button>
          </div>
        )}
        <div className="text-center mt-3">
          <button onClick={toggleModal} className="text-violet-400">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
