import React from 'react'
import Section from 'elements/Section'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import ArrowFunctions from './Arrow'
import Destructuring from './Destructuring'
import TemplateLiterals from './TemplateLiterals'

import LessonStatus from 'elements/LessonStatus'
const mdnArrowFunctions = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
const mdnDestructuring = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
// const mdnSpreadOperator = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator'
// const mdnRestParameters = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters'
const mdnTemplateLiterals = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
const mdnFunction = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function'
const mdnThis = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this'

const ES6React = () => {

  return (
    <div id='ES6React'>
      <LessonStatus draftOne>
        
      </LessonStatus>
      <Section title='Introduction' level={1}>
        <P>While you can create React applications without using any ES6 syntax, the React community has embraced its use. This lesson will cover the ES6 syntax that is most commonly used in the React community. In each case, you do not need to fully understand the subject. Being familiar with it as a repeatable pattern will be enough.</P>
        <Section title='What will be covered' level={2}>
          <UL>
            <LI><A href={mdnArrowFunctions}>Arrow functions</A></LI>
            <LI><A href={mdnDestructuring}>Destructuring</A></LI>
            {/* <LI><A href={mdnSpreadOperator}>Spread syntax</A></LI> */}
            {/* <LI><A href={mdnRestParameters}>Rest parameters</A></LI> */}
            <LI><A href={mdnTemplateLiterals}>Template literals</A></LI>
          </UL>
        </Section>
      </Section>
      <ArrowFunctions
        mdnArrowFunctions={mdnArrowFunctions}
        mdnFunction={mdnFunction}
        mdnThis={mdnThis}
      />
      <Destructuring
        mdnDestructuring={mdnDestructuring}
      />
      <TemplateLiterals
        mdnTemplateLiterals={mdnTemplateLiterals}
      />
    </div>
  )
};

export default ES6React
