// artist-hub/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: #555;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  color: #555;

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #ff4d4d;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }
`;

const Navbar = ({ cartCount }) => {
  return (
    <Nav>
      <Logo to="/">the <br>Artist Hub</br></Logo>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <CartIcon>
        🛒
        {cartCount > 0 && <span>{cartCount}</span>}
      </CartIcon>
    </Nav>
  );
};

export default Navbar;
