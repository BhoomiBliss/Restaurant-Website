import React from "react";
import logo from "../assets/images/logo.jpg";
import Footer from "../components/Footer";
const Contact = () => {
  const msg = () => {
    alert("Message sent successfully!");
  };

  return (
    <div>
      <section className="cont-us">
        <div className="contact-inf">
          <h1>Get In Touch</h1>
          <h5>
            If you have any questions or queries feel free to ask us, our team
            will always be happy to help you.
          </h5>
          <h1>Contact Info :</h1>
          <h5>
            Mangaluru, Mangaluru Urban, Karnataka, 575001 <br />
            For Reservation Call: +91 8542135895
          </h5>
          <h1>Connect with us</h1>
          <div className="conn-us">
            <p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </p>
            <p>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </p>
            <p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </p>
          </div>
        </div>

        <div className="queres">
          <h4>WRITE TO US</h4>
          <h2>Do you have any Questions?</h2>
          <div className="que-inf">
            <div className="que-name">
              <input
                size="1"
                type="text"
                className="que-name"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="que-email">
              <input
                size="1"
                type="text"
                className="res-sys"
                name="Email"
                id="Email"
                placeholder="Email"
                required
              />
            </div>
            <div className="que-ph">
              <input
                size="1"
                type="text"
                className="res-sys"
                name="mobile-no"
                id="mobile-no"
                placeholder="Phone"
                required
                pattern="[0-9]{5}-[0-9]{5}"
                title="Only numbers and '-' allowed"
              />
            </div>
            <div className="que-msg">
              <input
                size="1"
                type="text"
                className="res-sys"
                name="Message"
                id="Message"
                placeholder="Message"
                required
              />
            </div>
            <div>
              <button className="send" onClick={msg}>
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
  );
};

export default Contact;
