import React, { useState } from 'react';
import './WaterEffect.css';

const WaterRipple = ({ backgroundImage }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const ripple = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      id: Date.now()
    };

    setRipples(prevRipples => [...prevRipples, ripple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prevRipples => 
        prevRipples.filter(r => r.id !== ripple.id)
      );
    }, 1000);
  };

  return (
    <div 
      className="water-ripple-container"
      onMouseMove={createRipple}
    >
      <div 
        className="water-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterRipple;