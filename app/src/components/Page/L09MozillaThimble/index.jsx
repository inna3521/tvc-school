// L09MozillaThimble
import React from 'react'
import Img from './../../elements/Img'
import iThimble from './img/thimble.png'
import Lesson from '../../elements/Lesson'
import OL from '../../elements/OL'

const Lesson04 = (props) => {
  return (
    <Lesson
      title='Mozilla Thimble'
      subTitle='A Code Editor'
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <p>Mozilla Thimble is an online code editor much like Cloud9 but simplier. We will use it for today's lesson. Hear is how to get started with Thimble.</p>
      <h2>Launch and sign into Thimble</h2>
      <OL
        listItems={[
          ['Go to: ', <a href="https://thimble.mozilla.org/en-US/">https://thimble.mozilla.org/en-US/</a>],
          "In the top-right corner click 'Sign in'",
          'Sign with your TVC username and password'
        ]}
      />
      <h2>Open a project</h2>
      <OL
        listItems={[
          "In the top left click on your username and then 'Your projects'",
          "Click on 'sentence-fun' and the project will open"
        ]}
      />
      <h2>A look around the Thimble editor</h2>
      <Img
        src={iThimble}
      />
    </Lesson>
  )
};

export default Lesson04;
