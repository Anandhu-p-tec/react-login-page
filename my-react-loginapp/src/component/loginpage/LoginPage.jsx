import React, { useState } from 'react';
import './loginpagest.css';
import { FaUser,FaLock, FaEnvelope } from "react-icons/fa";

const LoginPage = () => {

    const [action, setAction]= useState('');

    const registerLink = () =>{
        setAction(' active ');
    }

    const loginLink = () =>{
        setAction('  ');
    }

  return (
    <div className={`wrapper${action}`}>
        <div className='form-box login'>
            <form action= "">
                <h1>Login</h1>
                <div className="input_box">
                    <input type='text' 
                    placeholder='username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input_box">
                    <input type='password' 
                    placeholder='password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forget">
                    <label ><input type="checkbox" /> 
                    Remember me</label>
                    <a href="#">Forget password?</a>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className="register-link">
                    <p>Don't have an account <a href="#" onClick={registerLink}>Register</a></p>
                </div>

            </form>

        </div>

        <div className='form-box register'>
            <form action= "">
                <h1>Registration</h1>
                <div className="input_box">
                    <input type='text' 
                    placeholder='username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input_box">
                    <input type='email  ' 
                    placeholder='Email' required />
                    <FaEnvelope className='icon' />
                </div>
                <div className="input_box">
                    <input type='password' 
                    placeholder='password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forget">
                    <label ><input type="checkbox" /> 
                    I agree to the terms and conditions</label>
                   
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <div className="register-link">
                    <p>I already have an account <a href="#" onClick={loginLink}>Login</a></p>
                </div>

            </form>

        </div>

    </div>
  );
};

export default LoginPage;
