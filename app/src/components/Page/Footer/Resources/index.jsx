// Resources
import React from 'react';
import styles from './style.css';
import iMDN from './images/mdn-banner.png'
import iW3Schools from './images/w3schools.jpg'
import Img from '../../../elements/Img'

const Resources = () => {

  return (
    <div className={styles.container}>
      <p className={styles.title}>Resources</p>
      <div className={styles.containerInner}>
        <Img src={iMDN} maxWidth={135} margin={[0, 20]} alt='mdn logo'/>
        <Img src={iW3Schools} maxWidth={158} alt="w3Schools logo" />
      </div>
    </div>
  )
};

export default Resources;
