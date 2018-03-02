import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'

const Lists = () => {
  return (
    <Section title='Lists'>
      <P>Lists come in two types, ordered and unordered. Ordered lists have sequential numbering or alphabetic letters. Unordered lists have bullet points. You can create a wide variety of number, letter and bullet points, including using images for bullets. Here we will create two lists with the default numbering/bullets.</P>
      <Section title='Ordered List' l2>
        <OL>
          <LI>Add a section element.</LI>
          <LI>Inside the section element add a heading 2 with the text 'Lists', a heading 3 element with the text 'Ordered List' and an ordered list with two list items as shown below.</LI>
        </OL>
        <Pre
          linesAdded={[16, 17, 18, 19, 20, 21, 22, 23]}
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
          '    </section>',
          '  </body>',
          '</html>',
          ]}
        />
      </Section>
      <Section title='Unordered List' l2>

        <OL>
          <LI>Now add an unordered list inside the same section element</LI>
        </OL>
        <Pre
          linesAdded={[24, 25, 26, 27]}
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
          '  </body>',
          '</html>',
          ]}
        />
      </Section>
    </Section>
  )
}
export default Lists
