// artist-hub/src/pages/ArtPieces.js
import React, { useState, useEffect } from 'react';
import ArtPieceCard from '../components/ArtPieceCard';
import axios from 'axios';

const ArtPieces = () => {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    const fetchArtPieces = async () => {
      try {
        const response = await axios.get('/api/art-pieces');
        setArtPieces(response.data);
      } catch (error) {
        console.error('Failed to fetch art pieces:', error);
      }
    };
    fetchArtPieces();
  }, []);

  return (
    <div>
      <h1>Art Pieces</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {artPieces.map((artPiece) => (
          <ArtPieceCard key={artPiece.id} artPiece={artPiece} />
        ))}
      </div>
    </div>
  );
};

export default ArtPieces;
