// artist-hub/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #282c34;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Art E-Shop</Logo>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/art-pieces">Art Pieces</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
