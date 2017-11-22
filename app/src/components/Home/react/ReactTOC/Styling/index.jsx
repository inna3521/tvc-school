// Styling
import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import Pre from 'elements/Pre'
import Code from 'elements/Code'
import Section from 'elements/Section'
import OL from 'elements/OL'
import UL from 'elements/UL'
import P from 'elements/P'
import A from 'elements/A'
import LI from 'elements/LI'
import LessonStatus from 'elements/LessonStatus'

const Styling = () => {
  return (
    <div id='Styling'>
      <LessonStatus draftOne>

      </LessonStatus>
      <Section title='Overview' level={1}>
        <P>In react you can have one style sheet that contains all of  your css. You can write your CSS in the traditional way as well as use make use of SASS or LESS. In my experience, the best way to style React components is using CSS Modules. Using the traditional approach means that all styles are global and you must still use unique names.</P>
        <P>In this course we will use two techniques for styling. First, we will primarily use the traditional with the exception that we will be keeping our CSS in the stylesheet for the component it relates to. We will put styles that are used throughout the application in src/index.css. All other CSS will go in the style.css file associated with it.</P>
        <P>Second, we will use inline styles that are created in JavaScript.</P>
        <P>Let's jump in!</P>
      </Section>
      <Section title='React CSS Tips' level={1}>
        <P>Since React is an extention and thereby part of JavaScript, JavaScript key words cannot be used in JSX. Therefore, JSX differes from HTML in certain ways. One of those is you must use 'className' instead of 'class' when assigning a class to an element. For example, in HTML we might have ...</P>
        <Pre
          html
          code={[
            '<div class="header">',
            '  <p>some text</p>',
            '</div>'
          ]}
        />
        <P>In JSX you use 'className' instead of 'class' ... </P>
        <Pre
          js
          code={[
            '<div className="header">',
            '  <p>some text</p>',
            '</div>'
          ]}
        />
        <P>In JSX, you can use either single or double quotes around class names. I use single quotes.</P>
      </Section>
      <Section title='Inline Styles' level={1}>
        <P>React allows you to create styles in JavaScript and apply them to JSX using the 'style' attribute. Remember that JSX is JavaScript and Header is a function. Therefore, we can write any JavaScript we want in a component, such as creating style objects.</P>
        <UL>
          <LI>CSS property names are camel cased so 'backgroun-image' becomes 'backgroundImage'.</LI>
          <LI>When specifying a number in pixils it is not necessary to specify 'px', you can just use a number like ... </LI>
          <Pre
            css
            code={['width: 200']}
          />
          <LI>If you do specify 'px' you must put the value in quotes ... </LI>
          <Pre
            css
            code={["width: '200px'"]}
          />
          <LI>Semicolons are not required and will cause problems if you use them.</LI>
          <LI>All property values that are words must be in quotes.</LI>
          <LI>The value for a property can be a JavaScript expression.</LI>
        </UL>
      </Section>
      <Section title='Styling Header' level={1}>
        <P>Currently our app is very crude looking. We are going to improve upon that</P>
        <P>The h1 in Page is no longer need so go ahead and delete it.</P>
        <P>Our first improvement will be to give Header a background image.</P>
        <OL>
          <LI>Download the site's banner by clicking <A href='#'>here</A> and put it in /app/public.</LI>
          <LI>In Header, add <Code code="className='header'"></Code> to the div.</LI>
          <LI>In /Header/style.css add the below style</LI>
          <Pre
            css
            code={[
              ""
            ]}
          />
        </OL>
      </Section>
    </div>
  )
};
export default Styling;
