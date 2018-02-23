import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import VideoStep from 'elements/VideoStep'
// import Step from 'elements/Step'
import iAddAutoHTML from './media/add-auto-html.mkv'

const mediaFolder = 'https://s3-us-west-2.amazonaws.com/tvc-school-media/first-project/'

const FirstProject = () => {
  return (
    <div>
      <Section title='Introduction'>
        <P>In this section you will create your first web site using HTML only. It won't look very pretty yet, but in a later lesson we will add CSS to it and make it look much nicer.</P>
      </Section>
      <Section title='Create the Project Folder and Files'>
        <P>Projects go in a folder that has the name of the project. It is often called the 'root folder' or 'project folder'. All other files and folders for the project go inside of this folder. Follow the steps below to create your project</P>
        <Section title='Create the Project Folder' level={2}>
          <VideoStep src='https://s3-us-west-2.amazonaws.com/tvc-school-media/first-project/test.mp4'>

          </VideoStep>
        </Section>
        <Section title='Open the Project Folder in Atom' level={2}>
          <VideoStep src=''>

          </VideoStep>
        </Section>
        <Section title='Add a HTML File' level={2}>
          <VideoStep src=''>

          </VideoStep>
        </Section>
        <Section title='Enter Auto-HTML' level={2}>
          <VideoStep src=''>

          </VideoStep>
        </Section>
        <Section title='Enter a Title' level={2}>
          <VideoStep src=''>

          </VideoStep>
        </Section>
        <Section title='Add HTML' level={2}>
          <VideoStep src=''>

          </VideoStep>
        </Section>
        <Section title='Save the File' level={2}>
          <VideoStep src={iAddAutoHTML}>

          </VideoStep>
        </Section>
        <Section title='Open in Browser' level={2}>
          <VideoStep src=''>

          </VideoStep>
        </Section>
        <Section title='Arrange Windows Side-by-Side' level={2}>
          <VideoStep src=''>

          </VideoStep>
        </Section>
      </Section>

    </div>
  )
}
export default FirstProject
