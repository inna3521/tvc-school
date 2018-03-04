import React from 'react'
import Img from 'elements/Img'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import UL from 'elements/UL'
import LI from 'elements/LI'
import Html from 'elements/Html'
import P from 'elements/P'
import Curly from 'elements/Curly'
import iCSSSyntax01 from './img/css-syntax.01.png'
import iDeclaration01 from './img/declaration.01.png'
import iDeclarationBlock01 from './img/declaration-block.01.png'
import iSelector01 from './img/selector.01.png'

const Syntax = () => {
  return (
      <Section title='CSS Syntax'>
        <P>As you saw with HTML, each computer language has a specific syntax. This section introduces you to CSS syntax.</P>
        <P>CSS is a selector, folowed by a pair of curly braces <Curly> </Curly> with css property/value pairs inside of them. Here is an example.</P>
        <Img src={iCSSSyntax01} alt='css syntax' />
        <P>Let's go throught that piece by piece.</P>
        <Section title='Declaration' l2>
          <P>In CSS a property/value pair is called a <em>declaration</em> and looks just like the name value pairs we have been discussing so far:</P>
          <Img src={iDeclaration01} alt='css declaration' />
        </Section>
        <Section title='Declarations Block' l2>
          <P>Blocks are a form of grouping. CSS uses curly braces <Curly> </Curly> to create blocks. As you will see later, JavaScript also uses curly braces to create blocks..</P>
          <Img src={iDeclarationBlock01} alt='css declaration block' />
        </Section>
        <Section title='Selectors' l2>
          <P>The final piece of CSS syntax is the selector. One or more selectors go before the opening curly brace. There are several different types of selectors and they can be combined in different ways. Selectors will be the focus of the next section.</P>
          <Img src={iSelector01} alt='css selector' />
        </Section>
      </Section>
    )
  };
export default Syntax
