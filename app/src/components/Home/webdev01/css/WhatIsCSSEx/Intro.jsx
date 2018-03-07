import React from 'react'
import P from 'elements/P'
import Section from 'elements/Section'
import Callout from 'elements/Callout'

const Intro = () => {
  return (
    <Section l0>
      <P>In this exercise you will be creating a site named The Matrix. You will be using both HTML &amp; CSS and using what you learned in previous lessons with a focus on element and class selectors. Additionally, you will learn how to connect a HTML (.html) file to a CSS (.css) file and why that needs to be done.</P>
      <Callout info>
        <p>HTML files end with the extension .html</p>
        <p>CSS files end with the extension .css</p>
      </Callout>
    </Section>
  )
}
export default Intro
