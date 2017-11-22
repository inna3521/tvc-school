import React from 'react'
import './style.css'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import P from 'elements/P'
import A from 'elements/A'
import LessonStatus from 'elements/LessonStatus'
import LI from 'elements/LI'

const JSX = () => {
  return (
    <div id='JSX'>
      <LessonStatus underConstruction>
        <LI>Show sample of JSX with className highlighted</LI>
        <LI>Use <A href='https://babeljs.io/repl/'>Babel REPL</A> to demonstrate what is happening behind the scenes.</LI>
      </LessonStatus>
      <Section title='Introduction' level={1}>
        <P>JSX is a syntax extension to JavaScript, commonly used with React when building the UI of a component.  You can use React without JSX, but JSX makes React much more readable.  </P>
        <P>If you've ever used a template language, such as EJS or Handlebars.js, then the concepts of JSX should feel familiar.  Let's take a look at some basic examples below.</P>
      </Section>
      <Section title='JSX Tags & Embedding Expressions' level={1}>
        <P>Similar to HTML, JSX tags have a tag name, attributes and children.  If the value of an attribute is enclosed in quotes, the value is a string.  Otherwise, you can wrap a Javascript expression in JSX by wrapping it in curly braces.</P>
        <Pre
          code={[
              "<div className='header'>",
              "  <h1>Children Text</h1>",
              "  <Nav signedIn={props.signedIn} />",
              "</div>",

          ]}
        />
        <P>Line three, from the code snippet above, is an example of a self-closing tag, which is used when there are no children.</P>
        <P>It is also an example of a user defined component.  Where as div and h1 are built-in components, user defined components must be capitalized.</P>
      </Section>
      <Section title='Attribute Names' level={1}>
        <P>Since JSX is an extension to JavaScript, the naming convention for attributes uses camelCase instead of traditional HTML attribute names. This is why 'className' is used instead of 'class' in JSX.</P>

        <Pre
          code={[
            "<li className='list-btn'><button onClick={props.handleSignInClick}>Sign In</button></li>",
          ]}
        />
      </Section>
      <Section title='Syntax Highlighting' level={1}>
        <P>It's likely that your editor of choice will not recognize JSX syntax.  This can make for an unpleasurable coding experience.  Check out <A href='http://babeljs.io/docs/editors'>Babel for editors</A> to add JSX syntax hightlighting to your favorite editor!</P>

      </Section>
      <Section title='Official Documentation' level={1}>
        <P>For more information on JSX check out the official documentation at <A href='https://reactjs.org/docs/introducing-jsx.html'>ReactJS</A>.</P>
      </Section>
    </div>
  )
};

export default JSX;
