import React, { useContext, useState } from 'react'
import PixelArtContext from '../context/PixelArtContext'
import '../styles/Header.css'

export default function Sidebar() {
  const { setGridSize } = useContext(PixelArtContext)
  return (
    <aside className='header'>

      <button
        className='buttons'>
        Confirmar Grid
      </button>

      <input
        type="number"
        max='50'
        placeholder='Grid Size'
        className='buttons'
        onChange={({ target: { value } }) => setGridSize(Number(value))}
      />

      <input
        type="color"
        className='buttons'
      />

      <button
        className='buttons'
      >
        Borracha
      </button>

      <button
        className='buttons'>
        Desativar/Ativar Grid
      </button>

      {/* //troca de nome dinamica */}
      <button
        className='buttons'
      >
        Limpar Tudo
      </button>
    </aside>
  )
}
