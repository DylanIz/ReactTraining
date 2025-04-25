import React, { useState } from "react";
import "../styles.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUsername("");
      setUserColor("Green");
    } else {
      setErrorUsername("Username must be at least 8 characters");
      setUserColor("Red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("Green");
    } else {
      setErrorEmail("Invalid email");
      setEmailColor("Red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("Green");
    } else {
      setErrorPassword("Password must be at least 8 characters");
      setPasswordColor("Red");
    }

    if (confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("Green");
    } else {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("Red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{errorUsername}</p>
          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>
          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>
          <button type="submit" className="submit-btn" onClick={validate}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
