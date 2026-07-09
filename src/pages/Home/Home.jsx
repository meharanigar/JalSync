import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import NoticeBoard from "../../components/NoticeBoard/NoticeBoard";
import EmergencyAlert from "../../components/EmergencyAlert/EmergencyAlert";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <>

            <Navbar />

            <Hero />

            <div className="feature-section">

                <FeatureCard
                    icon="💧"
                    title="Water Schedule"
                    description="Know today's water supply timings."
                />

                <FeatureCard
                    icon="🚰"
                    title="Water Quality"
                    description="Check whether water is safe to drink."
                />

                <FeatureCard
                    icon="🔔"
                    title="Notifications"
                    description="Receive instant water supply updates."
                />

            </div>
            <NoticeBoard/>
            <EmergencyAlert/>
            <Footer/>

        </>
    );
}

export default Home;