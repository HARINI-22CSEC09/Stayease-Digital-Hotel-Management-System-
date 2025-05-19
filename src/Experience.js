
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Experience.css"; // Add custom styles here

const bootstrap = require("bootstrap");

const ExperiencePage = () => {
  useEffect(() => {
    const heroCarousel = document.querySelector("#heroCarousel");
    if (heroCarousel) {
      new bootstrap.Carousel(heroCarousel, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  const luxuryExperience = [
    {
      title: "Infinity Pool",
      description: "Relax in our rooftop infinity pool with a stunning skyline view.",
      info: "Our rooftop infinity pool offers panoramic views of the city and a tranquil escape with cabanas and refreshments.",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Gourmet Dining",
      description: "Indulge in a culinary journey with our world-class chefs.",
      info: "Choose from multiple fine-dining experiences with seasonal menus, curated wines, and elegant settings.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Luxury Spa",
      description: "Rejuvenate your senses with our signature spa treatments.",
      info: "Enjoy full-body massages, aromatherapy, sauna access, and personalized wellness plans.",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const galleryTour = [
    {
      title: "Presidential Suite",
      description: "Spacious and elegant rooms with panoramic views.",
      info: "Equipped with a private lounge, jacuzzi, office space, and 24/7 personal butler service.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Resort Grounds",
      description: "Explore lush gardens and peaceful courtyards.",
      info: "Our resort features sculptures, fountains, and walking trails across 12 acres of landscaped beauty.",
      image: "https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Private Beach",
      description: "Enjoy exclusive access to our pristine beachfront.",
      info: "White sand, crystal waters, and beachside food service await your leisure.",
      image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const renderCardSection = (title, items) => (
    <div className="container my-5">
      <h2 className="text-center mb-4">{title}</h2>
      <div className="row">
        {items.map((item, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={item.image} alt={item.title} className="card-img" />
                  <div className="overlay">
                    <h5 className="text-white">{item.title}</h5>
                    <p className="text-white small">{item.description}</p>
                  </div>
                </div>
                <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                  <h5>{item.title}</h5>
                  <p>{item.info}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Carousel */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
  {[0, 1, 2, 3].map((i) => (
    <button
      key={i}
      type="button"
      data-bs-target="#heroCarousel"
      data-bs-slide-to={i}
      className={i === 0 ? "active" : ""}
      aria-label={`Slide ${i + 1}`}
    />
  ))}
</div>

<div className="carousel-inner" style={{ height: "100vh" }}>
  {[
    {
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Welcome to Paradise",
      subtitle: "Unwind in luxury and style."
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80",
      title: "Relax by the Ocean",
      subtitle: "Experience the serenity of the sea."
    },
    {
      image: "https://img.freepik.com/premium-photo/luxury-hotel-five-star-room-service-various-food-platters-bread-coffee-as-inroom-breakfast-travel-hospitality_360074-36899.jpg",
      title: "Fine Dining Experience",
      subtitle: "Savor world-class cuisines at your doorstep."
    },
    {
      image: "https://static.wixstatic.com/media/8b2584_2ad6d5e96fc146fba679fa231ccedff0~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8b2584_2ad6d5e96fc146fba679fa231ccedff0~mv2.jpg",
      title: "Your Journey Begins Here",
      subtitle: "Explore, dream, discover."
    }
  ].map((slide, idx) => (
    <div
      key={idx}
      className={`carousel-item ${idx === 0 ? "active" : ""}`}
    >
      <img
        src={slide.image}
        className="d-block w-100"
        alt={`Slide ${idx + 1}`}
        style={{ height: "100vh", objectFit: "cover" }}
      />
      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
        <h1 className="display-4 text-white">{slide.title}</h1>
        <p className="text-white">{slide.subtitle}</p>
      </div>
    </div>
  ))}
</div>


        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Flip Card Sections */}
      {renderCardSection("Experience Luxury", luxuryExperience)}
      {renderCardSection("Gallery Tour", galleryTour)}
    </div>
  );
};

export default ExperiencePage;

