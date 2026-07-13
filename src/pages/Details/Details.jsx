import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Details.css";


function Details() {

    const { id } = useParams();

    const [water, setWater] = useState(null);

    useEffect(() => {

        fetch("/waterData.json")
            .then((response) => response.json())
            .then((data) => {

                const selectedWater = data.find(
                    (item) => item.id === Number(id)
                );

                setWater(selectedWater);

            });

    }, [id]);

    if (!water) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="details">

            <h1>Water Supply Details</h1>

            <div className="details-card">

                <h2>{water.area}</h2>

                <p><strong>Water Timing:</strong> {water.timing}</p>

                <p><strong>Status:</strong> {water.status}</p>

                <p><strong>Location:</strong> {water.location}</p>

                <p><strong>Description:</strong> {water.description}</p>

                <Link to="/Dashboard">
                    <button>Back to Dashboard</button>
                </Link>

            </div>

        </div>
    );
}

export default Details;