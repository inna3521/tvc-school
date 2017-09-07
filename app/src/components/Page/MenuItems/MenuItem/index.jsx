// MenuItem
import React from 'react';
import styles from './style.css';

const MenuItem = (props) => {
  return (
    <li className={styles.itemText}>{props.itemText}</li>
  )
}

      export default MenuItem;
