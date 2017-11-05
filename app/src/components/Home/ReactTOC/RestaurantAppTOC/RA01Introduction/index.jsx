// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import PageTitle from 'elements/PageTitle'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import Callout from 'elements/Callout'
import ProjectStructure from 'elements/ProjectStructure'
import fInitComponentModel from './init-component-model'

const RA01Introduction = (props) => {
  return (
    <div>
      <PageTitle title='Introduction' back={props.match}/>
      <Section title='Welcome' level={1}>
        <P>Welcome to the React Restaurant Website Challenge! In this challenge you will build a website for a restaurant named 'Wholesome Foods' which does its best to appeal to health conscious clients while serving a mix of healthy but sometimes cholesterol ridden dishes.</P>
        <P>This is a challenge, not a tutorial and as such, instructions are left intentionally vague to encourage the use of problem solving skills. Your best source of information for solving the challenge is <A href='https://reactjs.org/'>Facebook's React site</A>.</P>
        <Callout goal>
          <P>If you are interested in learning about the concepts in this challenge in more depth as well as more advanced React concepts &amp; techniques, make sure you are a member of our Meetup group <A href='https://www.meetup.com/trivalleycoders/'>TriValley Coders</A> to receive notification of upcoming classes.</P>
        </Callout>

        <Section title='What you get to start with' level={2}>
          <UL>
            <LI>A fully functional starter project</LI>
            <LI>Suggested css</LI>
            <LI>All required images</LI>
            <LI>A data file that acts as your database</LI>
          </UL>
        </Section>
        <Section title='What will you build' level={2}>
          <P>The site is first built as a static page (i.e., read only) and then you are challenged to add interactivity of increasing complexity. The official ReactJS documentation recommends building a React site statically first and then adding live data and interactivity. However, if you are an experienced React developer you are welcome to build the whole site at once.</P>
        </Section>
        <Section title='What you will learn' subTitle='Listed by component' level={2}>
          <Section title='Header' level={3}>
            <UL>
              <LI>Using JSX (See <A href='https://reactjs.org/docs/introducing-jsx.html'>Introducing JSX</A>)</LI>
              <LI>Modifying an existing functional component (see <A href='https://reactjs.org/docs/components-and-props.html#functional-and-class-components'>Functional &amp; Class Components</A>)</LI>
              <LI>Importing an image</LI>
              <LI>Importing data from a separate module</LI>
              <LI>Applying classes to JSX</LI>
              <LI>Importing a component</LI>
              <LI>Rendering a component</LI>
            </UL>
          </Section>
          <Section title='Nav' level={3}>
            <UL>
              <LI>Create a new functional component</LI>
            </UL>
          </Section>
          <Section title='Gallery' level={3}>
            <UL>
              <LI>Create a container component</LI>
              <LI>Use <A href=''>Array.map()</A> to render multiple instances of a component (See <A href='https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components'>Rendering Multiple Components</A>)</LI>
              <LI>Using a key when rendering multiple instanced of a component</LI>
              <LI>Assign an array of components to a constant for rendering later</LI>
              <LI>Passing props</LI>
            </UL>
          </Section>
          <Section title='Menu' level={3}>
            <LI>Similar to Gallery but you will be expanding on it later</LI>
          </Section>
          <Section title='MenuEdit' level={3}>
            <LI>Putting multiple properties in state</LI>
            <LI>Managing multiple events</LI>
            <LI>Conditional Rendering (see <A href='https://reactjs.org/docs/conditional-rendering.html'>Conditional Rendering</A>)</LI>
          </Section>
        </Section>
        <Section title='Make the React components work first' level={2}>
          <P>This is a React challenge and styling is a 'nice to have'. It is recommended you only do the bare minimum of styling necessary to display the data, and then attend to making it look nice.</P>
        </Section>

        <Section title='The Finished App' level={1}>
          <P>Here is the <A href='http://wholesome-foods.s3-website-us-west-2.amazonaws.com/'>finished app</A> so you can see it in action.</P>
          <P>When you are done the application will contain these components:</P>
          <ProjectStructure shape={fInitComponentModel}/>
        </Section>
      </Section>
    </div>
  )
};

export default RA01Introduction;
