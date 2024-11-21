import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Welcome to [Your Cake Shop Name], where every cake tells a story. Founded in [Year], our passion for baking is matched only by our commitment to quality and creativity.
            </p>
            <p>
              What began as a humble home kitchen endeavor has blossomed into a beloved bakery in the heart of [City]. Inspired by family recipes and a love for artisanal baking, we set out to create cakes that not only delight the taste buds but also warm the heart.
            </p>
            <p>
              At [Your Cake Shop Name], we believe that a cake is more than just a dessert—it's a centerpiece of celebration, a symbol of joy, and a sweet expression of love. That's why we use only the finest ingredients, sourced locally whenever possible, to craft our cakes from scratch.
            </p>
            <p>
              From classic flavors to innovative designs, our cakes are a fusion of tradition and modernity. Whether you're celebrating a birthday, wedding, or any special occasion, we work closely with you to create a cake that reflects your unique style and taste.
            </p>
            <p>
              Our team is a family of passionate bakers, decorators, and dreamers. Led by [Founder's Name], a [brief background, e.g., "a self-taught baker with a flair for artistic design"], we pour our hearts into every creation, ensuring that each cake is as special as the moment it represents.
            </p>
            <p>
              We invite you to visit our bakery, savor our creations, and become part of our growing community. Follow us on [Social Media Platforms] to stay updated on our latest designs, special offers, and baking adventures.
            </p>
            <p>
              Thank you for making [Your Cake Shop Name] a part of your cherished moments.
            </p>
          </div>
          <div className="about-us-image">
            {/* <img src={cakeShopImage} alt="Our Cake Shop" />  */}
          </div>
        </section>
      );
    };
    
    export default About;