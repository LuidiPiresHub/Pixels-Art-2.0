import React from 'react'
import Grid from './components/Grid'
import Sidebar from './components/Header'
import PixelArtProvider from './context/PixelArtProvider'
import './styles/App.css'

export default function App() {
  return (
    <PixelArtProvider>
      <main className='mainContent'>
        <Sidebar />
        <Grid />
      </main>
    </PixelArtProvider>
  )
}
