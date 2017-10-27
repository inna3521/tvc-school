// FirstReactApp
import React from 'react'
import './style.css'
import PageTitle from 'elements/PageTitle'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import P from 'elements/P'
import A from 'elements/A'
import LI from 'elements/LI'

const FirstReactApp = (props) => {
  return (
    <div>
      <PageTitle title='First React App' back={props.match}/>
      <Section title='Introduction' level={1}>
        <P>In this lesson, we will use Create React App to create our initial project.</P>
        <P>Setting-up a React app is quite complex and could take you weeks to learn. So that we can stay focused on React we will be using <A href='https://github.com/facebookincubator/create-react-app'>Create React App (CRA)</A> which is made by Facebook and creates a fully configured React app to use as a starting point for a project.</P>
        <P>By default, CRA hides the configuration from you. However it provides an 'eject' command that exposes the configuration so that you can modify it to meet your needs</P>
      </Section>
      <Section title='Create React App' level={1}>
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
      </Section>
    </div>
  )
};

export default FirstReactApp;
