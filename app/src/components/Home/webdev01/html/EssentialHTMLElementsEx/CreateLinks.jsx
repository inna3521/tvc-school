import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'

const CreateLinks = () => {
  return (
    <Section title='Create Links'>
      <OL>
        <LI>Add a section element.</LI>
        <LI>Inside the section element add the heading 2, and anchor elements as shown.</LI>
        <LI>Once you are done, refresh your page and click the links to make sure they are working</LI>
      </OL>
      <P>When you first look at your index.html file in a browser the title will be the file name. It may look different depending on which browser you are using.</P>
      <Pre
        linesAdded={[11, 12, 13, 14, 15]}
        code={[
        '<!DOCTYPE html>',
        '<html>',
        '  <head>',
        '    <meta charset="utf-8">',
        '    <title>Learning HTML</title>',
        '  </head>',
        '  <body>',
        '    <header>',
        '      <h1>Practicing HTML</h1>',
        '    </header>',
        '    <section>',
        '      <h2>Creating Links with the Ancho Tag</h2>',
        '      <a href="http://trivalleycoders.com">Tri Valley Coders</a><br>',
        '      <a href="https://developer.mozilla.org/en-US/">MDN web docs</a>',
        '    </section>',
        '  </body>',
        '</html>',
        ]}
      />
    </Section>
  )
}
export default CreateLinks
