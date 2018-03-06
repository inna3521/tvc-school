import React from 'react'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import UL from 'elements/UL'
import OL from 'elements/OL'
import LI from 'elements/LI'
import Html from 'elements/Html'
import P from 'elements/P'
import Img from 'elements/Img'
import Callout from 'elements/Callout'
import iClassSelector01 from './img/class-selector.01.png'
import iIdSelector01 from './img/id-selector.01.png'

const Selectors = () => {
  return (
      <Section title='Selectors'>
        <P>Any given web page has many different styles and most styles don't apply to the entire page. Some text is small, some large. Some parts of the page are one color and others a different color. There must be a way to specify which styles apply to which parts of the page. This is what selectors do.</P>
        <P>There are 5 different types of selectors</P>
        <OL>
          <LI>Type selector</LI>
          <LI>Class selector</LI>
          <LI>ID selector</LI>
          <LI>Universal selector</LI>
          <LI>Attribute selector</LI>
        </OL>
        <P>In this lesson you will learn about the first three.</P>

        <Section title='Type Selector' l2>
          <P>A better name for a <em>type selector</em> selector might be 'element selector'. Type selector selects HTML elements of a given type. Let's look at an example to understand that.</P>
          <P>Below is a type selector that will select all paragraphs and apply two declarations to each. You can tell it is a type selector because it does not begin with any punctuation such as pound sign (#) or period (.) and it is exactly the same as the name of a HTML element.</P>
          <Pre
            code={[
              'p {',
              '  font-size: 12px;',
              '  color: green;',
              '}'
            ]}
            language='css'
          />
          <P>This selector will ...</P>
          <UL>
            <LI><em>Select</em> all <Html>p</Html> elements (paragraphs) on the page</LI>
            <LI>Make the font size of all <Html>p</Html> elements 12px</LI>
            <LI>Make the font color of all <Html>p</Html> elements green</LI>
          </UL>
          <P>The below is another type selector. This one will select all <Html>a</Html> elements and make their text orange.</P>
          <Pre
            code={[
              'a {',
              '  color: orange;',
              '}'
            ]}
            language='css'
          />
          <Callout info title='Type Selector'>
            <UL>
              <LI>Is exactly the same as the name of a HTML element.</LI>
              <LI>Is <b>not</b> preceeded by any punctuation (e.g., period (.), or pound-sign (#)).</LI>
            </UL>
          </Callout>
        </Section>
        <Section title='Class Selector' l2>
          <P>You learned about the <i>class</i> attribute in the HTML lesson. The <em>class selector</em> will select all elements with a given class and is the most frequently used type of selector.</P>
          <P>The name of a class selector is a name that you, the software developer, makes-up. It can be anything you want but should describe where or how its ruleset will be used. E.g., '.header-title' to apply style to the title in the page header.</P>
          <P>Class selectors start with a period (.).</P>
          <P>The HTML below has three <Html>p</Html> elements. Two of them have the class attribute set to 'color-me' and one does not.</P>
          <Pre
            language='html'
            code={[
              '<p class="color-me">first paragraph</p>',
              '<p>second paragraph</p>',
              '<p class="color-me">third paragraph</p>',
            ]}
          />
          <P>This CSS rule has a class selector named 'color-me'. You can tell it is a class selector because it is prefixed with a period (.). It has one delcaration which sets the font color to green.</P>
          <Pre
            language='css'
            code={[
              '.color-me {',
              '  color: green;',
              '}',
            ]}
          />
          <P>Below is the result of the combined HTML &amp; CSS. Note that both of the paragraphs that have the class attribute set to 'color-me', are green.</P>
          <Img src={iClassSelector01} alt='result of element selector' />
          <Callout info title='Class Selector'>
            <UL>
              <LI>A class selector starts with a period (.).</LI>
              <LI>You make-up the name of the selector.</LI>
              <LI>You apply a class selector by using its name as the value of the 'class' attribute on one or more HTML elements.</LI>
            </UL>
          </Callout>
          <Callout info>
            <p>The real power of class selectors is that you can apply the same ruleset to as many elements as needed without having to write the same declarations over and over many times. For example, if you used <span style={{color: 'red'}}>red text</span> to imply a cautionary note on your website and you used this often, you would only need to write the ruleset once and use that it as often as needed.</p>
          </Callout>
        </Section>
        <Section title={'ID Selector'} l2>
            <P>Another attribute that can be applied to HTML is the <em>id</em> attribute. A <Html>div</Html> with a <em>id</em> attribute looks like this:</P>
            <Pre
              language='html'
              code={[
                '<div id="about">',
                '',
                '</div>'
              ]}
            />
            <P>An <em>ID selector</em> will select whatever element has the specified ID. An ID selector starts with a pound sign (#). Here is a ID selector that will set the font-size to 24px and font-weight to bold for the element with the 'id' of 'about'. </P>
            <Pre
              language='css'
              code={[
                '#about {',
                '  font-size: 24px;',
                '  font-weight: bold;',
                '}'
              ]}
            />
            <P>Here is a <Html>div</Html> with three <Html>p</Html> elements inside it. The <Html>div</Html> has its id attribute set to 'about'.</P>
            <Pre
              language='html'
              code={[
                '<div id="about">',
                '  <p>first paragraph</p>',
                '  <p>second paragraph</p>',
                '  <p>third paragraph</p>',
                '</div>',
              ]}
            />
            <P>The result of combining the HTML &amp; CSS is that all text within the <Html>div</Html> is 24px and bold as shown below.</P>
            <Img src={iIdSelector01} alt='result of element selector' />
            <Callout info title='ID Selector'>
              <UL>
                <LI>An id selector starts with a pound-sign (#).</LI>
                <LI>You make-up the name of the selector.</LI>
                <LI>You apply a class selector by using its name as the value of the 'id' attribute on one and only one HTML element.</LI>
              </UL>
            </Callout>
            <Callout title='Make all IDs Unique' danger>
              <p>Say there were three students in your school with the same ID number. Wouldn't that be confusing? In programming, as in school, IDs should be unique. On a given page, you should only use a given ID once. Unfortunately, it is possible to use a given ID multiple times and this can lead to problems.</p>
            </Callout>
        </Section>
      </Section>
    )
  };
export default Selectors
