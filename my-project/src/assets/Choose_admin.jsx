import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import 'tailwindcss/dist/tailwind.css';
import Background from './images/Background.png'

export default function ChooseAdmin() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="text-center">
        <h1 className="text-6xl font-semibold mb-4 py-8">Company Name</h1>
        <div className="flex flex-col space-y-10 justify-center  mb-8">
          <button className="bg-blue-500 hover:bg-blue-700 w-[30rem] h-12 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 w-[30rem] h-12 text-white font-bold py-2 px-4 rounded">
            Mission
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 w-[30rem] h-12 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
        {/* Login form */}
        {/* ... */}
      </div>
    </div>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <LoginPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
