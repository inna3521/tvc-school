// FirstReactApp
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
        <P>We will accomplish these tasks in 2 lessons. I the first lesson, we will create and modify the default CRA project. In the second lesson we will use the eject command and modify the configuration use CSS Modules.</P>
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
          <LI>Now execute the below commands to see your new app running in the browser.</LI>
          <Pre
            code={[
              '$ cd wholesome-foods',
              '$ yarn start',
            ]}
          />
        </OL>
        <P>Discuss the commands show when cra completes</P>
        - walk-through of project
        - delete all the src/.test.js files
        - create folder unser src/components/Page
        - move App.css & App.js to the Page folder
        - rename App.css to style.csss
        - rename App.js to index.jsx
        - index.jsx delete line 2
        - delete lines 8 - 14
        - add a <h1>Hello from the Page component</h1>
        - change line 2 to be style.css
        - go to src/index.js
        - line 4 change to './components/Page'
      </LessonSection>
      <LessonSection
        title='Modify Webpack Config'
      >
        - stop project in terminal ctrl+c
        - download bootstrap version 3
        - make a style change and put the css into src/index.css (color: 'geen')
        - appears you need to put in git first
        - $ yarn eject
        - are you sure yes
        - configs/paths.js
        - bootstrap: resolveApp('src/bootstrap')
        - webpack config add bootstrap
        - webpack config modify other css
        - yarn install
        - change style .App to .app
        - change import styles from './style.css'
      </LessonSection>

    </Lesson>
  )
};

export default FirstReactApp;
