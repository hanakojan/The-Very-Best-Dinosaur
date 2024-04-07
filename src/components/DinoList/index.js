import React from 'react';
import DinoCard from '../DinoCard';
import styles from "./style.module.css";


const DinosaursList = ({ dinosaurs, onDinoSelect }) => {
  return (
    <div className={styles.dinoList}>
      {dinosaurs.map((dino, index) => (
        <DinoCard
          key={index}
          name={dino.name}
          onClick={() => onDinoSelect(dino)}
        />
      ))}
    </div>
  );
};

export default DinosaursList;