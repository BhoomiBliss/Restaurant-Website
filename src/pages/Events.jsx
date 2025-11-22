import React from "react";
import pic31 from "../assets/images/pic31.jpg";
import pic32 from "../assets/images/pic32.webp";
import Footer from "../components/Footer";
const Events = () => {
  return (
    <div>
      <section className="events-hero">
        <div className="heading">
          <h1>Events</h1>
        </div>
      </section>

      <section className="events">
        <div className="event-wrap-ele">
          <div className="event-item">
            <img src={pic32} alt="Live Music Night" />
            <div className="event-details">
              <h3>Live Music Night</h3>
              <p>
                Join us for a special night with local bands. Enjoy delicious
                food and live performances!
              </p>
              <span className="date">December 12, 2024 - 7:00 PM</span>
            </div>
          </div>
          <div className="event-item">
            <img src={pic31} alt="Cooking Class" />
            <div className="event-details">
              <h3>Cooking Class with Chef Alex</h3>
              <p>
                Learn to make your favorite dishes from scratch in this
                hands-on class!
              </p>
              <span className="date">December 18, 2024 - 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
