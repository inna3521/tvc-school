import React from 'react'
import './style.css'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import P from 'elements/P'
import A from 'elements/A'
import LI from 'elements/LI'
import LessonStatus from 'elements/LessonStatus'
import Img from 'elements/Img'
import iCraResults from './img/cra-results.png'
import NewTable from 'elements/NewTable'
import TH from 'elements/TH'
import TR from 'elements/TR'
import TD from 'elements/TD'
import Code from 'elements/Code'

const FirstReactApp = () => {
  return (
    <div id='FirstReactApp'>
      <LessonStatus draftOne>

      </LessonStatus>
      <Section title='Introduction' l1>
        <P>In this lesson, we will use Create React App to create our initial project.</P>
        <P>Setting-up a professional level React project with Babel, Webpack , linters and the 30 or so other npm packages that are needed is quite complex and takes some time to learn. So that we can stay focused on React we will be using <A href='https://github.com/facebookincubator/create-react-app'>Create React App (CRA)</A> which is made by Facebook and creates a fully configured React app to use as a starting point for a project.</P>
        <P>By default, CRA hides the configuration from you. However it provides an 'eject' command that exposes the configuration so that you can modify it to meet your needs.</P>
      </Section>
      <Section title='Create React App' l1>
        <P>Creating an app with CRA is one command. Follow the steps below.</P>
        <OL>
          <LI>From the command line, navigate to the directory where you want you project folder to live and execute the below command.</LI>
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
        <P></P>
      </Section>
      <Section title='Create React App - Closer Look' l1>
        <P>This section will briefly discuss the output of create-react-app in your terminal.</P>
        <Img src={iCraResults} medium margin={[100, 100, 100, 100]} alt='create react app results' />
        <P>As you can see from the above image, create-react-app proivdes you will a list of commands that can be used with your new project.</P>
        <NewTable>
          <TR>
            <TH>Command</TH>
            <TH>Use / Meaning</TH>
          </TR>
          <TR>
            <TD><Code code={"$ yarn start"}/></TD>
            <TD>Use to run the project in dev mode.</TD>
          </TR>
          <TR>
            <TD><Code code={"$ yarn build"}/></TD>
            <TD>Use to create a optimized build for production deployment.</TD>
          </TR>
          <TR>
            <TD><Code code={"$ yarn test"}/></TD>
            <TD>Use to run unit tests.</TD>
          </TR>
          <TR>
            <TD><Code code={"$ yarn eject"}/></TD>
            <TD>Create React App hides the majority of the project's configuration. This command will reveal that configuration and allow you to change it.</TD>
          </TR>
        </NewTable>
      </Section>
    </div>
  )
};
export default FirstReactApp;
