// SiteTitle
import React from 'react';
import './style.css';

const Header = (props) => (
  <div>
    <h1 className='header-title'>{props.title}</h1>
    <h2 className='header-sub-title'>{props.subTitle}</h2>
  </div>
);

export default Header;
