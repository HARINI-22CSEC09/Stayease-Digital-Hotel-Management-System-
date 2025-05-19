import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Inside component



const BookingPage = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('deluxe');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitted(true);

  const bookingData = {name, email, phone, checkIn, checkOut, guests, roomType };

  try {
   // After successful submission
await axios.post('http://localhost:5000/api/bookings', bookingData);
navigate('/payment', { state: { bookingData } });
    console.log('Booking submitted:', bookingData);
  } catch (error) {
    console.error('Error submitting booking:', error);
  }
};

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    header: {
      padding: '20px 0',
      backgroundColor: '#003366',
      color: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
      textAlign: 'center',
    },
    logo: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    tagline: {
      fontSize: '1.2rem',
      fontStyle: 'italic',
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
    },
    formContainer: {
      flex: '1 1 600px',
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    infoContainer: {
      flex: '1 1 400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    infoCard: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: '#003366',
      borderBottom: '2px solid #003366',
      paddingBottom: '10px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      marginTop: '8px',
      fontWeight: '600',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
    },
    select: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      backgroundColor: 'white',
    },
    button: {
      backgroundColor: '#003366',
      color: 'white',
      border: 'none',
      padding: '14px 20px',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      width: '100%',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#002244',
    },
    featuresList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    featureItem: {
      padding: '8px 0',
      borderBottom: '1px solid #eee',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '10px',
      color: '#003366',
    },
    roomTypes: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    roomCard: {
      padding: '15px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      backgroundColor: '#f9f9f9',
    },
    roomCardSelected: {
      border: '2px solid #003366',
      backgroundColor: '#e6f0ff',
    },
    roomName: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    roomPrice: {
      color: '#003366',
      fontWeight: 'bold',
    },
    confirmationContainer: {
      padding: '30px',
      backgroundColor: '#e6f0ff',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    successIcon: {
      fontSize: '4rem',
      color: '#28a745',
      marginBottom: '20px',
    },
    footer: {
      textAlign: 'center',
      padding: '20px 0',
      marginTop: '30px',
      borderTop: '1px solid #ddd',
      color: '#666',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
      marginTop: '20px',
    },
    galleryImage: {
      width: '100%',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '4px',
    },
    promoCode: {
      display: 'flex',
      gap: '10px',
    },
    promoInput: {
      flex: '1',
    },
    promoButton: {
      backgroundColor: '#666',
      width: 'auto',
    }
  };

  const roomOptions = [
    { id: 'standard', name: 'Standard Room', price: 'Rs.9999 per night' },
    { id: 'deluxe', name: 'Deluxe Room', price: 'Rs.14999 per night' },
    { id: 'suite', name: 'Executive Suite', price: 'Rs.24999 per night' },
    { id: 'presidential', name: 'Presidential Suite', price: 'Rs.4999 per night' },
  ];

  const features = [
    'Free High-Speed WiFi',
    'Airport Shuttle Service',
    'Complimentary Breakfast',
    'Fitness Center & Spa',
    '24/7 Room Service',
    'Swimming Pool & Jacuzzi',
  ];

  if (isSubmitted) {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logo}>Bookking.js</div>
          <div style={styles.tagline}>Luxury Reimagined</div>
        </header>
        
        <div style={styles.confirmationContainer}>
          <div style={styles.successIcon}>✓</div>
          <h2 style={{fontSize: '2rem', marginBottom: '20px', color: '#003366'}}>
            Booking Confirmed!
          </h2>
          <p style={{fontSize: '1.2rem', marginBottom: '20px'}}>
            Thank you for choosing Bookking.js. Your reservation from {checkIn} to {checkOut} has been received.
          </p>
          <p style={{marginBottom: '30px'}}>
            A confirmation email has been sent to your registered email address with all details.
          </p>
          <button 
            style={styles.button} 
            onClick={() => setIsSubmitted(false)}
          >
            Make Another Booking
          </button>
        </div>
        
        <footer style={styles.footer}>
          <p>© 2025 Bookking.js Hotel. All rights reserved.</p>
          <p>123 Luxury Avenue, Resort City, RC 12345</p>
        </footer>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>Bookking.js</div>
        <div style={styles.tagline}>Luxury Reimagined</div>
      </header>
      
      <div style={styles.content}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Book Your Stay</h2>
          <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', gap: '20px'}}>
              <div style={{...styles.formGroup, flex: '1'}}>
                

                <label style={styles.label} htmlFor="checkIn">Check-in Date</label>
                
                <input
                  type="date"
                  id="checkIn"
                  style={styles.input}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                />
              </div>
              <div style={{...styles.formGroup, flex: '1'}}>
                <label style={styles.label} htmlFor="checkOut">Check-out Date</label>
                <input
                  type="date"
                  id="checkOut"
                  style={styles.input}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                />
              </div>
            </div>
            <div style={styles.formGroup}>
  <label style={styles.label}>Full Name</label>
  <input 
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={styles.input}
    required
  />
</div>

<div style={styles.formGroup}>
  <label style={styles.label}>Email Address</label>
  <input 
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    style={styles.input}
    required
  />
</div>

<div style={styles.formGroup}>
  <label style={styles.label}>Phone Number</label>
  <input 
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    style={styles.input}
    required
  />
</div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="guests">Number of Guests</label>
              <select
                id="guests"
                style={styles.select}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Select Room Type</label>
              <div style={styles.roomTypes}>
                {roomOptions.map(room => (
                  <div 
                    key={room.id}
                    style={{
                      ...styles.roomCard,
                      ...(roomType === room.id ? styles.roomCardSelected : {})
                    }}
                    onClick={() => setRoomType(room.id)}
                  >
                    <div style={styles.roomName}>{room.name}</div>
                    <div style={styles.roomPrice}>{room.price}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Promo Code</label>
              <div style={styles.promoCode}>
                <input
                  type="text"
                  placeholder="Enter promo code"
                  style={{...styles.input, ...styles.promoInput}}
                />
                <button 
                  type="button" 
                  style={{...styles.button, ...styles.promoButton}}
                >
                  Apply
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Complete Booking
            </button>
          </form>
        </div>
        
        <div style={styles.infoContainer}>
          <div style={styles.infoCard}>
            <h3 style={styles.heading}>Hotel Features</h3>
            <ul style={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} style={styles.featureItem}>
                  <span style={styles.icon}>✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={styles.infoCard}>
            <h3 style={styles.heading}>Hotel Gallery</h3>
            <div style={styles.gallery}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} style={{backgroundColor: '#ccc', height: '100px', borderRadius: '4px'}}></div>
              ))}
            </div>
          </div>
          
          <div style={styles.infoCard}>
            <h3 style={styles.heading}>Location</h3>
            <p style={{marginBottom: '15px'}}>
              123 Luxury Avenue, Resort City, RC 12345
            </p>
            <div style={{
              backgroundColor: '#eee', 
              height: '150px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '4px'
            }}>
              Map View
            </div>
          </div>
        </div>
      </div>
      
      <footer style={styles.footer}>
        <p>© 2025 Bookking.js Hotel. All rights reserved.</p>
        <p>123 Luxury Avenue, Resort City, RC 12345</p>
      </footer>
    </div>
  );
};

export default BookingPage;