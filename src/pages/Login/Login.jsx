import { useState } from "react";
import "./Login.css";
// import {FaEye, FaEyeSlash} from "react-icons";
// import { Link } from "react-router-dom";

function Login() {
  const [logged, setLogged] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (studentName === "") {
      setMessage("Please enter your name.");
      return;
    }

    if (email === "") {
      setMessage("Please enter your email.");
      return;
    }

    if (password === "") {
      setMessage("Please enter your password.");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      if (
        studentName.toLowerCase() === "mehar" &&
        email === "mehar@gmail.com" &&
        password === "234567890"
      ) {
        setLogged(true);
        setMessage("Login Successful!");
      } else {
        setMessage("Invalid Name, Email or Password.");
      }

      setLoading(false);
    }, 2000);
  }

  function handleLogout() {
    setLogged(false);
    setStudentName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setMessage("");
  }

  function handleClear() {
    setStudentName("");
    setEmail("");
    setPassword("");
    setMessage("");
  }

  return (
    <>
      {logged ? (
        <div className="notice-page">
          <h2 className="welcome">
            Welcome, {studentName}! 💧
          </h2>

          <div className="notice-board">
            <h3>📢 Notice Board</h3>

            <ul>
              <li>💧 Water supply timing: 6:00 AM - 8:00 AM</li>
              <li>🔧 Pipeline maintenance on Sunday.</li>
              <li>🚰 Save water. Every drop counts!</li>
              <li>📱 Report water leakage through JalSync.</li>
              <li>⚠️ Tank cleaning scheduled for next Monday.</li>
            </ul>
          </div>

          <div className="logout-container">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="login-page">
          <div className="login-box">
            <h1>Welcome Back</h1>

            <p>Login to continue using JalSync</p>

            <form onSubmit={handleLogin}>
              <div className="input-box">
                <label>Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>

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
            >
              Register
            </button>

            {/* If you have React Router, replace the above button with:
            <Link to="/register" className="register-btn">
              Register
            </Link>
            */}
          </div>
        </div>
      )}
    </>
  );
}

export default Login;