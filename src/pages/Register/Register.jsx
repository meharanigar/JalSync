import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
    return (

        <div className="register-page">

            <div className="register-box">

                <h1>Create Your Account</h1>

                <p>Register to receive water supply updates from JalSync.</p>

                <form>

                    <div className="input-box">

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                        />

                    </div>

                    <div className="input-box">

                        <label>Mobile Number</label>

                        <input
                            type="text"
                            placeholder="Enter your mobile number"
                        />

                    </div>

                    <div className="input-box">

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                    </div>

                    <div className="input-box">

                        <label>Village Name</label>

                        <input
                            type="text"
                            placeholder="Enter your village name"
                        />

                    </div>

                    <div className="input-box">

                        <label>Area / Ward Number</label>

                        <input
                            type="text"
                            placeholder="Enter your ward number"
                        />

                    </div>

                    <div className="input-box">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Create password"
                        />

                    </div>

                    <div className="input-box">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                        />

                    </div>

                    <div className="terms">

                        <input type="checkbox"/>

                        <label>I agree to the Terms & Conditions</label>

                    </div>

                    <div className="btns">

                        <button type="submit">
                            Register
                        </button>

                        <button type="reset">
                            Reset
                        </button>

                    </div>

                </form>

                <p className="bottom-text">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Register;