import React, { useState } from 'react';
import styles from './Challenge2.module.css';

function Challenge2() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled); 
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.center}>
       
        <div className={`${styles.top} ${isToggled ? styles.animateTop : styles.revertTop}`}></div>
        <div className={`${styles.medium} ${isToggled ? styles.animateMedium : styles.revertMedium}`}></div>
        <div className={`${styles.bottom} ${isToggled ? styles.animateBottom : styles.revertBottom}`}></div>
      </div>
    </div>
  );
}

export default Challenge2;
