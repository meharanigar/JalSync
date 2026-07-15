import "./About.css";

function About() {
  return (
    <div className="about">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About JalSync</h1>
        <h3>Smart Water Supply Management System</h3>
        <p>
          JalSync is a modern water management platform developed to provide
          residents with timely water supply information, quality updates, and
          an easy way to report water-related issues. Our goal is to improve
          communication between communities and water authorities through a
          reliable and user-friendly digital solution.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Water is one of the most essential resources for daily life, yet many
          communities still face uncertainty regarding supply schedules and
          service updates. JalSync was created to bridge this communication gap
          by providing a single platform where residents can access official
          announcements, water supply timings, and important service
          information anytime and anywhere.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make water management smarter, more transparent,
          and easily accessible. By combining technology with public services,
          JalSync empowers citizens with accurate information while helping
          local authorities improve communication and service delivery.
        </p>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-container">

          <div className="service-card">
            <h3>💧 Water Supply Schedule</h3>
            <p>
              View daily and weekly water supply timings for your locality.
            </p>
          </div>

          <div className="service-card">
            <h3>📢 Public Notice Board</h3>
            <p>
              Stay updated with maintenance announcements and emergency notices.
            </p>
          </div>

          <div className="service-card">
            <h3>🧪 Water Quality Updates</h3>
            <p>
              Access water quality reports and safety information for your area.
            </p>
          </div>

          <div className="service-card">
            <h3>🚨 Report Water Issues</h3>
            <p>
              Report leaks, pipeline damage, low water pressure, or supply
              interruptions quickly and efficiently.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="about-section">
        <h2>Why Choose JalSync?</h2>

        <ul className="about-list">
          <li>✔ Real-Time Water Supply Information</li>
          <li>✔ Transparent Public Communication</li>
          <li>✔ Reliable Water Quality Updates</li>
          <li>✔ Simple Issue Reporting System</li>
          <li>✔ User-Friendly Interface</li>
          <li>✔ Community-Focused Digital Solution</li>
        </ul>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>

        <p>
          We envision a future where every community has access to transparent,
          reliable, and technology-driven water management services. JalSync
          aims to create smarter cities by improving communication between
          citizens and water authorities while promoting efficient and
          sustainable water resource management.
          
        </p>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Together, Let's Build Smarter Water Management</h2>

        <p>
          Join JalSync and stay informed with real-time updates, water quality
          information, and community notices. Together we can create a more
          efficient and sustainable future.
        </p>

        <button>Explore Services</button>
      </section>

    </div>
  );
}

export default About;