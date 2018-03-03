import React from 'react'
import Section from 'elements/Section'
import UL from 'elements/UL'
import LI from 'elements/LI'
import Html from 'elements/Html'
import P from 'elements/P'

const Intro = () => {
  return (
    <div>
      <P>CSS stands for <span className="large-cap">C</span>ascading<span className="large-cap"> S</span>tyle <span className="large-cap">S</span>heets. We will get to the meaning of the name in a later lesson.</P>
      <P> HTML defines the structure and content of your webpage, CSS determines the appearance and layout.</P>
      <UL>
        <LI>Appearance is called 'style' and includes things such as font color, bold or non-bold and backgroud image or color.</LI>
        <LI>Layout means where things appear on the page and their alignment.</LI>
        <LI>With CSS you can center a heading or put an image on the right side of the page, or put two images side-by-side.</LI>
      </UL>
      <Section title='Selectors, Styles, Classes and More'>
        <P>Here is a brief introduction to some of the CSS terms you will learn and understand by the end of this lesson.</P>
        <UL>
          <LI><b>Selector: </b>CSS properties and values are applied to HTML via 'selectors'. Selctors are a part of the CSS language used to specify which part of a HTML document to apply a style to. Using a selector you can select a single <Html>p</Html>, all <Html>p</Html>s or any other element in the HTML document.</LI>
          <LI><b>Style:</b> A style is a group of CSS property/value pairs inside of a selector.</LI>
          <LI><b>Class:</b> A class is a type of selector. However, people frequently say class when they mean style.</LI>
        </UL>
      </Section>
    </div>
    )
  };
export default Intro
