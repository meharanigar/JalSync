import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>

            <h2>💧 JalSync</h2>

            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>

            <div>

                <Link to="/login">
                    <button>Login</button>
                </Link>

                <Link to="/register">
                    <button>Register</button>
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;