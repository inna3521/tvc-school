import React from 'react'
import Section from 'elements/Section'
import LessonStatus from 'elements/LessonStatus'
import VideoStep from 'elements/VideoStep'
import Step from 'elements/Step'
// import iNewFile from './media/new-file.mp4'
// import iNewFolder from './media/new-folder.mp4'
// import iRenameFile from './media/rename-file.mp4'
// import iRenameFolder from './media/rename-folder.mp4'
// import iInstallPackage from './media/install-package.mp4'
// import iSplitWindow from './media/split-window.mp4'
// import iShowHideTree from './media/show-hide-tree.mp4'

const UsingAtom = () => {
  return (
    <div id='UsingAtom'>
      <LessonStatus outline>
        <p>This video may be helpful https://www.youtube.com/watch?v=k-EID5_2D9U</p>

      </LessonStatus>
      <Section title='Files & Folders' level={1}>
        <Section title='Create a new file' level={2}>
          <VideoStep src={'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/computer-skills/UsingAtom/new-file.mp4'}>
            <Step>Right-click on the folder you want to create the file in.</Step>
            <Step>Click New File</Step>
            <Step>Enter the name for the file such as index.html</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
        <Section title='Create a new folder' level={2}>
          <VideoStep src={'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/computer-skills/UsingAtom/new-folder.mp4'}>
            <Step>Right-click on the folder you want to create the folder in.</Step>
            <Step>Click New Folder</Step>
            <Step>Enter the name for the folder such as 'css'</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
        <Section title='Rename a new file' level={2}>
          <VideoStep src={'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/computer-skills/UsingAtom/rename-file.mp4'}>
            <Step>Right-click on the file you want to rename.</Step>
            <Step>Click Rename</Step>
            <Step>Enter the new name</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
        <Section title='Rename a new folder' level={2}>
          <VideoStep src={'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/computer-skills/UsingAtom/rename-folder.mp4'}>
            <Step>Right-click on the folder you want to rename.</Step>
            <Step>Click Rename</Step>
            <Step>Enter the new name</Step>
            <Step>Press Enter</Step>
          </VideoStep>
        </Section>
      </Section>
      <Section title='Installing Packages' level={1}>
        <VideoStep src={'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/computer-skills/UsingAtom/install-package.mp4'}>
          <Step>Click the 'Packages' menu</Step>
          <Step>Click 'Settings View'</Step>
          <Step>Type in the name of the package</Step>
          <Step>Click 'Packages'</Step>
          <Step>Click 'Install'</Step>
        </VideoStep>
      </Section>
      <Section title='Split Window View'>
        <p>You can view two files at the same time. This is useful as what you need to do in one file often relates to something in another file.</p>
        <VideoStep src={'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/computer-skills/UsingAtom/split-window.mp4'}>

        </VideoStep>
      </Section>
      <Section title='Hide / Unhide the Working Tree'>
        <p>There are times you will need more room on your screen which can be achieved by hiding thw 'wroking tree'.</p>
        <VideoStep src={'https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/computer-skills/UsingAtom/show-hide-tree.mp4'}>
          <Step>To hide the working tree, click on the small arrow on the edge between the Working Tree and the code window.</Step>
          <Step>To show the tree, click on the arrow again</Step>
          <Step>You can achieve the same result by pressing <kbd>ctrl</kbd>+<kbd>\</kbd></Step>
        </VideoStep>
      </Section>
    </div>
  )
};

export default UsingAtom
