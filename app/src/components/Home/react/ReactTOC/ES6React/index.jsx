import React from 'react'
import Section from 'elements/Section'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import Pre from 'elements/Pre'
import LessonStatus from 'elements/LessonStatus'

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
        <P>While you can create React applications without using any ES6 syntax the React community has embraced its use. In this lesson will cover the ES6 syntax that is most commonly used in the React community. Below is a list of what this lesson will cover</P>
        <UL>
          <LI><A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'>Arrow functions</A></LI>
          <LI><A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'>Destructuring assignment</A></LI>
          <LI><A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator'>Spread syntax</A></LI>
          <LI><A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters'>Rest parameters</A></LI>
          <LI><A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'>Template literals</A></LI>
        </UL>
      </Section>
      <Section title='Arrorw Functions' level={1}>
        <P>An <A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'>arrow function expression</A> has a shorter syntax than a <A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function'>function expression</A>. It also does not have its own <A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this'>this</A>. Instead it has the 'this' of the scope it is in and thus you do not have to explicitly bind to a class.</P>
        <P>This lesson will not cover 'this' or binding in depth and you do not need to understand them in depth to proceed through the class. This class will focus on getting you ready to use ES6 syntax in the context of React. For more information on each, see the referenced MDN pages.</P>
        <Section title='Arrow Function vs Regular Function Comparison'>
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
          <P>Just like regular functions, arrow functions can take parameters</P>
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
