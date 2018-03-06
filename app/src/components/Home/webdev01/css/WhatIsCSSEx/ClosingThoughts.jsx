import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import UL from 'elements/UL'
import LI from 'elements/LI'
import Congratulations from 'elements/Congratulations'

const ClosingThoughts = () => {
  return (
    <div>
      <Section title='Closing Thoughts'>
        <P>As you can see, a page with CSS added looks much better than HTML alone. Here are a few things to keep in mind:</P>
        <UL>
          <LI>We will always put HTML in the .html file and CSS in the .css file so the instructions will no longer say to do so.</LI>
          <LI>Remembering to save the file you made changes to before refreshing the page is common. Students often spend lots of time trying to figure out what they did wrong olny to discover they forgot to save. In this lesson you were reminded at the end of each step. For the remainder of the course you'll need to remind yourself.</LI>
        </UL>
      </Section>
      <Congratulations title='Congratulations - you have created your first project with both HTML &amp; CSS!' />

    </div>
  )
}
export default ClosingThoughts
