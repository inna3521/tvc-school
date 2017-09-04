// Footer
import React from 'react';
import styles from './style.css';
import classNames from 'classnames'
import Img from './../../elements/Img'
import iMDN from './mdn-banner.png'
import iW3Schools from './w3schools.jpg'

const Footer = () => {
  const faStyles = {
    color: 'white',
  }
  return (
    <div className={styles.resourcesContainer}>
      <h3>Resources</h3>
      <div className={styles.resources}>
        <Img src={iMDN} small />
        <Img src={iW3Schools} small />
      </div>
      <div className={styles.footerContainer}>
        <span>About MDN by <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"><span className={styles.mdnContributors}></span>Mozilla Contributors</a></span>
        <span>Licensed under <a href="http://creativecommons.org/licenses/by-sa/2.5/">CC-BY-SA 2.5</a></span>
        <div className="faBtns">
          <a href="https://github.com/trivalleycoders-org" style={faStyles}>
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.meetup.com/trivalleycoders//" style={faStyles}>
            <i className="fa fa-meetup fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/groups/free.code.camp.sanramon/" style={faStyles}>
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <p>&copy; 2017 Tri-Valley Coders. All rights reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
