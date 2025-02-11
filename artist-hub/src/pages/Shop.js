// artist-hub/src/pages/Shop.js
import React, { useState, useEffect } from 'react';
import ArtPieceCard from '../components/ArtPieceCard';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Shop = () => {
  const [artPieces, setArtPieces] = useState([]);
  const [filteredArtPieces, setFilteredArtPieces] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const mockData = [
      { id: 1, title: 'Landscape', category: 'Paintings', price: 150, imageUrl: 'https://via.placeholder.com/300' },
      { id: 2, title: 'Portrait', category: 'Portraits', price: 200, imageUrl: 'https://via.placeholder.com/300' },
      { id: 3, title: 'Abstract', category: 'Abstract', price: 180, imageUrl: 'https://via.placeholder.com/300' },
    ];
    setArtPieces(mockData);
    setFilteredArtPieces(mockData);
  }, []);

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredArtPieces(artPieces);
    } else {
      const filtered = artPieces.filter((piece) => piece.category === category);
      setFilteredArtPieces(filtered);
    }
  };

  return (
    <>
      <FilterBar>
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('Paintings')}>Paintings</button>
        <button onClick={() => handleFilter('Portraits')}>Portraits</button>
        <button onClick={() => handleFilter('Abstract')}>Abstract</button>
      </FilterBar>
      <Container>
        {filteredArtPieces.map((artPiece) => (
          <ArtPieceCard key={artPiece.id} artPiece={artPiece} />
        ))}
      </Container>
    </>
  );
};

export default Shop;
