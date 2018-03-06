import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Callout from 'elements/Callout'
import LI from 'elements/LI'
import OL from 'elements/OL'
import Html from 'elements/Html'
import Img from 'elements/Img'
import iAddCSSFile from './media/the-matrix.add-css-file.png'
import ClosingThoughts from './ClosingThoughts'

const WhatIsCSSEx = () => {
  return (
    <div>
      <P>In this exercise you will be adding to the project started in the HTML project. You will add a file to put your CSS in and link (i.e., connect) the HTML file to the CSS file.</P>
      <Callout info>
        <p>HTML files end with the extension .html</p>
        <p>CSS files end with the extension .css</p>
      </Callout>
      <Section title='Add Some HTML'>
        <P>In this section we will create the basic structure and content the page. To save a little bit of time you will start with a template project.</P>
        <OL>
          <LI>Open Atom if it is not already open.</LI>
          <LI>If a project is already open then close it.</LI>
          <LI>From the samples projects, open 'the-matrix' project.</LI>
          <LI>Add the code shown below to index.html.</LI>
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
      <Section title='Add a CSS File'>
        <OL>
          <LI>Create a new file named style.css</LI>
          <Img src={iAddCSSFile} />
        </OL>
      </Section>
      <Section title='Add Some CSS'>
        <OL>
          <LI>Open style.css.</LI>
          <LI>Add an element selector with the following code.</LI>
          <Pre
            linesAdded={[1, 2, 3, 4]}
            code={[
              "h2 {",
              "  color: blue;",
              "  font-style: italic;",
              "}",
            ]}
          />
          <LI>Save your file.</LI>
          <LI>Switch to your browser and refresh the page.</LI>
          <LI>Oops! Nothing has changed. We need to link the HTML &amp; CSS files together.</LI>
        </OL>
      </Section>
      <Section title='Linking a HTML file to a CSS File'>
        <P>A browser can't apply CSS to a HTML page unless there is some way to tell the browser which CSS file to use for which HTML file. You do that by creating a link from the HTML file to the CSS file.</P>
        <OL>
          <LI>In index.html, add the line as shown below.</LI>
          <Pre
            linesAdded={[4]}
            language='html'
            code={[
              "<head>",
              '  <meta charset="utf-8">',
              "  <title>The Matrix</title>",
              '  <link rel="stylesheet" href="style.css">',
              "</head>",
            ]}
          />
          <LI>Save your file</LI>
          <LI>Go back to the browser and refresh again. This time the subtitle and to title above the picture should both be italic and blue.</LI>
        </OL>
      </Section>
      <Section title='Styling the Page'>
        <P>We are going to start adding styling to the page from the top and work our way down. In the process we will use both element and class selectors. Rulesets with ID selectors are used less frequently so we will skip them for now.</P>
        <Section title='<body> Style' l2>
          <P>At the moment all our content is flush against the right margin. The page will look nicer with everthing centered.</P>
          <OL>
            <LI>Add the below ruleset to your CSS file.</LI>
            <Pre
              linesAdded={[1, 2, 3]}
              language='css'
              code={[
                "h2 {",
                "  text-align: center;",
                "}",
              ]}
            />
            <LI>Save the file and refresh the page to see the change.</LI>
          </OL>
        </Section>
        <Section title='Style the Title' l2>
          <P>The title and the sub-title are a little close together.</P>
          <OL>
            <LI>Add the below ruleset to your CSS file.</LI>
            <Pre
              linesAdded={[1, 2, 3]}
              language='css'
              code={[
                ".title {",
                "  margin-bottom: 11.5px;",
                "}",
              ]}
            />
            <P>Since the selector starts with a period this is a class selector. It will not change the appearance of the title until you add the class attribute to the HTML.</P>
            <LI>Add the class to the <Html>h1</Html> element as shown below.</LI>
            <Pre
              linesAdded={[1]}
              language='html'
              code={[
                '<h1 class="title">The Matrix</h1>',
              ]}
            />
            <LI>Save the file and refresh the page to see the change.</LI>
          </OL>
        </Section>
        <Section title='Style the Sub-title' l2>
          <P>The sub-title should be a little smaller than the title. To style it we will use another class selector and then apply the class attribute to the appropriate HTML element.</P>
          <OL>
            <LI>Add the below ruleset to your CSS file.</LI>
            <Pre
              linesAdded={[1, 2, 3]}
              language='css'
              code={[
                ".sub-title {",
                "  font-size: 16px;",
                "}",
              ]}
            />
            <LI>Add the class to the <Html>h2</Html> element as shown below.</LI>
            <Pre
              linesAdded={[1]}
              language='html'
              code={[
                '<h2 class="sub-title">by [your name]</h2>',
              ]}
            />
            <LI>Save the file and refresh the page to see the change.</LI>
          </OL>
        </Section>
        <Section title='Add Space Below the Header' l2>
          <P>The page will look nicer with some space between the header and the first paragraph on the page. Use the CSS margin property to add the space below the header.</P>
          <OL>
            <LI>Add the below ruleset to your CSS file.</LI>
            <Pre
              linesAdded={[1, 2, 3]}
              language='css'
              code={[
                "header {",
                "  margin-bottom: 50px;",
                "}",
              ]}
            />
            <LI>Save the file and refresh the page to see the change.</LI>
          </OL>
        </Section>
        <Section title='Add Space Between Sections' l2>
          <P>Our page has two sections and they are too close to each other. Let's add some space. Since an element style will select all elements of a given type we can use one ruleset to add space below both sectoins.</P>
          <OL>
            <LI>Add the below ruleset to your CSS file.</LI>
            <Pre
              linesAdded={[1, 2, 3]}
              language='css'
              code={[
                "section {",
                "  margin-bottom: 50px;",
                "}",
              ]}
            />
            <LI>Save the file and refresh the page to see the change.</LI>
          </OL>
        </Section>
        <Section title='Style the Footer' l2>
          <P>Footers often have a different background color to separate them from other parts of the page. Let's add a gray background to the footer.</P>
          <OL>
            <LI>Add the below ruleset to your CSS file.</LI>
            <Pre
              linesAdded={[1, 2, 3]}
              language='css'
              code={[
                "footer {",
                "  background-color: lightgray;",
                "}",
              ]}
            />
            <P>The background is there but some space above and below the footer text would look better. Let's add that with the CSS padding property.</P>
            <Pre
              linesAdded={[3]}
              language='css'
              code={[
                "footer {",
                "  background-color: lightgray;",
                "  padding: 20px 0;",
                "}",
              ]}
            />
            <LI>Save the file and refresh the page to see the change.</LI>
          </OL>
        </Section>
      </Section>
      <ClosingThoughts />
    </div>
  )
}
export default WhatIsCSSEx
