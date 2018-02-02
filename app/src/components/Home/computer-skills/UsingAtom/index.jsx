import React from 'react'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Callout from 'elements/Callout'
import LessonStatus from 'elements/LessonStatus'
import VideoStep from 'elements/VideoStep'
import Step from 'elements/Step'
import newFile from './media/new-file.mp4'
import newFolder from './media/new-folder.mp4'
import renameFile from './media/rename-file.mp4'
import renameFolder from './media/rename-folder.mp4'

const UsingAtom = () => {
  return (
    <div id='UsingAtom'>
      <LessonStatus outline>
        <p>This video may be helpful https://www.youtube.com/watch?v=k-EID5_2D9U</p>

      </LessonStatus>
      <Section title='Files & Folders' level={1}>
        <Section title='Create a new file' level={2}>
          <VideoStep src={newFile}>
            <Step>Right-click on the folder you want to create the file in.</Step>
            <Step>Click New File</Step>
            <Step>Enter the name for the file such as index.html</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
        <Section title='Create a new folder' level={2}>
          <VideoStep src={newFolder}>
            <Step>Right-click on the folder you want to create the folder in.</Step>
            <Step>Click New Folder</Step>
            <Step>Enter the name for the folder such as 'css'</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
        <Section title='Rename a new file' level={2}>
          <VideoStep src={renameFile}>
            <Step>Right-click on the file you want to rename.</Step>
            <Step>Click Rename</Step>
            <Step>Enter the new name</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
        <Section title='Rename a new folder' level={2}>
          <VideoStep src={renameFolder}>
            <Step>Right-click on the folder you want to rename.</Step>
            <Step>Click Rename</Step>
            <Step>Enter the new name</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
      </Section>

    </div>
  )
};

export default UsingAtom
