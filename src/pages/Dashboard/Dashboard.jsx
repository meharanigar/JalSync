import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const [waterData, setWaterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("/waterData.json")
      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();

      })
      .then((data) => {

        setWaterData(data);
        setLoading(false);

      })
      .catch(() => {

        setError("Something went wrong. Please try again later.");
        setLoading(false);

      });

  }, []);

  if (loading) {
    return <h2 className="loading">Loading Water Supply Details...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="dashboard">

      <h1>💧 JalSync Dashboard</h1>

      <div className="card-container">

        {waterData.map((item) => (

          <div className="card" key={item.id}>

            <h2>{item.area}</h2>

            <p>
              <strong>Water Timing:</strong><br />
              {item.timing}
            </p>

            <p>
              <strong>Status:</strong><br />
              {item.status}
            </p>

            <p>
              <strong>Location:</strong><br />
              {item.location}
            </p>

            <button
              onClick={() => navigate(`/details/${item.id}`)}
            >
              View Details
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;