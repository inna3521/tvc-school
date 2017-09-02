// Footer
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
    <Grid id='footer'>
      <hr/>
      <Row>
        <p>Resources</p>
        <Col sm={6} md={6}>
          <Img
            src={iMDN}
            size='small'
          />
        </Col>
        <Col sm={6} md={6}>
          <Img
            src={iW3Schools}
            size='small'
          />
        </Col>
      </Row>
      <div className={styles.footerContainer}>
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
    </Grid>
  )
};

export default Footer;
