// MenuAppHeader
import React from 'react'
import './style.css'
import Section from 'elements/Section'
import PageTitle from 'elements/PageTitle'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import ProjectStructure from 'elements/ProjectStructure'
import fInitComponentModel from './init-component-model'

const RA01Introduction = (props) => {
  return (
    <div>
      <PageTitle title='Introduction' back={props.match}/>
      <Section title='Welcome' level={1}>
        <P>Welcome to React Restaurant Website Challenge! In this challenge you will build a website for a restaurant named 'Wholesome Foods' which does it best to appeal to health concious clients while serving a mix of healty but sometimes cholesterol ridden dishes.</P>
        <P>It is expected that only magicians who type fast as hackers in the movies can build the entire website in the 1.75 hours alloted. However, before we depart for the day we will discuss the possibility of having a follow-up session in two weeks.</P>
        <Section title='What you get to start with' level={2}>
          <UL>
            <LI>fully function starter project</LI>
            <LI>suggested css</LI>
            <LI>all required images</LI>
            <LI>data file that acts as your database</LI>
          </UL>
        </Section>
        <Section title='What will you build' level={2}>
          <P>The completed site can be found
            <a href="http://react-challenge-01.s3-website-us-west-2.amazonaws.com/">here</a>. This site has some optional features so I'll need to change things and publish pictures instead.</P>
          <P>The site is first built as a static page (i.e., read only) and then you are challenged to add interactivity of increasing complexity. The official ReactJS documentation recommends building a React site statically first and then adding live data and interactivity. However, if you are an experienced React developer you are welcome to build the whole thing at once.</P>
        </Section>
        <Section title='Make the React components work first' level={2}>
          <P>This is a React challenge and styling is a 'nice to have'. It is recommended you only do the bare minimum of styling necessary to display the data, and then attend to making it look nice.</P>
        </Section>
        <Section title='The Initial Component Model' level={2}>
          <P>When you complete this part of the project the component module will look as below.</P>
          <ProjectStructure shape={fInitComponentModel}/>
        </Section>
      </Section>
    </div>
  )
};

export default RA01Introduction;
