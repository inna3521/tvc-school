import React from 'react'
import HTMLTag from 'elements/HTMLTag'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Step from 'elements/Step'
import VideoStep from 'elements/VideoStep'
import Code from 'elements/Code'
import Callout from 'elements/Callout'
import LI from 'elements/LI'
import OL from 'elements/OL'
import Img from 'elements/Img'
import iAddCSSFile from './media/the-matrix.add-css-file.png'

const mediaRoot = 'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/html/FirstProject/'

const TheDivElementEx = () => {
  return (
    <div>
      <P>In this exercise you will be adding to the project started in the HTML project. You will add a file to put your CSS in and link (i.e., connect) the HTML file to the CSS file.</P>
      <Callout info>
        <p>HTML files end with the extension .html</p>
        <p>CSS files end with the extension .css</p>
      </Callout>
      <Section title='Add Some HTML'>
        <OL>
          <LI>Open Atom if it is not already open.</LI>
          <LI>If a project is already open then close it.</LI>
          <LI>From the samples projects, open 'the-matrix' project.</LI>
          <LI>Add the code as shown below to index.html.</LI>
          <Pre
            linesAdded={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            code={[
              '<body>',
              '  <header>',
              '    <h1>Your Name</h1>',
              '    <h2>Software Student</h2>',
              '  </header>',
              '  <section>',
              '    <p>I am currently learning Web Development. This is my first web page.</p>',
              '    <p>Indenting keeps things organized.</p>',
              '  </section>',
              '  <section>',
              '    <h2>The Matrix</h2>',
              '    <img src="matrix.jpg" alt="">',
              '  </section>',
              '</body>',
            ]}
          />
          <LI>Open index.html it in the browser.</LI>
        </OL>
      </Section>
      <Section title='Add a CSS File'>
        <OL>
          <LI>Create a new file named style.css</LI>
          <Img src={iAddCSSFile} />
        </OL>
      </Section>
      <Section title='Add Some CSS'>
        <OL>
          <LI>Open style.css.</LI>
          <LI>Add the following code.</LI>
          <Pre
            linesAdded={[1, 2, 3]}
            code={[
              "h1 {",
              "  font-style: italic;",
              "}",
            ]}
          />
          <LI>Switch to your browser and refresh the page.</LI>
          <LI>Oops! Nothing has changed. We need to link the HTML &amp; CSS files together.</LI>
        </OL>
      </Section>
      <Section title='Linking a HTML to a CSS File'>
        <OL>
          <LI>In index.html, add the line as shown below.</LI>
          <Pre
            linesAdded={[4]}
            code={[
              "<head>",
              '  <meta charset="utf-8">',
              "  <title>The Matrix</title>",
              '  <link rel="stylesheet" href="stle.css">',
              "</head>",
            ]}
          />
        </OL>
      </Section>


    </div>
  )
}
export default TheDivElementEx
