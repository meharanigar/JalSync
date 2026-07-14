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

                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                    <Link to="/NoticeBoard">NoticeBoard</Link>
                </li>

                <li>
                    <Link to="/details/1">Details</Link>
                </li>

                <li>
                    <Link to="/clienttable">clientTable</Link>
                </li>

            </ul>

            <div>

                <Link to="/login">
                    <button>Login</button>
                </Link>

                <Link to="/register">
                    <button>Register</button>
                </Link>

                {/* <li>
                    <Link to="/noticeboard">
                    Notice Board</Link>
                </li> */}

            </div>

        </nav>
    );
}

export default Navbar;