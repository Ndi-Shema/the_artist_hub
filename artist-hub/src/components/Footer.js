// artist-hub/src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterContent = () => {
  return (
    <Footer>
      <p>&copy; 2023 the Artist Hub. All rights reserved.</p>
      <p>Follow us on social media:</p>
      <div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        {' | '}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </Footer>
  );
};

export default FooterContent;
