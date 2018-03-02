import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import Congratulations from 'elements/Congratulations'

const ClosingThoughts = () => {
  return (
    <div>
      <Section title='Closing Thoughts'>
        <P>Congratulations - you have finished your first web page!! For now, it looks very plain. We will have to learn some CSS to dress it up and that is what we will do in the next lesson.</P>
        <P>Typing code is a little different than typing a report for school. You need to get used to using some new keys on the keyboard, paying attention to capitalization that does not follow the rules of the English language and may other small details. However, like everthing else you have learned in life, it gets easier with practice.</P>
        <P>HTML, CSS & JavaScript are 'languages'. As you use them you will begin to remember the words that make-up the language and how to assemble them into a useful computer program.</P>
      </Section>
      <Congratulations title='Congratulations - you have finished the first section!' />

    </div>
  )
}
export default ClosingThoughts
