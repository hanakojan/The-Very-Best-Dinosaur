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
    return null
  };

  // Ensuring each dinosaur has a major era category
  const dinosaursWithEra = dinosaurData.map(dino => ({
    ...dino,
    majorEra: categorizeEra(dino.period)
  }));

  // Filter dinosaurs based on the selected major era
  const dinosaursByEra = {
    Triassic: ['chindesaurus'],
    Jurassic: ['aardonyx'],
    Cretaceous: ['abelisaurus']
  };  

  const filteredDinosaurs = dinosaurData.filter(dino => 
    dinosaursByEra[currentEra]?.includes(dino.name.toLowerCase())
  );

  const eras = ["Triassic", "Jurassic", "Cretaceous"]; // Defined explicitly

  return (
    <div className="app">
      <div className="title">The Very Best Dinosaur Ever</div>
      <div className="introduction">
        Welcome to our page! Here, you'll discover the dinosaurs that had the longest reigns in their respective continents during the Triassic, Jurassic, and Cretaceous periods. By looking at attributes such as diet, number of legs, and other features, this project offers a more holistic understanding to the discussion of Paleontology and Evolutionary Biology by incorporating Data Science and building upon the sparse dinosaur datasets currently available.

        Towards the end of the page, you'll find, a prototype dinosaur created by combining the standout features from the most successful dinosaurs across different eras and continents.
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
