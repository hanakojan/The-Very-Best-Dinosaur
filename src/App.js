import React, { useState } from 'react';
import DinoList from './components/DinoList';
import EraNavigation from './components/EraNavigation';
import Scroller from './components/Scroller';
import SelectedDino from './components/SelectedDino';
import dinosaurData from './jurassic_park.json';
import './App.css';

function App() {
  const [currentEra, setCurrentEra] = useState('');
  const [selectedDino, setSelectedDino] = useState(null);

  // A function to categorize periods into major eras
  const categorizeEra = (period) => {
    if (period.includes("Triassic")) return "Triassic";
    if (period.includes("Jurassic")) return "Jurassic";
    if (period.includes("Cretaceous")) return "Cretaceous";
    return "Unknown"; // Fallback, in case the period doesn't match expected values
  };

  // Ensuring each dinosaur has a major era category
  const dinosaursWithEra = dinosaurData.map(dino => ({
    ...dino,
    majorEra: categorizeEra(dino.period)
  }));

  // Filter dinosaurs based on the selected major era
  const dinosaursByEra = {
    Triassic: ['chindesaurus', 'coelophysis', 'coloradisaurus', 'eoraptor', 'guaibasaurus', 'herrerasaurus', 'liliensternus'],
    Jurassic: ['aardonyx', 'agilisaurus', 'allosaurus', 'ammosaurus', 'amygdalodon', 'anchisaurus'],
    Cretaceous: ['abelisaurus', 'achelousaurus', 'achillobator', 'acrocanthosaurus', 'aegyptosaurus', 'afrovenator', 'alamosaurus']
  };  

  const filteredDinosaurs = dinosaurData.filter(dino => 
    dinosaursByEra[currentEra]?.includes(dino.name.toLowerCase())
  );

  const eras = ["Triassic", "Jurassic", "Cretaceous"]; // Defined explicitly

  return (
    <div className="app">
      <div className="team-name">The Very Best Dinosaur Ever</div>
      <div className="introduction">
        A web app categorizing dinosaurs in prehistoric eras with detiled information.
      </div>
      <EraNavigation 
        currentEra={currentEra} 
        setCurrentEra={setCurrentEra}
        setSelectedDino={setSelectedDino}
        eras={eras}
      />
      {selectedDino ? (
        <SelectedDino dino={selectedDino} onDeselect={() => setSelectedDino(null)} />
      ) : (
          <Scroller>
            <DinoList dinosaurs={filteredDinosaurs} onDinoSelect={setSelectedDino} />
          </Scroller>
      )}
      <div className="thank-you">Thank you for exploring the age of dinosaurs with us!</div>
    </div>
  );
}

export default App;
