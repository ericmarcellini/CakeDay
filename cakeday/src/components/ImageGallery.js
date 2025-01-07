import React from 'react';
import './ImageGallery.css';

// Import images
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9
];

const ImageGallery = () => {
  return (
    <div className='gallery-title'>
      <h1>Gallery</h1>
    <div className="gallery">
    
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageGallery;