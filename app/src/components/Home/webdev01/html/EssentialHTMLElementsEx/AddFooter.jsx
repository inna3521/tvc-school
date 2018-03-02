import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'

const AddFooter = () => {
  return (
    <Section title='Add a Footer'>
      <P>Many, if not most, web pages have a footer. It is a section at the bottom of the page that usually has links, contact information and a copyright notice.</P>
      <OL>
        <LI>Add a footer element.</LI>
        <LI>Inside the footer element add a paragraph element with the text 'This is the footer'.</LI>
      </OL>
      <Pre
        linesAdded={[36, 37, 38]}
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
        '    <section>',
        '      <h2>Lists</h2>',
        '      <h3>Ordered List</h3>',
        '      <ol>',
        '        <li>List item one</li>',
        '        <li>List item two</li>',
        '      </ol>',
        '      <h3>Unordered List</h3>',
        '      <ul>',
        '        <li>List item one</li>',
        '        <li>List item two</li>',
        '      </ul>',
        '    </section>',
        '    <section>',
        '      <h2>Figure with Image and Caption</h2>',
        '      <figure>',
        '        <img src="mdn.png" alt="">',
        '        <figcaption>Mozilla Developer Network</figcaption>',
        '      </figure>',
        '    </section>',
        '    <footer>',
        '      <p>This is the footer</p>',
        '    </footer>',
        '  </body>',
        '</html>',
        ]}
      />
    </Section>
  )
}
export default AddFooter
