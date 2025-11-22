import React from "react";
import logo from "../assets/images/logo.jpg";
import Footer from "../components/Footer";
const Reservation = () => {
  const handleMsg = () => {
    alert("Reservation Done successfully!");
  };

  return (
    <div>
      <section>
        <div className="hero">
          {/* Navbar removed, heading retained */}
          <div className="heading">
            <h1>Make A Reservation</h1>
          </div>
        </div>
      </section>

      <section className="reserving-container">
        <div className="reserve-sec">
          <h3>RESERVATION</h3>
          <h2>Are you ready for a culinary adventure ?</h2>

          <div className="reserve-name">
            <label htmlFor="name" className="reserve-symbol">
              Name
            </label>
            <input
              size="1"
              type="text"
              className="res-sys"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              aria-required="true"
            />
          </div>

          <div className="reserve-email">
            <label htmlFor="Email" className="reserve-symbol">
              Email
            </label>
            <input
              size="1"
              type="text"
              className="res-sys"
              name="Email"
              id="Email"
              placeholder="Email"
              required
              aria-required="true"
            />
          </div>

          <div className="reserve-telph">
            <label htmlFor="mobile-no" className="reserve-symbol">
              Mobile Number
            </label>
            <input
              size="1"
              type="text"
              className="res-sys"
              name="mobile-no"
              id="mobile-no"
              required
              aria-required="true"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              title="only Phone Number and charaters'#','&'and '-'"
            />
          </div>

          <div className="reserve-date">
            <label htmlFor="rev-date" className="reserve-symbol">
              Date
            </label>
            <input
              size="1"
              type="text"
              className="res-sys"
              name="rev-date"
              id="rev-date"
              placeholder="2022-11-25"
              required
              aria-required="true"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />
          </div>

          <div className="reserve-time">
            <label htmlFor="rev-time" className="reserve-symbol">
              Time
            </label>
            <input
              size="1"
              type="text"
              className="res-sys"
              name="rev-time"
              id="rev-time"
              placeholder="20:00"
              required
              aria-required="true"
            />
          </div>

          <div className="reserve-guest">
  <label htmlFor="guests" className="reserve-symbol">
    Number of Guests
    <br />
    LIMITED SEATS ‼️
  </label>
  <select
    name="guests"
    id="guests"
    className="res-sys" // match input styling
    required
    aria-required="true"
    defaultValue=""
  >
    <option value="" disabled>
      Select number of guests
    </option>
    {Array.from({ length: 10 }, (_, i) => (
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select>
</div>

          <button type="button" className="res-submit" onClick={handleMsg}>
            <span>RESERVE A TABLE</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservation;
