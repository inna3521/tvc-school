// L09MozillaThimble
import React from 'react'
import { Button } from 'react-bootstrap'
import Img from './../../elements/Img'
import iThimble from './img/thimble.png'

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
      {/* <Header
        title='Mozilla Thimble'
        subTitle='A Code Editor'
      /> */}

      <p>Mozilla Thimble is an online code editor much like Cloud9 but simplier. We will use it for today's lesson. Hear is how to get started with Thimble.</p>
      <h2>Launch and sign into Thimble</h2>
      <ol>
        <li>Got to: <a href="https://thimble.mozilla.org/en-US/">https://thimble.mozilla.org/en-US/</a></li>
        <li>In the top-right corner click 'Sign in'</li>
        <li>Sign with your TVC username and password</li>
      </ol>
      <h2>Open a project</h2>
      <ol>
        <li>In the top left click on your username and then 'Your projects'</li>
        <li>Click on 'sentence-fun' and the project will open</li>
      </ol>
      <h2>A look around the Thimble editor</h2>
      <Img
        src={iThimble}
      />



    </div>
  )
};

export default Lesson04;
