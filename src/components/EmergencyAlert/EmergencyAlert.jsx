import "./EmergencyAlert.css";

function EmergencyAlert() {
    return (
        <section className="alert">

            <h2>🚨 Emergency Alerts</h2>

            <div className="alert-card">

                <h3>Pipeline Leakage</h3>

                <p>
                    Water supply has been temporarily stopped
                    due to pipeline maintenance.
                </p>

                <button>View Details</button>

            </div>

        </section>
    );
}

export default EmergencyAlert;