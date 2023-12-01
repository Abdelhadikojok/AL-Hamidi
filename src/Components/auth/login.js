import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the Bearer token from local storage
    const token = localStorage.getItem("token");

    // Set the token in the request headers
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []); // This effect runs once when the component mounts

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a login request
      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });

      // Handle successful login
      console.log("Login successful:", response.data);
      setError(null);

      // Optionally, save the new token in local storage
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error.response?.data || error.message);
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
