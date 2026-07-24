import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import api from "../../api/api";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [village, setVillage] = useState("");
  const [ward, setWard] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    if (
      !fullName ||
      !phone ||
      !email ||
      !village ||
      !ward ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!terms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    try {
      const res = await api.post("/clients", {
        fullName,
        phone,
        email,
        village,
        ward,
        password,
      });

      alert(res.data.message);

      setFullName("");
      setPhone("");
      setEmail("");
      setVillage("");
      setWard("");
      setPassword("");
      setConfirmPassword("");
      setTerms(false);

      navigate("/clienttable");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  }

  return (
    <div className="register-page">
      <div className="register-box">

        <h1>Create Your Account</h1>

        <p>
          Register to receive water supply updates from JalSync.
        </p>

        <form onSubmit={handleRegister}>

          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <label>Village Name</label>
            <input
              type="text"
              placeholder="Enter your village name"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Area / Ward Number</label>
            <input
              type="text"
              placeholder="Enter your ward number"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="terms">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label>I agree to the Terms & Conditions</label>
          </div>

          <div className="btns">
            <button type="submit">Register</button>

            <button
              type="button"
              onClick={() => {
                setFullName("");
                setPhone("");
                setEmail("");
                setVillage("");
                setWard("");
                setPassword("");
                setConfirmPassword("");
                setTerms(false);
              }}
            >
              Reset
            </button>
          </div>

        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;