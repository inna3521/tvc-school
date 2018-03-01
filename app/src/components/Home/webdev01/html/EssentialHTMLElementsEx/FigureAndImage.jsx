import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'
import Html from 'elements/Html'

const FigureAndImage = () => {
  return (
    <Section title='Add a Figure with Image'>
      <P>You see figures in textbooks often. They are pictures or diagrams. Figures often have a caption. HTML has an element for figure <Html>figure</Html> &amp; caption <Html>figcaption</Html> with a caption that may describe the figure or contain a legend. The <Html>figcaption</Html> element can go above or below the image.</P>
      <P>You add pictures to a web page using the <Html>img</Html> element.</P>
      <P>Follow the example to add a figure with image and caption to your page.</P>

      <OL>
        <LI>Add a section element.</LI>
        <LI>Inside the section element add the heading 2, and anchor elements as shown.</LI>
        <LI>Once you are done, refresh your page and click the links to make sure they are working</LI>
      </OL>
      <Pre
        linesAdded={[29, 30, 31, 32, 33, 34, 35]}
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
        '  </body>',
        '</html>',
        ]}
      />
    </Section>
  )
}
export default FigureAndImage
