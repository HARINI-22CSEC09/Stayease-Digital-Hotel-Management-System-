import React, { useState } from "react";
import { Link } from "react-router-dom"
export default function HotelManagementSystem() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Business Traveler",
      quote: "Absolutely stunning experience! The staff went above and beyond to make my stay comfortable. The spa services were exceptional.",
      rating: 5, 
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Family Vacation",
      quote: "Perfect for our family vacation. Kids loved the activities and we enjoyed the fine dining options. Will definitely return!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      position: "Family Stay",
      quote: "The romantic package exceeded our expectations. Beautiful views, exceptional service, and the dining was world-class.",
      rating: 5,
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoContainer}>
            <h1 style={styles.logo}>LuxeStay</h1>
            <span style={styles.logoSubtext}>Hotel Management System</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav style={styles.desktopNav}>
          <Link to="/book" style={styles.navLink}>Booking</Link>
            <Link to="/dine" style={styles.navLink}>Dining</Link>
              <Link to="/spa" style={styles.navLink}>SPA</Link>
           <Link to="/feedback" style={styles.navLink}>Feedback</Link>
           <Link to="/about" style={styles.navLink}>AboutUS</Link>
           <Link to="/exp" style={styles.navLink}>Experience</Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            style={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div style={styles.mobileNav}>
            <Link to="/book" style={styles.mobileNavLink}>Booking</Link>
            <Link to="/dine" style={styles.mobileNavLink}>Dining</Link>
              <Link to="/spa" style={styles.mobileNavLink}>SPA</Link>
           <Link to="/feedback" style={styles.mobileNavLink}>Feedback</Link>
           <Link to="/about" style={styles.mobileNavLink}>AboutUS</Link>
           <Link to="/exp" style={styles.mobileNavLink}>Experience</Link>
           <Link to="/login" style={styles.mobileNavLink}>Login</Link>
           
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <h2 style={styles.heroTitle}>Experience Luxury Like Never Before</h2>
            <p style={styles.heroSubtitle}>
              Indulge in world-class amenities, exquisite dining, and personalized service
            </p>
            <button style={styles.heroButton}>Explore Our Rooms</button>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section style={styles.bookingSection}>
        <div style={styles.bookingForm}>
          <h3 style={styles.bookingTitle}>Book Your Stay</h3>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Check-in Date</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Check-out Date</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={styles.formInput}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
            <button style={styles.bookNowButton}>Check Availability</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Our Exclusive Services</h2>
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIconContainer}>
              <span style={styles.serviceIcon}>🛏️</span>
            </div>
            <h3 style={styles.serviceTitle}>Luxury Accommodation</h3>
            <p style={styles.serviceDescription}>
              Experience comfort in our elegantly designed rooms and suites with premium amenities
            </p>
          </div>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIconContainer}>
              <span style={styles.serviceIcon}>🍽️</span>
            </div>
            <h3 style={styles.serviceTitle}>Fine Dining</h3>
            <p style={styles.serviceDescription}>
              Savor exquisite cuisine prepared by award-winning chefs in our restaurants
            </p>
          </div>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIconContainer}>
              <span style={styles.serviceIcon}>💆</span>
            </div>
            <h3 style={styles.serviceTitle}>Premium Spa</h3>
            <p style={styles.serviceDescription}>
              Rejuvenate your senses with our world-class spa treatments and therapies
            </p>
          </div>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIconContainer}>
              <span style={styles.serviceIcon}>🏊</span>
            </div>
            <h3 style={styles.serviceTitle}>Recreation</h3>
            <p style={styles.serviceDescription}>
              Enjoy our swimming pools, fitness center, and various recreational activities
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Guests Say</h2>
        <div style={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={styles.testimonialCard}>
              <div style={styles.testimonialRating}>
                {"★".repeat(testimonial.rating)}
              </div>
              <p style={styles.testimonialQuote}>"{testimonial.quote}"</p>
              <div style={styles.testimonialAuthor}>
                <strong>{testimonial.name}</strong>
                <span style={styles.testimonialPosition}>{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={styles.newsletterSection}>
        <div style={styles.newsletterContent}>
          <h2 style={styles.newsletterTitle}>Stay Updated with Exclusive Offers</h2>
          <p style={styles.newsletterDescription}>
            Subscribe to our newsletter and be the first to know about special offers and events
          </p>
          <div style={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={styles.newsletterInput}
            />
            <button style={styles.newsletterButton}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>LuxeStay</h3>
            <p style={styles.footerDescription}>
              Providing exceptional hospitality and memorable experiences for our valued guests.
            </p>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Quick Links</h3>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>About Us</a></li>
              <li><a href="#" style={styles.footerLink}>Services</a></li>
              <li><a href="#" style={styles.footerLink}>Contact</a></li>
              <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Contact Us</h3>
            <p style={styles.contactInfo}>
              <strong>Address:</strong> 123 Resort Avenue, Paradise City
            </p>
            <p style={styles.contactInfo}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p style={styles.contactInfo}>
              <strong>Email:</strong> info@luxestay.com
            </p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>© 2025 LuxeStay Hotel Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    margin: 0,
    padding: 0,
    color: "#333",
  },
  
  // Header Styles
  header: {
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1e40af",
    margin: 0,
  },
  logoSubtext: {
    marginLeft: "10px",
    color: "#6b7280",
    fontSize: "14px",
    display: "none",
    "@media (min-width: 768px)": {
      display: "inline",
    },
  },
  desktopNav: {
    display: "none",
    alignItems: "center",
    gap: "24px",
    "@media (min-width: 768px)": {
      display: "flex",
    },
  },
  navLink: {
    color: "#4b5563",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    transition: "color 0.3s ease",
    ":hover": {
      color: "#1e40af",
    },
  },
  loginButton: {
    backgroundColor: "#1e40af",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#1e3a8a",
    },
  },
  mobileMenuButton: {
    display: "block",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "24px",
    color: "#4b5563",
    cursor: "pointer",
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderTop: "1px solid #e5e7eb",
  },
  mobileNavLink: {
    color: "#4b5563",
    textDecoration: "none",
    padding: "12px 0",
    borderBottom: "1px solid #f3f4f6",
    fontWeight: "500",
  },
  mobileLoginButton: {
    backgroundColor: "#1e40af",
    color: "#fff",
    padding: "10px 0",
    margin: "10px 0",
    textAlign: "center",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "500",
  },
  
  // Hero Section
  hero: {
    backgroundImage: "url('https://source.unsplash.com/random/1600x900/?luxury-hotel')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
    position: "relative",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  },
  heroContent: {
    textAlign: "center",
    maxWidth: "800px",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "16px",
    "@media (max-width: 768px)": {
      fontSize: "36px",
    },
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#fff",
    marginBottom: "32px",
    "@media (max-width: 768px)": {
      fontSize: "18px",
    },
  },
  heroButton: {
    backgroundColor: "#1e40af",
    color: "#fff",
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#1e3a8a",
    },
  },
  
  // Booking Section
  bookingSection: {
    padding: "40px 20px",
    backgroundColor: "#f8fafc",
  },
  bookingForm: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)",
    transform: "translateY(-80px)",
  },
  bookingTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "24px",
    textAlign: "center",
    color: "#1e40af",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    alignItems: "end",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  formLabel: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#4b5563",
  },
  formInput: {
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
  },
  bookNowButton: {
    backgroundColor: "#1e40af",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#1e3a8a",
    },
  },
  
  // Services Section
  servicesSection: {
    padding: "40px 20px 80px",
    backgroundColor: "#fff",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
    color: "#1e40af",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  serviceCard: {
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    },
  },
  serviceIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70px",
    height: "70px",
    backgroundColor: "#e0e7ff",
    borderRadius: "50%",
    margin: "0 auto 20px",
  },
  serviceIcon: {
    fontSize: "32px",
  },
  serviceTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    textAlign: "center",
    color: "#1e40af",
  },
  serviceDescription: {
    fontSize: "16px",
    color: "#4b5563",
    textAlign: "center",
    lineHeight: 1.6,
  },
  
  // Testimonials Section
  testimonialsSection: {
    padding: "80px 20px",
    backgroundColor: "#f8fafc",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)",
  },
  testimonialRating: {
    color: "#eab308",
    fontSize: "24px",
    marginBottom: "16px",
  },
  testimonialQuote: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#4b5563",
    fontStyle: "italic",
    marginBottom: "20px",
  },
  testimonialAuthor: {
    display: "flex",
    flexDirection: "column",
  },
  testimonialPosition: {
    color: "#6b7280",
    fontSize: "14px",
    marginTop: "4px",
  },
  
  // Newsletter Section
  newsletterSection: {
    padding: "80px 20px",
    backgroundColor: "#1e3a8a",
  },
  newsletterContent: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  newsletterTitle: {
    fontSize: "32px",
    color: "#fff",
    fontWeight: "700",
    marginBottom: "16px",
  },
  newsletterDescription: {
    fontSize: "18px",
    color: "#e0e7ff",
    marginBottom: "32px",
  },
  newsletterForm: {
    display: "flex",
    maxWidth: "500px",
    margin: "0 auto",
    "@media (max-width: 640px)": {
      flexDirection: "column",
    },
  },
  newsletterInput: {
    flex: 1,
    padding: "12px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px 0 0 4px",
    "@media (max-width: 640px)": {
      borderRadius: "4px",
      marginBottom: "10px",
    },
  },
  newsletterButton: {
    backgroundColor: "#1e40af",
    color: "#fff",
    padding: "0 24px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "@media (max-width: 640px)": {
      borderRadius: "4px",
      padding: "12px 24px",
    },
    ":hover": {
      backgroundColor: "#1e3a8a",
    },
  },
  
  // Footer
  footer: {
    backgroundColor: "#1f2937",
    color: "#e5e7eb",
    padding: "60px 20px 20px",
  },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    marginBottom: "40px",
  },
  footerSection: {
    
  },
  footerTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#fff",
  },
  footerDescription: {
    fontSize: "14px",
    lineHeight: 1.7,
  },
  footerLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  footerLink: {
    color: "#e5e7eb",
    textDecoration: "none",
    marginBottom: "12px",
    display: "block",
    fontSize: "14px",
    transition: "color 0.3s ease",
    ":hover": {
      color: "#fff",
    },
  },
  contactInfo: {
    marginBottom: "12px",
    fontSize: "14px",
  },
  footerBottom: {
    borderTop: "1px solid #374151",
    paddingTop: "20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  copyright: {
    fontSize: "14px",
    color: "#9ca3af",
  },
};