import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <h2>💧 JalSync</h2>

                    <p>
                        Smart Water Supply & Water Quality
                        Information System that helps citizens
                        receive timely water supply schedules,
                        quality updates, and emergency alerts.
                    </p>

                </div>

                <div className="footer-section">

                    <h3>Our Services</h3>

                    <ul>
                        <li>💧 Water Supply Updates</li>
                        <li>🧪 Water Quality Reports</li>
                        <li>🚨 Emergency Alerts</li>
                        <li>📢 Public Notices</li>
                    </ul>

                </div>

                <div className="footer-section">

                    <h3>Contact Us</h3>

                    <p>📧 support@jalsync.com</p>
                    <p>📞 +91 7095882080</p>
                    <p>📍 Guntur, Andhra Pradesh</p>

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