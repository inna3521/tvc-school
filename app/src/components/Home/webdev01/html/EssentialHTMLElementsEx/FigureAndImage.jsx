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
      <P>You see figures in textbooks often. They are pictures or diagrams. Figures often have a caption. HTML has an element for figure <Html>figure</Html> &amp; the figure's caption <Html>figcaption</Html>. The <Html>figcaption</Html> element can go above or below the image.</P>
      <P>Images are added to a web page using the <Html>img</Html> element. The <Html>img</Html> element is an empty element. You must use the 'src' attribute to spicify the picture you want to be displayed.</P>
      <P>Follow the example to add a figure with image and caption to your page.</P>

      <OL>
        <LI>Add a section element.</LI>
        <LI>Inside the section add a figure element</LI>
        <LI>Inside the figure element add an image element and set it src attribute to "mdn.png" and its 'alt' attribute to 'mdn logo'</LI>
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
        '        <img src="mdn.png" alt="mdn logo">',
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
