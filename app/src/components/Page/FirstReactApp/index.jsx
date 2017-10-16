// Name
import React from 'react'
import './style.css'
import Pre from './../../elements/Pre'
import Img from '../../elements/Img/index'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection'
import OL from '../../elements/OL'
import UL from '../../elements/UL'
import P from '../../elements/P'
import A from '../../elements/A'
import LI from '../../elements/LI'

const FirstReactApp = (props) => {
  return (
    <Lesson
      title='First React App'
      subTitle='Hello World With React'
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <LessonSection
        title='Introduction'
      >
        <P>Setting-up a React app is quite complex and could take you weeks to learn. So that we can stay focused on React we will be using <A href='https://github.com/facebookincubator/create-react-app'>Create React App (CRA)</A> which is made by Facebook and creates a fully configured React app to use as a starting point for a project.</P>
        <P>By default, CRA hides the configuration from you. However it provides an 'eject' command that exposes the configuration for those who want to make changes to it. We will be using eject so that we can modify the configuration to use both <A href='https://github.com/css-modules/css-modules'>CSS Modules</A> and <A href='https://getbootstrap.com/docs/3.3/'>Bootstrap</A>.</P>
        <P>We will accomplish these tasks in 2 lessons. I the first lesson, we will create and modify the default CRA project. In the second lesson we will use the eject command and modify the configuration.</P>
      </LessonSection>
      <LessonSection
        title='Create React App'
      >
        <P>Creating an app with CRA one command. Follow the steps below.</P>
        <OL>
          <LI>From the command line, navigate to the directory where you want you project forlder to live and execute the below command.</LI>
          <Pre
            code={[
              '$ create-react-app wholesome-foods',
            ]}
          />
          <P>This creates both the project root folder (as 'wholesome-foods') and a fully functional React application.</P>
          <LI>Now execute the below command to see your new app running in the browser.</LI>
          <Pre
            code={[
              '$ yarn start',
            ]}
          />
        </OL>

      </LessonSection>
    </Lesson>
  )
};

export default FirstReactApp;
