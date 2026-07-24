import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const user = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("isLogged");

        alert("Logged out successfully");

        navigate("/login");
    };

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

                {token && (
                    <>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li>
                            <Link to="/NoticeBoard">NoticeBoard</Link>
                        </li>

                        <li>
                            <Link to="/details/1">Details</Link>
                        </li>
                    </>
                )}

                {role === "admin" && (
                    <li>
                        <Link to="/clienttable">
                            ClientTable
                        </Link>
                    </li>
                )}

            </ul>

            <div>

                {!token ? (
                    <>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>

                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <span
                            style={{
                                marginRight: "15px",
                                fontWeight: "bold",
                            }}
                        >
                            Welcome,
                            {" "}
                            {user?.fullName}
                        </span>

                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;