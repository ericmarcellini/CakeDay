import React from 'react';
import './ImageGallery.css';

// Import images
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';

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