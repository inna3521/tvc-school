import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './style.css';
import Img from './../../elements/Img'
import iMDN from './mdn-banner.png'
import iW3Schools from './w3schools.jpg'

const Footer = () => (
  <Grid id='footer' className='page-footer gradient-black-background'>
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
    <div className='section-container container-fluid footer-container'>
      <div className="fa-btns">
        <a href="https://github.com/trivalleycoders-org">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.meetup.com/trivalleycoders//">
          <i className="fa fa-meetup fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/groups/free.code.camp.sanramon/">
          <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <p>&copy; 2017 Tri-Valley Coders. All rights reserved.</p>
    </div>
  </Grid>

);

export default Footer;
