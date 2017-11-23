import React from 'react'
import Section from 'elements/Section'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import Pre from 'elements/Pre'
import Link from 'elements/Link'

import LessonStatus from 'elements/LessonStatus'
const mdnArrowFunctions = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
const mdnDestructuringAssignment = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
const mdnSpreadOperator = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator'
const mdnRestParameters = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters'
const mdnTemplateLiterals = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
const mdnFunction = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function'
const mdnThis = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this'

const ES6React = () => {

  return (
    <div id='ES6React'>
      <LessonStatus underConstruction>
        <LI>MDN categorizes things different than I have been doing. Spread &amp; destructuring works for both arrays and objects and I should follow their way.</LI>
        <h4>So</h4>
        <LI>Arrow functions</LI>
        <LI>Destructuring assignment</LI>
        <LI>Spread syntax</LI>
        <LI>Rest parameters</LI>
        <LI>Template literals</LI>
      </LessonStatus>
      <Section title='Introduction' level={1}>
        <P>While you can create React applications without using any ES6 syntax, the React community has embraced its use. This lesson will cover the ES6 syntax that is most commonly used in the React community. Below is a list of what will be covered.</P>
        <UL>
          <LI><A href={mdnArrowFunctions}>Arrow functions</A></LI>
          <LI><A href={mdnDestructuringAssignment}>Destructuring assignment</A></LI>
          <LI><A href={mdnSpreadOperator}>Spread syntax</A></LI>
          <LI><A href={mdnRestParameters}>Rest parameters</A></LI>
          <LI><A href={mdnTemplateLiterals}>Template literals</A></LI>
        </UL>
      </Section>
      <Section title='Arrorw Functions' level={1}>
        <P>An <A href={mdnArrowFunctions}>arrow function expression</A> has a shorter syntax than a <A href={mdnFunction}>function expression</A>. It also does not have its own <A href={mdnThis}>this</A>. Instead it has the 'this' of the scope it is in and thus you do not have to explicitly bind it to a class.</P>
        <P>This lesson will not cover 'this' or binding in depth and you do not need to understand them in depth to proceed through the class. This class will focus on getting you ready to use ES6 syntax in the context of React. For more information on arrow function syntax see <Link to='js-toc/arrow-functions'>Arrow Function Syntax</Link> and <A href={mdnArrowFunctions}>Arrow Functions (MDN)</A>.</P>
        <Section title='Arrow Function vs Regular Function: Comparison'>
          <P>The best way to learn arrow functions is to convert regular functions to arrow functions as shown in the example below.</P>
          <Pre
            code={[
              "// traditional function",
              "function sayHello() {",
              "  return 'Hello'",
              "}",
              "// arrow function",
              "const sayHello = () => {",
              "  return 'Hello'",
              "}",
            ]}
          />
          <P>The actual arrow function is ...</P>
          <Pre
            code={[
              "() => {",
              "  return 'Hello'",
              "}",
            ]}
          />
          <P>However, to make it a stand-alone function you must assign it to a variable which becomes its name.</P>
          <P>Just like regular functions, arrow functions can take parameters.</P>
          <Pre
            code={[
              "// traditional function",
              "function saySomething(sayThis, sayThat) {",
              "  return sayWhat",
              "}",
              "// arrow function",
              "const saySomething = (sayThis, sayThat) => {",
              "  return sayWhat",
              "}",
            ]}
          />
        </Section>
      </Section>
    </div>
  )
};

export default ES6React
