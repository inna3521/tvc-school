// L10JSOperatorsWithMath
import React from 'react'
import './style.css'
import { Button, Table } from 'react-bootstrap'
import Pre from './../../elements/Pre'
import Code from './../../elements/Code'
import Header from '../../elements/Header'
import Img from '../../elements/Img/index'

const L11Functions = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <Header
        title='Conditional Control Flow'
        subTitle='" if " statement'
      />
      <div className='lesson-title'></div>


    </div>
  )
};

export default L11Functions;
