import React from 'react'
import Img from 'elements/Img'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import Callout from 'elements/Callout'
// New
import iKeyValue01 from './img/key-value.01.png'
import iKeyValue02 from './img/key-value.02.png'

const NameValuePairs = () => {
  return (
    <Section title='Review: Key / Value Pairs'>
      <P>To effectively work with CSS you need to have a firm grasp of key/value pairs. Key / value pairs are everwhere in programming, not just in CSS. Unfortunately, key/value pairs go by a number of names. So, let's go over it carefully.</P>
      <P>In all cases there is a name on the left side of some punctuation, and a value on the right of the punctuation. The punctuation is most often a colon (:) or equal sign (=).</P>
      <P>Here is a name / value pair using an equal sign (=).</P>
      <Img src={iKeyValue01} alt='key value pair with equal sign' />
      <P>Here is a another using an colon (:).</P>
      <Img src={iKeyValue02} alt='key value pair with colon' />

      <P>Here are the three most common names for key/value pairs:</P>
      <UL>
        <LI>name : value</LI>
        <LI>key : value</LI>
        <LI>property : value</LI>
      </UL>
      <Section title='Examples' l2>
        <P>The below code shows the CSS 'font-size' property being set to 12 pixels:</P>
        <Pre
          language='css'
          code={[
            "font-size: 12px;"
          ]}
        />
        <P>You can easily set a different font-size by using a different value for the same property:</P>
        <Pre
          language='css'
          code={[
            "font-size: 24px;"
          ]}
        />
        <P>Different properties require different types of values. For example, while font-size tool a number followed by the previx 'px', the background-color property can take the name of a color or a hex color code.</P>
        <Pre
          language='css'
          code={[
            "background-color: blue;"
          ]}
        />
        <P>Or in hex</P>

        <Pre
          language='css'
          code={[
            "background-color: #0000FF;"
          ]}
        />
        <Callout info title='hex color?'>
          <p>We will color hex and other color valus in a later lesson.</p>
        </Callout>
      </Section>
    </Section>
    )
  };
export default NameValuePairs
