import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ParticleCanvas from './components/layout/ParticleCanvas';
import Footer from './components/layout/Footer';
import CommandPalette from './components/ui/CommandPalette';
import TerminalHUD from './components/ui/TerminalHUD';
import Home from './components/Home';
import './App.css';

function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleTogglePalette = (closeOnly = false, forceOpen = false) => {
    if (closeOnly) {
      setIsPaletteOpen(false);
    } else if (forceOpen) {
      setIsPaletteOpen(true);
    } else {
      setIsPaletteOpen(prev => !prev);
    }
  };

  const handleOpenTerminal = () => {
    setIsTerminalOpen(true);
  };

  const handleCloseTerminal = () => {
    setIsTerminalOpen(false);
  };

  return (
    <BrowserRouter>
      {/* Dynamic Ambient Background Canvas */}
      <ParticleCanvas />

      {/* Floating Glass Navigation Bar */}
      <Navbar
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Pages */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenTerminal={handleOpenTerminal}
              onOpenPalette={() => setIsPaletteOpen(true)}
            />
          }
        />
      </Routes>

      {/* Futuristic Footer */}
      <Footer />

      {/* Interactive Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={handleTogglePalette}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Interactive Terminal HUD */}
      <TerminalHUD
        isOpen={isTerminalOpen}
        onClose={handleCloseTerminal}
      />
    </BrowserRouter>
  );
}

export default App;
