import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Login from "../pages/LoginPage";


const LoginPage = () => {
 
  const uuid = uuidv4();
  const navigate = useNavigate();

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setError('email and password are required');
      return;
    }
    try {
      const response = await axios.post(`http://10.192.190.158:5000/home`, {
        email,
        password,
      });
      console.log('Response:', response);

      if (response && response.status === 200) {
        const sessionKey = uuid;
        console.log(uuid);
        sessionStorage.setItem('sessionKey', sessionKey);
        navigate('/Dashboard');
      }
    } catch (error) {
      setError('Invalid email or password');
      setemail('');
      setPassword('');
    }
    setemail('');
    setPassword('');
  };

  return (
  
      <Login handleUsername={(value)=>setemail(value)} handlePassword={(value)=>{setPassword(value)}}signinButtonfunction={handleLogin}/>
    
  );
};

export default LoginPage;
