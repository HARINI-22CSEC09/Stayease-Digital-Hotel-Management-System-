import { useState } from "react";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "../src/assets/Aroma.jpeg";
import pic2 from "../src/assets/hotstone.jpeg";
import pic3 from "../src/assets/deeptissue.jpg";
import pic4 from "../src/assets/spa.jpg";
import pl1 from "../src/assets/play1.jpg";
import pl2 from "../src/assets/play2.jpg";
import pl3 from "../src/assets/play3.jpg";
import pl4 from "../src/assets/play4.jpg";
import pl5 from "../src/assets/play5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WaterEffect from "./WaterEffect"; 

export default function SpaPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: "Aromatherapy Massage", price: "$50", image: pic1 },
    { name: "Hot Stone Therapy", price: "$65", image: pic2 },
    { name: "Deep Tissue Massage", price: "$55", image: pic3 },
  ];

  return (
    <div className="spa-container">
      {/* Hero Section */}
      <div className="hero-section">
      <WaterEffect />
        <h1>Welcome to Serenity Spa</h1>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Spa Treatments</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <img src={service.image} alt={service.name} className="service-image" />
              <CardContent>
                <h3>{service.name}</h3>
                <p>{service.price}</p>
                <Button onClick={() => setSelectedService(service)}>Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div><img src= {pl1} alt="Spa 1" /></div>
          <div><img src= {pl2} alt="Spa 2" /></div>
          <div><img src= {pl3} alt="Spa 3" /></div>
          <div><img src= {pl4} alt="Spa 3" /></div>
          <div><img src= {pl5} alt="Spa 3" /></div>
        </Carousel>
      </div>  

      {/* Booking Section */}
      {selectedService && (
        <div className="booking-modal">
          <div className="booking-content">
            <h2>Booking for {selectedService.name}</h2>
            <p>Price: {selectedService.price}</p>
            <Button onClick={() => alert("Booking Confirmed!")}>Confirm Booking</Button>
            <Button className="cancel-button" onClick={() => setSelectedService(null)}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
}
