// artist-hub/src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterContent = () => {
  return (
    <Footer>
      <p>&copy; 2023 Art E-Shop. All rights reserved.</p>
      <p>Contact us at: info@arte-shop.com</p>
    </Footer>
  );
};

export default FooterContent;
