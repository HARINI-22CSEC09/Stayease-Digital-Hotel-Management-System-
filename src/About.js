import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
      
         
      </div>

      {/* About Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Welcome to Royal Grand Hotel</h2>
          <p>
            The Royal Grand Hotel is a haven of luxury, combining heritage with modern comfort.
            Nestled in a prime location, our hotel offers a seamless blend of timeless elegance 
            and contemporary sophistication.
          </p>
          <p>
            Our world-class hospitality, breathtaking architecture, and unmatched amenities make 
            us the preferred choice for both leisure and business travelers.
          </p>
        </div>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg" alt="Luxury Hotel" />
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_586,w_4712,h_2650,r_0,c_crop,q_80,fl_progressive/w_1350,f_auto,c_fit/ananta-spa-resort-jaipur/Elegant(1)" alt="Luxury Rooms" />
          <h3>Elegant Rooms</h3>
          <p>Experience unmatched luxury in our well-furnished suites.</p>
        </div>
        <div className="feature-card">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e7/d0/7a/ahaaram-multicuisine.jpg?w=600&h=400&s=1" alt="Fine Dining" />
          <h3>Fine Dining</h3>
          <p>Indulge in gourmet cuisine prepared by top chefs.</p>
        </div>
        <div className="feature-card">
          <img src="https://cache.marriott.com/content/dam/marriott-renditions/SYXEB/syxeb-spa-5353-hor-wide.jpg" alt="Spa & Wellness" />
          <h3>Wellness & Spa</h3>
          <p>Rejuvenate with our premium wellness and spa services.</p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section">
        <h2>Hotel Royal Grand - The Values We Live By</h2>
        <div className="values-grid">
          <div className="value-card">
            <span>👍</span>
            <h3>Commitment to Excellence</h3>
            <p>We strive for the highest standards, ensuring an impeccable guest experience.</p>
          </div>
          <div className="value-card">
            <span>👥</span>
            <h3>Unparalleled Hospitality</h3>
            <p>Our staff goes above and beyond to make guests feel comfortable and valued.</p>
          </div>
          <div className="value-card">
            <span>📑</span>
            <h3>Attention to Detail</h3>
            <p>Every aspect is carefully curated to create a memorable stay.</p>
          </div>
          <div className="value-card">
            <span>🔄</span>
            <h3>Personalized Service</h3>
            <p>Tailored services to match every guest's unique preferences.</p>
          </div>
          <div className="value-card">
            <span>🌱</span>
            <h3>Sustainability</h3>
            <p>Committed to eco-friendly initiatives for a greener future.</p>
          </div>
          <div className="value-card">
            <span>🍽</span>
            <h3>Culinary Excellence</h3>
            <p>Delicious, innovative dishes crafted by top chefs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p>📍 Address: 123 Grand Avenue, New York, USA</p>
          <p>📞 Phone: +1 234 567 890</p>
          <p>✉ Email: info@royalgrand.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Royal Grand Hotel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;