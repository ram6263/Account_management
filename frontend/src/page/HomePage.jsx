import React, { useState } from 'react'
import LoginForm from '../component/Authentication/LoginForm';

import SignUpForm from '../component/Authentication/SiginForm';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 rounded-t-lg ${
                activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg ${
                activeTab === 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Signup
            </button>
          </div>
          <div className="p-4">
            {activeTab === 'login' ? <LoginForm /> : <SignUpForm/>}
          </div>
        </div>
      </div>
    );
  
}

export  {HomePage}
