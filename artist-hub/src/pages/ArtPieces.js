// artist-hub/src/pages/ArtPieces.js
import React, { useState, useEffect } from 'react';
import ArtPieceCard from '../components/ArtPieceCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const ArtPieces = () => {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const mockData = [
      { id: 1, title: 'Landscape', description: 'A beautiful landscape painting.', price: 150, imageUrl: 'https://via.placeholder.com/300' },
      { id: 2, title: 'Portrait', description: 'A stunning portrait.', price: 200, imageUrl: 'https://via.placeholder.com/300' },
      { id: 3, title: 'Abstract', description: 'An abstract masterpiece.', price: 180, imageUrl: 'https://via.placeholder.com/300' },
    ];
    setArtPieces(mockData);
  }, []);

  return (
    <Container>
      {artPieces.map((artPiece) => (
        <ArtPieceCard key={artPiece.id} artPiece={artPiece} />
      ))}
    </Container>
  );
};

export default ArtPieces;
