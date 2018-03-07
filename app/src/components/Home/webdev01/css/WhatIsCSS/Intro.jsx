import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'

const Intro = () => {
  return (
    <div>
      <P>CSS stands for <span className="large-cap">C</span>ascading<span className="large-cap"> S</span>tyle <span className="large-cap">S</span>heets. We will get to the meaning of <i>cascading</i> in a later lesson. First you will learn what CSS is and how to use it.</P>
      <P>While HTML defines the structure and content of your webpage, CSS determines the appearance and layout. Using CSS you can determine things such as font size, color, alignment, borders and background color. You can also determine layout such as if two elements are stacked on top of eachother, sit side by side, or if an element is on the left or right side of the page, and much, much more.
      </P>

      <Section title='Selectors, Styles, Classes and More'>
        <P>make this a summary of what will be learned.</P>
      </Section>
    </div>
    )
  };
export default Intro
