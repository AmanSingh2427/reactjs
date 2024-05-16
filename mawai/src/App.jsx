import { useState } from 'react';
import reactLogo from './assets/react1.webp';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";

function App() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login ID:', loginId);
    console.log('Password:', password);
  };

  return (
   <div className='bg-blue-500'>
     <div className="px-80 mx-40 flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="flex justify-center mb-8">
          <img src={reactLogo} className="h-24 w-auto" alt="React logo" />
        </div>
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MdOutlineMailOutline color="#808080" /> {/* Fill with blue color */}
          </div>
          <input
            type="text"
            id="loginId"
            placeholder="LogIn ID"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiLock color="#808080" /> {/* Fill with blue color */}
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">Forgot Password?</a>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
   </div>
  );
}

export default App;
