import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    if (!bookingData) {
      navigate('/');
    }
  }, [bookingData, navigate]);

  const handlePayment = () => {
    // Integration with real payment gateway like Stripe/Razorpay goes here
    alert('Payment Successful!');
    navigate('/'); // Redirect after payment
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Confirm Your Payment</h2>
      <p><strong>Name:</strong> {bookingData?.name}</p>
      <p><strong>Room Type:</strong> {bookingData?.roomType}</p>
      <p><strong>Guests:</strong> {bookingData?.guests}</p>
      <p><strong>Dates:</strong> {bookingData?.checkIn} to {bookingData?.checkOut}</p>
      <p><strong>Total Amount:</strong> ₹{calculateTotal(bookingData?.roomType)}</p>

      <button 
        onClick={handlePayment}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#003366',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

function calculateTotal(roomType) {
  const rates = {
    standard: 9999,
    deluxe: 14999,
    suite: 24999,
    presidential: 4999,
  };
  return rates[roomType] || 0;
}

export default PaymentPage;
