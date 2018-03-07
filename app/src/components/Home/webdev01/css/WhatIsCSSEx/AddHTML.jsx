import React from 'react'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import OL from 'elements/OL'
import LI from 'elements/LI'
import P from 'elements/P'
import Html from 'elements/Html'

const AddHTML = () => {
  return (
    <Section title='Add Some HTML'>
      <P>In this section we will create the basic structure and content of the page. To save a little bit of time you will start with a template project.</P>
      <OL>
        <LI>Add the code shown below to <Html>head</Html> of index.html.</LI>
        <Pre
          linesAdded={[3]}
          code={[
            '<head>',
            '  <meta charset="utf-8">',
            '  <title>The Matrix</title>',
            '</head>',
          ]}
        />
        <LI>Add the code shown below to <Html>body</Html> of index.html.</LI>
        <Pre
          linesAdded={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]}
          code={[
            '<body>',
            '  <header>',
            '    <h1>The Matrix</h1>',
            '    <h2>by Type Your Name Here</h2>',
            '  </header>',
            '  <section>',
            '    <p>I am currently learning Web Development. This is my first web page.</p>',
            '    <p>Indenting keeps things organized.</p>',
            '  </section>',
            '  <section>',
            '    <h2>The Matrix</h2>',
            '    <img src="matrix.jpg" alt="">',
            '  </section>',
            '  <footer>',
            '    <p>My first page.</p>',
            '    <p>Copyright [your name] 2018</p>',
            '    <a href="http://trivalleycoders.com">Trivalley Coders</a>',
            '  </footer>',
            '</body>',
          ]}
        />
        <LI>Save your file.</LI>
        <LI>Open index.html in the browser to see what it looks like.</LI>
      </OL>
    </Section>
  )
}
export default AddHTML
