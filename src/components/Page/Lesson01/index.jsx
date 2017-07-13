// SiteTitle
import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'

const Lesson01 = (props) => (
  <div>
    <Button
      onClick={() => props.handleMenuItemClick()}
    >
      Back
    </Button>
    <h2>Lesson01</h2>
  </div>

);

export default Lesson01;
