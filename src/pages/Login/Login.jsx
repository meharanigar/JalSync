import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    if (!password) {
      setMessage("Please enter your password.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await api.post("/clients/login", {
        email,
        password,
      });

      if (res.data.success) {
        // Save JWT Token
        localStorage.setItem("token", res.data.token);

        // Save Login Status
        localStorage.setItem("isLogged", "true");

        // Save User Details
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(res.data.client)
        );

        // Save User Role
        localStorage.setItem("role", res.data.client.role);

        setMessage("Login Successful!");

        // Redirect based on role
        setTimeout(() => {
          if (res.data.client.role === "admin") {
            navigate("/clienttable");
          } else {
            navigate("/dashboard");
          }
        }, 1000);
      }
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  function handleClear() {
    setEmail("");
    setPassword("");
    setMessage("");
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome Back</h1>

        <p>Login to continue using JalSync</p>

        <form onSubmit={handleLogin}>
          <div className="input-box">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="forgot-password">
              Forgot Password?
            </p>
          </div>

          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
          >
            Clear
          </button>

          {message && (
            <p className="message">{message}</p>
          )}
        </form>

        <button
          type="button"
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;