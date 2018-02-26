import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import VideoStep from 'elements/VideoStep'
import Step from 'elements/Step'
import HTMLTag from 'elements/HTMLTag'
import Code from 'elements/Code'

const mediaRoot = 'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/html/FirstProject/'

const FirstProject = () => {
  return (
    <div>
      <Section title='Introduction'>
        <P>In this section you will create your first web site using HTML only. It won't look very pretty yet, but in a later lesson we will add CSS to it and make it look much nicer.</P>
      </Section>
      <Section title='Create the Project Folder and Files'>
        <P>Projects go in a folder that has the name of the project. It is often called the 'root folder' or 'project folder'. All other files and folders for the project go inside of this folder. Follow the steps below to create your project</P>
        <Section title='Create the Project Folder' level={2}>
          <VideoStep src={`${mediaRoot}create-project-folder.mp4`}>
            <Step>Open your file manager.</Step>
            <Step>Create a folder named 'first-project'.</Step>
          </VideoStep>
        </Section>
        <Section title='Open the Project Folder in Atom' level={2}>
          <VideoStep src={`${mediaRoot}open-project-in-atom.mp4`}>
            <Step>Launch Atom</Step>
            <Step>Click File > Add Project Folder.</Step>
            <Step>Navigate to and select the 'first-project' folder.</Step>
            <Step>Click Select Folder.</Step>
          </VideoStep>
        </Section>
        <Section title='Add a HTML File' level={2}>
          <VideoStep src={`${mediaRoot}add-html-file.mp4`}>
            <Step>In the Tree View, right-click first-project.</Step>
            <Step>Click New File.</Step>
            <Step>Enter the file name 'index.html'.</Step>
            <Step>Press Enter.</Step>
          </VideoStep>
        </Section>
        <Section title='Enter Auto-HTML' level={2}>
          <VideoStep src={`${mediaRoot}add-auto-html.mp4`}>
            <Step>Make sure your cursor is inside the index.html file on the right side.</Step>
            <Step>Type 'html'.</Step>
            <Step>Press Enter and Atom will create a HTML template.</Step>
          </VideoStep>
        </Section>
        <Section title='Enter a Title' level={2}>
          <VideoStep src={`${mediaRoot}add-title.mp4`}>
            <Step>On line 5, put your cursor between the opening and closing <HTMLTag>title</HTMLTag> tags.</Step>
            <Step>Type 'First Project'.</Step>
          </VideoStep>
        </Section>
        <Section title='Add HTML' level={2}>
          <VideoStep src={`${mediaRoot}add-html.mp4`}>
            <Step>Put your cursor on line 8 between the opening and closing <HTMLTag>body</HTMLTag> tags.</Step>
            <Step>Type <Code code="<h1>Hello from First Project</h1>" />.</Step>
          </VideoStep>
        </Section>
        <Section title='Save the File' level={2}>
          <VideoStep src={`${mediaRoot}save-file.mp4`}>
            <Step>At the top of your HTML file is a tab with the file name.</Step>
            <Step>Currently it has a blue dot which indicates the file has not been saved.</Step>
            <Step>Click ctrl+s to save the file.</Step>
          </VideoStep>
        </Section>
        <Section title='Open in Browser' level={2}>
          <VideoStep src={`${mediaRoot}open-in-browser.mp4`}>
            <Step>Right-click in the body of the HTML file.</Step>
            <Step>Choose 'Open in Browser'.</Step>
            <Step>Your web page will launch!</Step>
          </VideoStep>
        </Section>
        <Section title='Arrange Windows Side-by-Side' level={2}>
          <p>If you are switching windows from Atom to the browser it can be hard to stay focused. If your screen is large enough you can arrange Atom and the browser side-by-side.</p>
          <VideoStep src={`${mediaRoot}arrange-windows.mp4`}>
            <Step>Size Atom to take half the screen.</Step>
            <Step>Size the browser to take half the screen.</Step>
            <Step>Hide the Tree View by clicking the left arrow between the Tree View and Code Pane. </Step>
          </VideoStep>
        </Section>
      </Section>

    </div>
  )
}
export default FirstProject
