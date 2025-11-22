import React from "react";
import hero1 from "../assets/images/hero1.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section>
        <div className="hero">
          {/* Navbar removed because Navbar.jsx handles it */}
          <div className="heading">
            <h1>An epicurean odyssey awaits your discovery</h1>
            <h2>
              Savor the taste of real, traditional meals, made with the
              highest-quality ingredients, ensuring every bite is full of rich
              and natural flavor
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="main">
          <div className="ele-about">
            <img src={hero1} alt="Hero" />
            <div className="about-line">
              <h3>WELCOME TO JYOTHI</h3>
              <h1>
                A tribute to the warm Mangalore costs enriched with delicious
                Mangalore, Udupi and Bangalore flavors
              </h1>
              <h5>
                The Jyothi, “The Fine Artisan Kitchen,” offers an array of
                dishes, sourcing the finest fresh produce and seasonally
                acquired ingredients to create an unforgettable culinary
                experience with its world-class international chef. The
                beautifully marinated olives, feta cheese, the aroma of
                Moroccan spices, sumac, and fresh rosemary with the tasty
                coconut oil will take you on a food journey you will remember
                forever! Jyothi’s cuisine takes inspiration from the warm
                Mangalore lands, particularly culturally enriched and delicious.
              </h5>
              <button>
                <a
                  href="/about.html"
                  style={{ textDecoration: "underline", textDecorationColor: "#032001" }}
                >
                  READ MORE+
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
