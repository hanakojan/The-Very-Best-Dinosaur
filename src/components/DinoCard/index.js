import React from 'react';
import styles from "./style.module.css";

const DinoCard = ({ name, image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={name} className={styles.card_img} />
      <h2 className={styles.card_title}>{name}</h2>
      {/* Add more details as needed maybe an img?*/}
    </div>
  );
};

export default DinoCard;
