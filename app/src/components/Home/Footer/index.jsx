// Footer
import React from 'react';
import styles from './style.css';
// import classNames from 'classnames'
// import Img from './../../elements/Img'
// import Resources from './Resources'

const Footer = () => {
  const gitHubStyle = {
    color: 'black',
    marginRight: 25,
    marginLeft: 25,
  }
  const meetupStyle = {
    color: '#F64060',
    marginRight: 25,
    marginLeft: 25,
  }
  const facebookStyle = {
    color: '#3B5998',
    marginRight: 25,
    marginLeft: 25,
  }
  return (
    <footer>
      {/* <Resources /> */}
      <div className={styles.footerContainer}>
        <div className={styles.faBtns}>
          {/* <a href="https://github.com/trivalleycoders-org" style={gitHubStyle}> */}
          {/* <i className="fa fa-github fa-2x" aria-hidden="true"></i> */}
          {/* </a> */}
          <a href="https://www.meetup.com/trivalleycoders//" style={meetupStyle}>
            <i className="fa fa-meetup fa-2x meetup-logo" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/groups/free.code.camp.sanramon/" style={facebookStyle}>
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <p>&copy; 2017 Tri-Valley Coders&trade; All rights reserved<br/>Don't code alone!&trade;</p>
        {/* <div className={styles.mdnLicense}>
          <div>Some content derived from MDN by <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"><span className={styles.mdnContributors}></span>Mozilla Contributors</a></div>
          <div>Licensed under <a href="http://creativecommons.org/licenses/by-sa/2.5/">CC-BY-SA 2.5</a></div>
        </div> */}
      </div>
    </footer>
  )
};

export default Footer;
