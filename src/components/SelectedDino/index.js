import React from 'react';
import styles from "./style.module.css";

const SelectedDino = ({ dino, onDeselect }) => {
  return (
    <div className={styles.dinosaurDetails}>
      <h1 className="team-name">{dino.name}</h1>
      <h2>Diet: {dino.diet}</h2>
      <h2>Location: {dino.lived_in}</h2>
      <h2>Type: {dino.type}</h2>
      <h2>Length: {dino.length}</h2>
      <h2>Taxonomy: {dino.taxonomy}</h2>
      <h2>Named By: {dino.named_by}</h2>
      <h2>Species: {dino.species}</h2>
      <h2>Link: <a href={dino.link} target="_blank" rel="noopener noreferrer">{dino.link}</a></h2>
      <button onClick={onDeselect}>Back</button>
      {/* Add more details as needed maybe an img?*/}
    </div>
  );
};

export default SelectedDino;
