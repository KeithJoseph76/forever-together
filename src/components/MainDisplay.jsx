import React, { useState } from 'react';
import './MainDisplay.css';

// Import local images
import img1 from './main.jpg';
import img2 from './6.JPG';
import img3 from './4.jpg';
import img4 from './7.JPG';
import img5 from './8.JPG';

  
// Store images in an array
const images = [img1, img2, img3, img4, img5];

const MainDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='display-container'>
      {/* Main Display Section */}
      <div className='display'>
        <div className='tv'>
          <img src={images[currentIndex]} alt="Main Display" className="tv-image" />
        </div>
        <div className='boxes'>
          {images.slice(0, 4).map((img, index) => ( // Display only 4 images
            <div key={index} className={`box ${index === currentIndex ? "active" : ""}`}>
              <img src={img} alt={`Preview ${index}`} className="box-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Section with Buttons */}
      <div className='navigation'>
        <button className="nav-button left" onClick={prevImage}>⬅</button>
        <button className="nav-button right" onClick={nextImage}>➡</button>
      </div>
    </div>
  );
};

export default MainDisplay;