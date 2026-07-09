import "./Footer.css";

function Footer() {
    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <h2>💧 JalSync</h2>

                    <p>
                        Smart Water Supply & Water Quality
                        Information System.
                    </p>

                </div>

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>

                        <li>Home</li>

                        <li>About</li>

                        <li>Contact</li>

                        <li>Login</li>

                    </ul>

                </div>

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>Email : support@jalsync.com</p>

                    <p>Phone : +91 7095882080</p>

                    <p>Location : Guntur, Andhra Pradesh</p>

                </div>

            </div>

            <hr />

            <div className="copyright">

                <p>
                    © 2026 JalSync. All Rights Reserved.
                </p>

            </div>

        </footer>

    );
}

export default Footer;