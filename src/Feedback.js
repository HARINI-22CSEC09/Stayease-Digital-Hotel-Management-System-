
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import './Feedback.css';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });
  const [reviews, setReviews] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/User');
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      name: formData.name,
      email: formData.email,
      comment: formData.comments,
      rating: rating
    };

    try {
      const response = await axios.post('http://localhost:5000/User', newReview);
      setReviews([response.data, ...reviews]);

      const submittedName = formData.name; // Save before resetting
      setShowSnackbar(submittedName); // Show name in snackbar

      setTimeout(() => setShowSnackbar(false), 3000);

      // Reset form
      setFormData({ name: '', email: '', comments: '' });
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="container-fluid review-container d-flex align-items-center justify-content-center">
      {showSnackbar && (
        <div
          className="position-fixed top-50 start-50 translate-middle"
          style={{ zIndex: 9999 }}
        >
          <div className="toast show bg-success text-white shadow">
            <div className="toast-body fw-semibold px-4 py-3 fs-6">
              ✅ Thank you for your review, {showSnackbar}!
            </div>
          </div>
        </div>
      )}

      <div className="row w-100" style={{ maxWidth: '1200px' }}>
        {/* Review Form */}
        <div className="col-md-6 p-4">
          <div className="review-card h-100">
            <h3 className="mb-4 text-primary text-center review-title">Write a Review</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </div>
              <div className="mb-3">
                <label className="form-label">Rating</label>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                          style={{ display: 'none' }}
                        />
                        <FaStar
                          size={28}
                          color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(0)}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Comments</label>
                <textarea
                  className="form-control"
                  name="comments"
                  value={formData.comments}
                  rows="4"
                  onChange={handleChange}
                  required />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success fw-bold">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Review List */}
        <div className="col-md-6 p-4 overflow-auto" style={{ maxHeight: '90vh' }}>
          <div className="review-card h-100">
            <h3 className="text-center mb-4 review-title text-dark">Customer Reviews</h3>
            {reviews.length === 0 ? (
              <p className="text-muted text-center">No reviews yet.</p>
            ) : (
              reviews.map((rev, idx) => (
                <div key={idx} className="review-list-card mb-3">
                  <div>
                    <h5 className="card-title mb-1">{rev.name}</h5>
                    <p className="mb-1 text-muted">{rev.email}</p>
                    <div className="mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          color={i < rev.rating ? '#ffc107' : '#e4e5e9'}
                        />
                      ))}
                    </div>
                    <p className="card-text">{rev.comment}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;






