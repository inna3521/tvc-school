import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import A from 'elements/A'
import Pre from 'elements/Pre'
import Link from 'elements/Link'

const ArrowFunctions = ({mdnArrowFunctions, mdnFunction, mdnThis}) => (
  <Section title='Arrorw Functions' l1>
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
)
export default ArrowFunctions
