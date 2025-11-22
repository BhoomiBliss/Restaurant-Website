import React, { useState } from "react";
import Footer from "../components/Footer";
// Import images
import logo from "../assets/images/logo.jpg";
import logo1 from "../assets/images/logo1.jpeg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import pic5 from "../assets/images/pic5.jpg";
import pic6 from "../assets/images/pic6.jpg";
import pic7 from "../assets/images/pic7.jpg";
import pic8 from "../assets/images/pic8.jpg";
import pic9 from "../assets/images/pic9.jpg";
import pic10 from "../assets/images/pic10.jpg";
import pic11 from "../assets/images/pic11.jpg";
import pic12 from "../assets/images/pic12.jpg";
import pic13 from "../assets/images/pic13.jpg";
import pic14 from "../assets/images/pic14.jpg";
import pic15 from "../assets/images/pic15.jpg";
import pic16 from "../assets/images/pic16.jpg";
import pic17 from "../assets/images/pic17.jpg";
import pic18 from "../assets/images/pic18.jpg";
import pic19 from "../assets/images/pic19.jpg";
import pic33 from "../assets/images/pic33.jpg";
import pic34 from "../assets/images/pic34.jpg";
import pic35 from "../assets/images/pic35.jpeg";
import pic36 from "../assets/images/pic36.jpeg";
import pic37 from "../assets/images/pic37.jpeg";

const images = [
  pic34, pic36, logo1, pic2, pic10, pic14, pic3, pic33, pic4, pic5, pic6,
  pic7, pic8, pic9, pic12, pic13, pic15, pic16, pic17, pic18, pic19, pic11,
  pic35, pic37
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <div>
      <section className="gallery-hero">
        <div className="heading">
  
        </div>
      </section>

      <main className="gallery-sec">
        <div className="gallery-wrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`dish ${index + 1}`}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </main>

      {lightboxOpen && (
        <div className="lightbox" aria-hidden={!lightboxOpen}>
          <button className="lb-close" aria-label="Close" onClick={closeLightbox}>
            &#10005;
          </button>
          <img className="lb-img" src={images[currentIndex]} alt="Preview" />
          <button className="lb-prev" aria-label="Previous" onClick={prevImage}>
            &#10094;
          </button>
          <button className="lb-next" aria-label="Next" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
