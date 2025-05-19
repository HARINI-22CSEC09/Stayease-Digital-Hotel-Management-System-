import React from 'react';

const HotelDiningPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Luminaire Restaurant</h1>
        <p style={styles.subtitle}>Culinary Elegance at Grand Horizon Hotel</p>
      </header>

      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h2 style={styles.heroTitle}>Savor Extraordinary Dining</h2>
          <p style={styles.heroDescription}>
            An exquisite culinary journey awaits you at our signature restaurant
          </p>
        </div>
      </div>

      <section style={styles.menuHighlight}>
        <div style={styles.menuContent}>
          <h3 style={styles.sectionTitle}>Our Culinary Experience</h3>
          <div style={styles.menuGrid}>
            <div style={styles.menuItem}>
              <h4 style={styles.menuItemTitle}>Seasonal Tasting Menu</h4>
              <p style={styles.menuItemDesc}>
                A curated selection of locally sourced ingredients
              </p>
            </div>
            <div style={styles.menuItem}>
              <h4 style={styles.menuItemTitle}>Wine Pairing</h4>
              <p style={styles.menuItemDesc}>
                Expertly selected wines to complement each course
              </p>
            </div>
            <div style={styles.menuItem}>
              <h4 style={styles.menuItemTitle}>Chef's Special</h4>
              <p style={styles.menuItemDesc}>
                Innovative creations from our award-winning chef
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.reservationSection}>
        <h3 style={styles.sectionTitle}>Make a Reservation</h3>
        <p style={styles.reservationText}>
          Experience dining excellence. Book your table now.
        </p>
        <button style={styles.reservationButton}>
          Reserve Your Table
        </button>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>Open Daily: 6:00 PM - 10:30 PM</p>
          <p>Luminaire Restaurant | Grand Horizon Hotel</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    padding: '30px 0',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: '2.5em',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#7f8c8d',
  },
  heroSection: {
    backgroundImage: 'url("/api/placeholder/1200/600")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    position: 'relative',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3em',
    marginBottom: '20px',
  },
  heroDescription: {
    fontSize: '1.5em',
  },
  menuHighlight: {
    padding: '50px 20px',
    backgroundColor: '#f8f9fa',
  },
  menuContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '40px',
    color: '#2c3e50',
  },
  menuGrid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    flex: '1',
    textAlign: 'center',
    padding: '20px',
    margin: '0 15px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  menuItemTitle: {
    fontSize: '1.5em',
    marginBottom: '15px',
    color: '#2c3e50',
  },
  menuItemDesc: {
    color: '#7f8c8d',
  },
  reservationSection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#2c3e50',
    color: 'white',
  },
  reservationText: {
    fontSize: '1.2em',
    marginBottom: '30px',
  },
  reservationButton: {
    padding: '15px 30px',
    fontSize: '1.1em',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
    color: '#7f8c8d',
  },
  footerContent: {
    maxWidth: '600px',
    margin: '0 auto',
  }
};

export default HotelDiningPage;