import React from "react";
import logo from "../assets/images/logo.jpg";
import logo1 from "../assets/images/logo1.jpeg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <section>
        <div className="hero">
          {/* Removed navbar here since Navbar.jsx handles it */}
          <div className="heading">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      <div className="quote">
        <i className="fa-solid fa-quote-left"></i>
        <h4>Our Mission</h4>
        <p>
          To bring cognitive, value-driven, distinct experience through fine
          dining authentic Mangalore cuisine.
        </p>
      </div>

      <div className="story-sec">
        <h3>Inspired by a rare galaxy</h3>
        <h1>
          Our food is a tribute to the warm Mangalore lands, with enriched and
          delicious.
        </h1>
        <p>
          Jyothi, “The Fine Artisan Kitchen,” we offer a curated selection of
          dishes crafted with the finest fresh produce and seasonal ingredients,
          all brought together by our internationally renowned chef. Each dish
          showcases the vibrant and aromatic Indian spices, perfectly
          complemented by the rich flavor of coconut oil, promising a food
          journey that will stay with you long after the meal. Inspired by the
          warm, culturally rich lands of Mangalore, our cuisine blends tradition
          and innovation to create an unforgettable dining experience.
        </p>
      </div>

      <section className="our-story">
        <div className="magic-img">
          <img src={logo1} alt="mother-magic" />
        </div>
        <div className="magic-sec">
          <h4>Amma's magic</h4>
          <p>
            A cherished recipe passed down through generations, our signature
            biriyani brings you the flavors of Mangalore with every bite.
            Slow-cooked to perfection with the finest spices, tender meat or
            vegetables, and fragrant rice, it's a dish made with love, just like
            Amma used to make. Infused with the richness of coconut oil and a
            secret blend of spices, this biriyani is more than a meal—it’s a
            journey into tradition and warmth.
          </p>
        </div>
      </section>

      <div className="quote">
        <i className="fa-solid fa-quote-left"></i>
        <h4>Our Vision</h4>
        <p>
          Jyothi envisions inspiring a shift within the restaurant industry, by
          bringing in more experience-centric and high-end, high-quality simple,
          yet authentic cuisine with their international chefs.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
