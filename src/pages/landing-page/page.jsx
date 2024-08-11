import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/backgroundgreen.jpg';
export const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/shop');
  };
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Ensure the div takes the full viewport height
    width: '100vw',  // Ensure the div takes the full viewport width

  };

  return (
    <div style={{ ...styles, textAlign: 'center', padding: '50px' }}>
      <h1>Green Haven Nursery</h1>
      <h3>Welcome to Our Store</h3>
      <button onClick={handleGetStarted} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get Started
      </button>
        <div style={{textAlign:'center', marginRight:'200px' , marginLeft:'150px'}}>
        <p >Paradise Nursery is a premier destination for plant enthusiasts and garden lovers 
        seeking a lush escape into the world of greenery. Our expansive selection features a wide 
        range of high-quality plants, including vibrant annuals, hardy perennials, elegant shrubs, 
        and exotic trees. We take pride in offering not only a diverse array of flora but also expert advice and personalized
         service to help you find the perfect plants for your home, garden, or landscape.

Our knowledgeable staff is passionate about horticulture and dedicated to supporting both seasoned gardeners and beginners alike. 
At Paradise Nursery, we believe in nurturing your gardening ambitions with the right tools, tips, and inspiration. Whether you're looking to 
transform your outdoor space into a serene sanctuary or add a splash of greenery indoors, we are here to guide you every step of the way. Visit us to 
explore our verdant offerings and let us help you cultivate your own garden paradise.</p>
        </div>
    </div>
  );
};