import React from 'react'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import UL from 'elements/UL'
import OL from 'elements/OL'
import LI from 'elements/LI'
import Html from 'elements/Html'
import P from 'elements/P'

const Selectors = () => {
  return (
      <Section title='Selectors'>
        <P>When you stop and think about it, any give web page has many different styles and not all styles apply to the entire page. Some text is small, some large. Some parts of the page are one color and others a different color. There must be a way to specify which styles apply to which parts of the page. This is what selectors do.</P>
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
          <P>A better name for a <em>type selector</em> selector might be 'element selector'. Type selectors select all elements of a given type. Let's look at an example to understand that. Below is a type selector that will select all paragraphs.</P>
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
            <LI><em>Select</em> all <Html>p</Html> elements (paragraphs)</LI>
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

        </Section>
        <Section title='Class Selector' l2>
          <P>You remember the <i>class</i> attribute from the HTML lesson. The <em>class selector</em> will select all elements with a given class.</P>
          show example with html, and css, and then two html elements
        </Section>

        <Section title='Selector'>
          <P>Below is a typical CSS selector. It is called a 'selector' because it will select parts of the web page. In this case, it will select all <Html>p</Html> (paragraph) elements. Read on to learn what that means.</P>
          <Pre
            code={[
              'p {',
              '  font-size: 12px;',
              '}'
            ]}
            language='css'
          />
        </Section>

        <Section title={'ID Selector'} l2>
            <P>Remember from the HTML lessons that an HTML element can have an attribute. A <Html>div</Html> with a <em>id</em> attribute looks like this:</P>
            <Pre
              code={[
                '<div id="about">',
                '',
                '</div>'
              ]}
              language='html'
            />
            <P>An <em>ID selector</em> will select whatever element has the specified ID. An ID selector start with a pound sign (#). Here is a ID selector that will set the font-size to 24px for the element with the 'id' of 'about'. </P>
            <Pre
              code={[
                '#about {',
                '  font-size: 24px;',
                '}'
              ]}
              language='css'
            />
          </Section>
          <Section title='Class Selector' l2>
            <P>HTML elements can also have a <em>class</em> attribute. Here are two <Html>p</Html> elements with a class attribute and one without.</P>
            <Pre
              code={[
                '<p class="aside-style">paragraph 1</P>',
                '<P>paragraph 2</P>',
                '<p class="aside-style">paragraph 3</P>',
              ]}
              language='html'
            />
            <P>A CSS class selector starts with a period (.).</P>
            <Pre
              code={[
                '.aside-style {',
                '  font-size: 14px',
                '}',
              ]}
              language='css'
            />
        </Section>
      </Section>
    )
  };
export default Selectors
