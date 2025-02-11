// artist-hub/src/components/Cart.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <CartIcon>
      <span>🛒</span>
      <CartCount>{cartItems.length}</CartCount>
    </CartIcon>
  );
};

export default Cart;
