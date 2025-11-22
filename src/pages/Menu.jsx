import React from "react";
import logo from "../assets/images/logo.jpg";
import Footer from "../components/Footer";
const Menu = () => {
  return (
    <div>
      <section>
        <div className="hero">
          {/* Navbar removed, heading retained */}
          <div className="heading">
            <h1>Our Menu</h1>
          </div>
        </div>
      </section>

      <section className="menubar">
        <div className="menu-inf">
          <h3>
            enjoy innovative menus featuring seasonal recipes inspired by
            traditional culinary styles, authentic ingredients, and modern
            techniques!
          </h3>
          <p>
            Jyothi comes from two unique galaxies visible only in red and
            infrared light, making them extremely rare and unique. The brand
            takes inspiration from the galaxies’ rarity and envisions giving
            customers the same experience.Come experience the Amma's Magic at
            Jyothi!
          </p>
          <p>
            At the Jyothi, you can enjoy an extensive menu from 8.30 am, seven
            days a week! From a quick coffee, a bite to eat at lunch, or a
            deliciously crafted dinner, we do it all. You can also enjoy an
            impressive wine list and an exquisite range of cocktails. Jyothi
            Kitchen aims to create an authentic cuisine experience, showcasing
            seasonal dishes historically driven by culinary methods
          </p>
          <h3>THE JYOTHI</h3>
        </div>

        <div className="menu-sec">
          <div className="menu-box">
            {/* Each menu item */}
            <div className="menu1">
              <img
                src="https://www.eatingwell.com/thmb/QiiPNpbhdZUieiex5RXCx9Q2ils=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6886647-b58f1db1fd94454fa2033d95df8446fe.jpg"
                alt="box1"
              />
              <h3>Chicken Soup</h3>
            </div>

            <div className="menu1">
              <img
                src="https://www.eatingwell.com/thmb/M6BsZsh3mIjxTMZigfZtf7prtEY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Copycat-Panera-tomato-basil-soup-109_preview-ca0fe4f2bff7404494b66d7d3c77428e.jpg"
                alt="box2"
              />
              <h3>Tomato Soup</h3>
            </div>

            {/* Add all other menu items similarly */}
            <div className="menu1">
              <img
                src="https://th.bing.com/th/id/OIP._v9G4V-sM-Dd_a3h81xG8wHaLH?rs=1&pid=ImgDetMain"
                alt="box32"
              />
              <h3>Chocolate Mousse Cake</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
