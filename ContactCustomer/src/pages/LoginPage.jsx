import React from "react";
import { useState } from "react";
import SignUpFunction from "../layout/SignUpFunction.jsx";
import SignInFunction from "../layout/SignInFunction.jsx";
import { v4 as uuidv4 } from 'uuid';
// import {useNavigate} from 'react-router-dom'

const Login = ({ handleUsername, handlePassword, signinButtonfunction }) => {
  const [SignIn, setSignIn] = useState(true);
  return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <div className="bg-white  m-4 p-4 rounded-md border-2 border-purple-600 shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center mx-auto">
      <h2 className="text-xl font-bold italic text-black">[Expleosurance]</h2>
      <h2 className=" mb-4 text-black">Welcome to [Expleosurance]</h2>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  rounded-md">
        <button
          className={`font-serif w-50 px-16 py-2 rounded-l-md    transition duration-300 shadow-lg ${
            SignIn ? "bg-purple-600 text-white" : "bg-white text-black"
          }`}
          onClick={() => setSignIn((bool) => !bool)}
        >
          Sign In
        </button>
        <button
          className={`font-serif w-50 px-14 py-2 rounded-r-md   transition duration-300 shadow-lg  ${
            SignIn ? "bg-white text-black" : "bg-purple-600 text-white"
          }`}
          onClick={() => setSignIn((bool) => !bool)}
        >
          Sign up
        </button>
        <div className=" m-5 p-2 ">
          <div className=" p-2 max-w-sm mx-auto">
            {SignIn ? (
              <SignInFunction
                usernameField="email"
                passwordField="password"
                signinButton={signinButtonfunction}
                handleusername={handleUsername}
                handlepassword={handlePassword}
              />
            ) : (
              <SignUpFunction />
            )}
          </div>
          <div className="mt-4">
            <a href="/register" className="text-black hover:text-purple-600">
              Register new account
            </a>
          </div>
          <div className="mt-2">
            <a
              href="/forgotPassword"
              className="text-black hover:text-purple-600"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
