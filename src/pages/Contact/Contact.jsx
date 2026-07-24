import { useState } from "react";
import "./Contact.css";
import api from "../../api/api";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [ward, setWard] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !email ||
      !phone ||
      !area ||
      !ward ||
      !message
    ) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const res = await api.post("/contact", {
        fullName,
        email,
        phone,
        area,
        ward,
        message,
      });

      alert(res.data.message || "Message Sent Successfully!");

      // Clear Form
      setFullName("");
      setEmail("");
      setPhone("");
      setArea("");
      setWard("");
      setMessage("");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to send message."
      );
    }
  };

  return (
    <div className="contact">

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          Have questions, suggestions, or need assistance?
          Our team is here to help you with water supply
          services and support.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info">

        <div className="info-card">
          <h3>📍 Office Address</h3>
          <p>
            JalSync Water Management Office
            <br />
            Tadikonda, Guntur,
            Andhra Pradesh, India
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
            Monday - Saturday
            <br />
            9:00 AM - 5:00 PM
          </p>
        </div>

      </section>

      {/* Contact Form */}
      <section className="contact-form-section">

        <h2>Send Us a Message</h2>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Area"
            value={area}
            onChange={(e) =>
              setArea(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Ward Number"
            value={ward}
            onChange={(e) =>
              setWard(e.target.value)
            }
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
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