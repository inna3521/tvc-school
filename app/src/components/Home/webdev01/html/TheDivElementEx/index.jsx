import React from 'react'
import Html from 'elements/Html'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Step from 'elements/Step'
import VideoStep from 'elements/VideoStep'
import Callout from 'elements/Callout'
import LI from 'elements/LI'
import OL from 'elements/OL'

const mediaRoot = 'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/html/FirstProject/'

const TheDivElementEx = () => {
  return (
    <div>
      <P>In this exercise you will be using the <Html>div</Html> element as well as some CSS to explore how <Html>div</Html>s work. You will also be creating the project from scratch to get more practice doing that. Let's get started!</P>
      <Section title='Create the Project Folder and Files'>
        <P>Projects go in a folder that has the name of the project. It is often called the 'root folder' or 'project folder'. All other files and folders for the project go inside of this folder. Follow the steps below to create your project</P>
        <Section title='Create the Project Folder' l2>
          <VideoStep src={`${mediaRoot}create-project-folder.mp4`}>
            <Step>Open your file manager.</Step>
            <Step>Create a folder named 'first-promect'.</Step>
          </VideoStep>
        </Section>
        <Section title='Open the Project Folder in Atom' l2>
          <VideoStep src={`${mediaRoot}open-project-in-atom.mp4`}>
            <Step>Launch Atom</Step>
            <Step>Click File > Add Project Folder.</Step>
            <Step>Navigate to and select the 'first-project' folder.</Step>
            <Step>Click Select Folder.</Step>
          </VideoStep>
        </Section>
        <Section title='Add a HTML File' l2>
          <VideoStep src={`${mediaRoot}add-html-file.mp4`}>
            <Step>In the Tree View, right-click first-project.</Step>
            <Step>Click New File.</Step>
            <Step>Enter the file name 'index.html'.</Step>
            <Step>Press Enter.</Step>
          </VideoStep>
        </Section>
        <Section title='Enter Auto-HTML' l2>
          <VideoStep src={`${mediaRoot}add-auto-html.mp4`}>
            <Step>Make sure your cursor is inside the index.html file on the right side.</Step>
            <Step>Type 'html'.</Step>
            <Step>Press Enter and Atom will create a HTML template.</Step>
          </VideoStep>
        </Section>
        <Section title='Enter a Title' l2>
          <VideoStep src={`${mediaRoot}add-title.mp4`}>
            <Step>On line 5, put your cursor between the opening and closing <Html>title</Html> tags.</Step>
            <Step>Type 'The DIV Element'.</Step>
            <Step caution>Although the video shows typing 'First Project', be sure to type 'The DIV Element'</Step>
          </VideoStep>
          <Section title='Your index.html file should now look like this:' l3>
            <Pre code={[
              "<!DOCTYPE html>",
              "<html>",
              "<head>",
              '  <meta charset="utf-8">',
              "  <title>First Project</title>",
              "</head>",
              "  <body>",
              "",
              "  </body>",
              "</html>",
              ]}
            />
          </Section>
        </Section>
        <Section title='Save the File' l2>
          <VideoStep src={`${mediaRoot}save-file.mp4`}>
            <Step>At the top of your HTML file is a tab with the file name.</Step>
            <Step>Currently it has a blue dot which indicates the file has not been saved.</Step>
            <Step>Click ctrl+s to save the file.</Step>
          </VideoStep>
        </Section>
        <Section title='Open in Browser' l2>
          <VideoStep src={`${mediaRoot}open-in-browser.mp4`}>
            <Step>Right-click in the body of the HTML file.</Step>
            <Step>Choose 'Open in Browser'.</Step>
            <Step>Your web page will launch!</Step>
            <Step caution>The video is from First Project. In this exercise, your page should be blank.</Step>
          </VideoStep>
        </Section>
        <Callout warn>
          <p>From this point forward the examples will not show the entire HTML page. Only the part(s) that need to change will be shown. Lines to add will be highlighted in green and lines to delete will be highlighted in red.</p>
        </Callout>
        <Section title='Add a <div> to the page' l2>
          <Pre
            linesAdded={[2, 3, 4]}
            code={[
              '<body>',
              '  <div>',
              '',
              '  </div>',
              '<body>'
            ]}
          />
        </Section>
        <Section l2 title={'Switch back to your browser'}>
          <OL>
            <LI>Switch back to your browser and refresh the page.</LI>
            <LI>Note that the <Html>div</Html> does not show on the page.</LI>
          </OL>
        </Section>
      </Section>
      <Section title='Add two <p> elements to the page' l2>
        <Pre
          linesAdded={[3, 4]}
          code={[
            '<body>',
            '  <div>',
            '    <p>Paragraph 1</p>',
            '    <p>Paragraph 2</p>',
            '  </div>',
            '<body>'
          ]}
        />
      </Section>
      <Section l2 title={'Switch back to your browser'}>
        <OL>
          <LI>Switch back to your browser and refresh the page.</LI>
          <LI>Note that the two <Html>p</Html> elements show on the page.</LI>
        </OL>
      </Section>
      <Callout goal>
        <p>That's a good start. We will be adding CSS to this project after we learn more aobut it.</p>
      </Callout>

    </div>
  )
}
export default TheDivElementEx
