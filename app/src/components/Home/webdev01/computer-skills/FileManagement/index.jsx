import React from 'react'
// import Pre from 'elements/Pre'
import Section from 'elements/Section'
// import Callout from 'elements/Callout'
import LessonStatus from 'elements/LessonStatus'
// import VideoStep from 'elements/VideoStep'
// import Step from 'elements/Step'
// import newFile from './media/new-file.mp4'

const FileManagement = () => {
  return (
    <div id='FileManagement'>
      <LessonStatus outline>
        <li><b>Lost some media files so commented stuff out for now</b></li>
        <li>What is a file system - show the cabinet & tree</li>
        <li>What is a file</li>
        <li>What is a folder</li>
        <li>Types of files</li>
        <li>File extensions</li>
        <li>Copy vs. Move</li>

      </LessonStatus>
      <Section title='None' l1>
        {/* <VideoStep src={newFile}>
          <Step>Right-click on the folder you want to create the file in.</Step>
          <Step>Click New File</Step>
          <Step>Enter the name for the file such as index.html</Step>
          <Step>Press Enter</Step>
        </VideoStep> */}
        <p>This video may be helpful https://www.youtube.com/watch?v=k-EID5_2D9U</p>
      </Section>

    </div>
  )
};

export default FileManagement
