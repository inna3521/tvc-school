// MenuItem
import React from 'react';
import './style.css';

const MenuItem = (props) => {
  return (
    <li
      onClick={() => props.handleMenuItemClick(props.id)}
    >
      <span className='menu-item-text'>{props.itemText}</span>
    </li>
  )
}

      export default MenuItem;
