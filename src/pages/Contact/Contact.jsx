import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions, suggestions, or need assistance? Our team is here to
          help you with water supply services and support.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info">

        <div className="info-card">
          <h3>📍 Office Address</h3>
          <p>
            JalSync Water Management Office<br />
            Tadikonda,Guntur, Andhra Pradesh, India
          </p>
        </div>

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-card">
          <h3>📧 Email</h3>
          <p>meharnigarshaik@gmail.com</p>
        </div>

        <div className="info-card">
          <h3>🕒 Working Hours</h3>
          <p>
            Monday - Saturday<br />
            9:00 AM - 5:00 PM
          </p>
        </div>

      </section>

      {/* Contact Form */}
      <section className="contact-form-section">

        <h2>Send Us a Message</h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />
          <input
            type="text"
            placeholder="Area"
          />

            <input
            type="text"
            placeholder="Ward Number"
            />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}

export default Contact;