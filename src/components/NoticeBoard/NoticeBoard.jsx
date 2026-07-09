import "./NoticeBoard.css";

function NoticeBoard() {
    return (
        <section className="notice">

            <h2>📢 Today's Water Information</h2>

            <div className="notice-card">

                <h3>Water Supply Time</h3>

                <p>Morning : 6:00 AM - 8:00 AM</p>

                <h3>Water Quality</h3>

                <p>✅ Safe for Drinking</p>

                <h3>Area</h3>

                <p>Guntur - 2nd Zone</p>

            </div>

        </section>
    );
}

export default NoticeBoard;
