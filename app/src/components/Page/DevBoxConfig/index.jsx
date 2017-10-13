// DevBoxConfig
import React from 'react'
import styles from './style.css'
import { Link } from 'react-router-dom'
import Pre from './../../elements/Pre'
import Img from '../../elements/Img/index'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection'
import OL from '../../elements/OL'
import UL from '../../elements/UL'
import P from '../../elements/P'
import A from '../../elements/A'
import LI from '../../elements/LI'

const DevBoxConfig = (props) => {
  return (
    <Lesson
      title='Setting-up You Development Machine'
      handleMenuItemClick={props.handleMenuItemClick}
    >

      <LessonSection
        title='What Is a Development Environment?'
      >
        <P>A development environment is a set of procedures and tools for developing, testing and debugging software. The physical machine can be local or remote.</P>
      </LessonSection>
      <LessonSection
        title="Classes' Developer Machine Configuration"
      >
        <UL>
          <LI>Atom - a text editor</LI>
          <LI>npm - a node package manager</LI>
          <LI>yarn - a node package manager</LI>
          <LI>Create React App - a project starter template</LI>
        </UL>

      </LessonSection>
      <LessonSection
        title='Installation & Configuration Instructions'
      >
        <LessonSection
          title='NodeJS & npm'
          level={2}
        >

          <P>npm is a package manager for NodeJS packages. Some people say 'npm' stands for 'node package manager', but I have also read it doesn't. npm comes with NodeJS, so install Node on your machine and npm will be ready to go.</P>
          <P>Node offers a LTS (long-term support) and 'Current' version. Be sure to inst the LTS version.</P>
          <LI><A href='https://nodejs.org'>NodeJS</A></LI>
          <LI><A href='https://nodejs.org/en/download/'>MAC &amp; Windows nstall</A></LI>
          <LI><A href='https://nodejs.org/en/download/package-manager/'>Linux</A></LI>
        </LessonSection>
        <LessonSection
          title='Yarn'
          level={2}
        >
          <P>Yarn is an alternative to npm for managing npm packages. It is used by Create React App and we use it in class.</P>
          <UL>
            <LI><A href='https://yarnpkg.com/en/docs/install#linux-tab'>Linux</A></LI>
            <LI><A href='https://yarnpkg.com/en/docs/install#mac-tab'>Mac</A></LI>
            <LI><A href='https://yarnpkg.com/en/docs/install#windows-tab'>Windows</A></LI>
          </UL>
        </LessonSection>
        <LessonSection
          title='Atom'
          level={2}
        >
          <P>You can find Atom at <A href='https://atom.io'>atom.io</A>. Links to OS specific installations are below.</P>
          <UL>
            <LI><A href='http://flight-manual.atom.io/getting-started/sections/installing-atom/'>Linux</A></LI>
            <LI><A href='http://flight-manual.atom.io/getting-started/sections/installing-atom/#platform-mac'>Mac</A></LI>
            <LI><A href='http://flight-manual.atom.io/getting-started/sections/installing-atom/#platform-windows'>Windows</A></LI>
          </UL>
        </LessonSection>
      </LessonSection>

    </Lesson>
  )
};

export default DevBoxConfig
