import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="one">
      <div className="d">
        <h1>
         JalSync – Smart Water Supply Management System. 💧
        </h1>

        <p>
          Know your water supply schedule.
          Check drinking water quality.
          Receive instant notifications.
        </p>

   <button onClick={() => navigate("/dashboard")}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;