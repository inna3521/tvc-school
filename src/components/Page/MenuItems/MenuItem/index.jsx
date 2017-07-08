// MenuItem
import React from 'react';
import './style.css';

const MenuItem = (props) => {
  return (
    <li
      onClick={() => props.handleMenuItemClick(props.id)}
    >
      {props.itemText} and {props.id}
    </li>
  )
}

      export default MenuItem;
