import React, { useState } from 'react';
import PixelArtContext from './PixelArtContext';
import propTypes from 'prop-types';

export default function PixelArtProvider({ children }) {
  const [gridSize, setGridSize] = useState(100);

  const contextValue = {
    gridSize,
    setGridSize,
  };
  return (
    <PixelArtContext.Provider value={ contextValue }>
    {children}
  </PixelArtContext.Provider>
  )
}

PixelArtProvider.propTypes = {
  children: propTypes.node.isRequired,
};
