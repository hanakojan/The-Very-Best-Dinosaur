import React from 'react';
import styles from "./style.module.css";

const Scroller = ({ children }) => {
  return (
    <div className={styles.scroller}> 
      {children}
    </div>
  );
};

export default Scroller;
