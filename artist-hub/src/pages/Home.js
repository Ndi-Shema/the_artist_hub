// artist-hub/src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1920x400');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
`;

const Button = styled.button`
  background-color: #61dafb;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4d9dfc;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <h1>Welcome to Art E-Shop</h1>
        <p>Discover unique art pieces from talented artists.</p>
        <Button>Explore Now</Button>
      </HeroSection>
    </>
  );
};

export default Home;
