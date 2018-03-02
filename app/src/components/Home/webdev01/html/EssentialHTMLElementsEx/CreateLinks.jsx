import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'

const CreateLinks = () => {
  return (
    <Section title='Create Links'>
      <P>A hyperlink, often just called link for short, creates a way to navigate to other places. A link can take you to another part of the current page, a different page on the same site or an entirely different website. Links can also open your email client or initiate the download of a file.</P>
      <OL>
        <LI>Add a section element.</LI>
        <LI>Inside the section element add a heading 2, and an anchor elements as shown.</LI>
        <LI>Once you are done, refresh your page and click the links to make sure they are working</LI>
      </OL>
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
