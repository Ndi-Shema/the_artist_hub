// artist-hub/src/components/ArtPieceCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const ArtPieceCard = ({ artPiece }) => {
  return (
    <Card>
      <img src={artPiece.imageUrl} alt={artPiece.title} style={{ width: '100%' }} />
      <h3>{artPiece.title}</h3>
      <p>{artPiece.description}</p>
      <p>Price: ${artPiece.price}</p>
      <button>Add to Cart</button>
    </Card>
  );
};

export default ArtPieceCard;
