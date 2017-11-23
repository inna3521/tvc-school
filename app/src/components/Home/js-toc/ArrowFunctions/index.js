import React from 'react'
import Section from 'elements/Section'
import OL from 'elements/OL'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import Pre from 'elements/Pre'
import Callout from 'elements/Callout'
import LessonStatus from 'elements/LessonStatus'

const ArrowFunctions = () => {

  return (
    <div id='ArrowFunctions'>
      <LessonStatus draftOne>
        <LI>Statement that they do not introduce any new functioality / abilities is not entirely true.</LI>
      </LessonStatus>
      <Section title='Introduction' level={1}>
        <P>This guide is for those who understand traditional JavaScript function but are not familiar with arrow functions. It will show tradition functions and those same functions rewritten with arrow syntax.</P>
      </Section>
      <Section title='What Are Arrow Functions?' level={2}>
        <P><A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'>Arrow functions</A> do not introduce any new functionality / abilities to JavaScript. They are simply a new and briefer syntax for writing functions that could be written with the traditional function() {} syntax.</P>
      </Section>
      <Section title='Must I Use Arrow Functions?' level={2}>
        <P>No. There is no requirement to do so and there is nothing you can do with arrow functions that you cannot do with traditional functions.</P>

      </Section>
      <Section title='Should I Use Arrow Functions?' leval={2}>
        <P>That is up to you but I suggest you get to know them well because, unless you write code in isolation, and few if any of us do, you are going to be reading code that has them. You may even work on a team that requires their use.</P>
      </Section>
      <Section title='Arrow Function Rules' level={1}>
        <P>The examples in this guide will illustrate the following rules.</P>
        <OL>
          <LI>If the arrow functions takes no parameters you must use () to indicate were they would be.</LI>
          <Pre
            code={[
              "() => { // body }",
            ]}
          />
          <LI>If the arrow function takes only one parameter you do not need the ().</LI>
          <Pre
            code={[
              "x => { // body }",
            ]}
          />
          <LI>If the arrow function takes 2 or more parameters you must have the ().</LI>
          <Pre
            code={[
              "(x, y) => { // body }",
            ]}
          />
          <LI>If the function body is only one statement you do not need {}and you do not need a return statement.</LI>
          <Pre
            code={[
              "(x, y) => x + y",
            ]}
          />
          <LI>If the function body has more than one statement you do need {} and you do need a return statement.</LI>
          <Pre
            code={[
              "(x) => {",
              "var y = x + 1",
              "  return y * 2",
              "}",
            ]}
          />
        </OL>
      </Section>
      <Section title='Examples' level={1}>
        <P>In each arrow function example the arrow starts after the ‘variableName = ‘. I.e., if you have var arrow01 = () = "hello";, the arrow function is the bold part.</P>
        <Section title='Rule 1 Example' level={2}>
          <P>Rule 1: An arrow function that takes no parameters must have () on the left side of the => to indicate this fact.</P>
          <UL>
            <LI>This example function takes no parameters and returns a string.</LI>
            <LI>The traditional function indicates there are no parameters by having empty ‘()’ following the ‘function’ keyword.</LI>
            <LI>The arrow functions indicates no parameters by having the empty ‘()’ on the left side of the arrow.</LI>
          </UL>
          <Pre
            code={[
              "// traditional",
              "var traditional01 = function() {",
              "  return 'raditional01'",
              "}",
              "// arrow",
              "var arrow01 = () => 'arrow01'",
            ]}
          />
        </Section>
        <Section title='Rule 2 Example' level={2}>
          <P>Rule 2: If the arrow function takes only one parameter you do not need the ().</P>
          <Pre
            code={[
              "// traditional",
              "var traditional02 = function(str) {",
              "  return str",
              "",
              "// arrow",
              "var arrow02 = str => str",
            ]}
          />
        </Section>
        <Section title='Rule 3 Example' level={2}>
          <P>Rule 3: If the arrow function takes 2 or more parameters you must have the ().</P>
          <Pre
            code={[
              "// traditional",
              "var traditional03 = function(str1, str2){",
              "  return str1 + ' ' + str2",
              "}",
              "// arrow",
              "var arrow03 = (str1, str2) => str1 + ' ' + str2",
            ]}
          />
        </Section>
        <Section title='Rules 4 &amp; 5  Example' level={2}>
          <P>Rule 4: If the function body is only one statement you do not need {}and you do not need a return statement.</P>
          <P>Rule 5: If the function body has more than one statement you do need {} and you do need a return statement.</P>
          <Pre
            code={[
              "// traditional",
              "var traditional04 = function(str) {",
              "  var strOut",
              "  if (str.length > 4) {",
              "    strOut = str + ' is more than 4 characters'",
              "  } else {",
              "    strOut = str + ' is less than 4 characters'",
              "  }",
              "  return strOut",
              "}",
              "// arrow",
              "var arrow04 = str => {",
              "  var strOut",
              "  if (str.length > 4) {",
              "    strOut = str + ' is more than 4 characters'",
              "  } else {",
              "    strOut = str + ' is less than 4 characters'",
              "  }",
              "  return strOut",
              "}",


            ]}
          />
        </Section>
        <Callout goal>
          <P>That's a good start. As a way to learn, I highly suggest you take functions you have already written using traditional functions and rewrite them as arrow functions. Start simple!</P>
        </Callout>
      </Section>

    </div>
  )
};

export default ArrowFunctions
