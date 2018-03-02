import React from 'react'
import styles from './style.css'
import Img from 'elements/Img'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Table from 'elements/NewTable'
import UL from 'elements/UL'
import LI from 'elements/LI'
import TH from 'elements/TH'
import TR from 'elements/TR'
import TD from 'elements/TD'
import Html from 'elements/Html'
import P from 'elements/P'
import iCSSSyntax02 from './img/css-syntax.02.png'
import iCSSSyntax03 from './img/css-syntax.03.png'
import iKeyValuePair02 from './img/key-value-pair.02.png'
import iKeyValuePair from './img/key-value-pair.png'
// New
import iKeyValue01 from './img/key-value.01.png'
import iKeyValue02 from './img/key-value.02.png'

const WhatIsCSS = () => {
  return (
    <div id='WhatIsCSS'>
      <P>CSS stands for <span className="large-cap">C</span>ascading<span className="large-cap"> S</span>tyle <span className="large-cap">S</span>heets. We will get to the meaning of the name in a later lesson.</P>
      <P> HTML defines the structure and content of your webpage, CSS determines the appearance and layout.</P>
      <UL>
        <LI>Appearance is called 'style' and includes things such as font color, bold or non-bold and backgroud image or color.</LI>
        <LI>Layout means where things appear on the page and their alignment.</LI>
        <LI>With CSS you can center a heading or put an image on the right side of the page, or put two images side-by-side.</LI>
      </UL>

      <Section title='Review: Key / Value Pairs'>
        <P>To effectively work with CSS you need to have a firm grasp of key / value pairs. Key / value pairs are everwhere in programming, not just in CSS. Unfortunately, key / value pairs go by a number of names.</P>
        <P>In all cases there is a name on the left of some punctuation and a value on the right of the punctuation. The punctuation is most often a colon (:) or equal sign (=).</P>
        <Img src={iKeyValue01} alt='key value pair with equal sign' />
        <Img src={iKeyValue02} alt='key value pair with colon' />
        <P>name/value, key/value, property/value. Let's look at a couple of examples:</P>
        <Section title='Example 1' l2>
          <P>The first example is a property named 'name' with a value of 'joe'. The Above you see that the key is on the left side of the colon (':') and the value is on the right. There are other ways to represent key / value pairs. For example:</P>
          <UL>
            <LI>name : joe</LI>
          </UL>
          <Img
            src={iKeyValuePair}
          />
        </Section>
        <UL>
          <LI>size : large</LI>
        </UL>
        <Img
          src={iKeyValuePair02}
        />
        <P>You often see key / value pairs in code:</P>
        <Pre
          code={[
            "var name = 'joe'",
          ]}
          language='js'
        />
      </Section>
      <Section title='CSS Syntax'>
        <P>CSS has the following syntax:</P>
        <Img
          src={iCSSSyntax02}
        />
        <P>In CSS the 'key' is called a property</P>
        <Img
          src={iCSSSyntax03}
        />
      </Section>
      <Section title='Types of CSS'>
        <P>Up to now we have use the term 'style' and that is a commonly used term. However, to really understand CSS we need some additional vocabulary. We will learn the following terms:</P>
        <UL>
          <LI>selector</LI>
          <LI>element selector</LI>
          <LI>id selector</LI>
          <LI>class selector</LI>
        </UL>
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
      <Section title='Element Selector' l2>
        <P>An <em>element selector</em> selects all html elements of a given type. Below is a <Html>p</Html> (paragraph) selector.</P>
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
    </div>
    )
  };
export default WhatIsCSS;
