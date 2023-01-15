import React, { useContext } from 'react';
import PixelArtContext from '../context/PixelArtContext';
import '../styles/Grid.css'

export default function Grid() {
  const { gridSize } = useContext(PixelArtContext)
  return (
    <section className='grid'>
      { Array.from({ length: gridSize}).map((_, index) => (
        <div className='pixel' key={index}></div>
      ))}
    </section>
  )
}
