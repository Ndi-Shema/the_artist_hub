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
      { id: 1, title: 'Landscape', description: 'A beautiful landscape painting.', price: 150, imageUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHx8MA%3D%3D' },
      { id: 2, title: 'Portrait', description: 'A stunning portrait.', price: 200, imageUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHx8MA%3D%3D' },
      { id: 3, title: 'Abstract', description: 'An abstract masterpiece.', price: 180, imageUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHx8MA%3D%3D' },
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
