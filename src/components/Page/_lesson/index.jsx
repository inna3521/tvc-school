// _lesson
import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap'
// import Img from './../../elements/Img'
import Code from './../../elements/Code'
import Callout from './../../elements/Callout'
// import { lesson } from './data';
// import { space } from '../../../lib/utils'


const Lesson04 = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <header>
        <p className='lesson-title'>Title</p>
        <p className='lesson-sub-title'>Sub-Title</p>
      </header>

      <Code
        code={[
          '<div id="about">',
          '',
          '</div>'
        ]}
        language='html'
      />


    </div>
  )
};

export default Lesson04;
