// L09MozillaThimble
import React from 'react'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import Img from 'elements/Img'
import iThimble from './img/thimble.png'
import OL from 'elements/OL'
import LI from 'elements/LI'

const Lesson04 = ({ match }) => {
  const warnStyle = {
    color: 'red',
    fontWeight: 'bold',
  }
  return (
    <div>
      <h1 style={warnStyle}>This lesson is not complete and may not be needed</h1>
      <PageTitle title='Mozilla Thimble' subTitle='A Code Editor' />
      <p>Mozilla Thimble is an online code editor much like Cloud9 but simplier. We will use it for today's lesson. Hear is how to get started with Thimble.</p>
      <Section title='Launch and sign into Thimble' level={2}>
        <OL>
          <LI>Go to: ', <a href="https://thimble.mozilla.org/en-US/">https://thimble.mozilla.org/en-US/</a></LI>
          <LI>In the top-right corner click 'Sign in'</LI>
          <LI>Sign with your TVC username and password</LI>
        </OL>
      </Section>
      <Section title='Open a project' level={2}>
        <OL>
          <LI>In the top left click on your username and then 'Your projects'</LI>
          <LI>Click on 'sentence-fun' and the project will open</LI>
        </OL>
      </Section>
      <Section title='A look around the Thimble editor' level={2}>
        <Img
          src={iThimble}
        />
      </Section>
    </div>
  )
};

export default Lesson04;
