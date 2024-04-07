import React from 'react';
import styles from "./style.module.css";

// The component receives the currentEra, setCurrentEra, and setSelectedDino as props
const EraNavigation = ({ currentEra, setCurrentEra, setSelectedDino }) => {
  const eras = ['Triassic', 'Jurassic', 'Cretaceous'];

  return (
    <div className={styles.navigation}>
      {eras.map((era) => (
        <button
          key={era}
          className={currentEra === era ? 'selected' : ''}
          onClick={() => {
            setCurrentEra(era);
            setSelectedDino(null);
          }}
        >
          {era}
        </button>
      ))}
    </div>
  );
};

export default EraNavigation;
