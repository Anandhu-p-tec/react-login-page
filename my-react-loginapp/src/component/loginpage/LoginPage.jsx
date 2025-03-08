import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc } from "../../firebaseConfig";
import "./loginpagest.css";

const LoginPage = () => {
  const [action, setAction] = useState(""); // UI state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerLink = () => setAction(" active ");
  const loginLink = () => setAction("");

  // 🔹 Register User
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), { username, email });

      alert("Registration Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  // 🔹 Login User
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={`wrapper${action}`}>
      {/* 🔹 Login Form */}
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input_box">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <FaUser className="icon" />
          </div>
          <div className="input_box">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <FaLock className="icon" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
          </div>
        </form>
      </div>

      {/* 🔹 Register Form */}
      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className="input_box">
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <FaUser className="icon" />
          </div>
          <div className="input_box">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input_box">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <FaLock className="icon" />
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
