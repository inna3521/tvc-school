import React from 'react'
import Section from 'elements/Section'
import Callout from 'elements/Callout'
import LessonStatus from 'elements/LessonStatus'
import VideoStep from 'elements/VideoStep'

const InstallingAtom = () => {
  return (
    <div id='InstallingAtom'>
      <LessonStatus outline>
        wip
        <li>Written or video?</li>
        <li>Just direct to atom.io?</li>
      </LessonStatus>
      <Section title='Installing Atom Code Editor' level={1}>
        <h1>What is a code editor?</h1>
        <p>In its simpliest form a code editor is a program for typing text into files. Most code editors include features to make writing code easier such as syntax highlighting, auto-indention and bracket matching. You will get to know these features later in the course.</p>
        <h1>Installing Atom</h1>
        <Callout info>
          <p>Installation varies depending on your computers operating system. Atom can be installed on Mac, Linux or Windows.</p>
        </Callout>
      </Section>
      <Section title='Installing on Mac' level={2}>
        <VideoStep src='https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/configuration/InstallingAtom/install-atom-mac.mp4'>
        </VideoStep>
      </Section>
      <Section title='Installing on Windows' level={2}>
        <VideoStep src='https://s3-us-west-2.amazonaws.com/tvc-school-media/Home/webdev01/configuration/InstallingAtom/install-atom-windows.mp4'>
        </VideoStep>
      </Section>
      <Section title='Installing on Linux' level={2}>

      </Section>
    </div>
  )
};

export default InstallingAtom
