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
  const redText = {
    color: 'red',
  }
  return (
    <div>
      <PageTitle title='Introduction' back={props.match}/>
      <Section title='Welcome' level={1}>
        <P>Welcome to the React Restaurant Website Challenge! In this challenge you will build a website for a restaurant named 'Wholesome Foods' which does its best to appeal to health conscious clients while serving a mix of healthy but sometimes cholesterol ridden dishes.</P>
        <P>This is a challenge, not a tutorial and as such, instructions are left intentionally vague to encourage the use of problem solving skills. Your best source of information for solving the challenge is <A href='https://reactjs.org/'>Facebook's React site</A>.</P>
        <Callout goal>
          <P>If you are interested in learning about the concepts in this challenge in more depth as well as more advanced React concepts &amp; techniques, make sure you are a member of our Meetup group <A href='https://www.meetup.com/trivalleycoders/'>TriValley Coders</A> to receive notification of upcoming classes.</P>
        </Callout>
        <Section title='Who is the Challeng For?' level={2}>
          <P>This challenge is designed for those new to ReactJS. If you know some HTML, CSS and have a good grasp of JavaScript, you are ready to proceed.</P>
        </Section>
        <Section title='What you get to start with' level={2}>
          <UL>
            <LI>A fully functional starter project</LI>
            <LI>Suggested css</LI>
            <LI>All required images</LI>
            <LI>A data file that acts as your source of data</LI>
          </UL>
        </Section>
        <Section title='What will you build' level={2}>
          <P>You will build a typical restaurant website. It will have a header, gallery of dishes with pictures and a menu that can be updated.</P>
          <P>The site is first built as a static page (i.e., read only) and then you are challenged to add interactivity of increasing complexity. The official ReactJS documentation recommends building a React site statically first and then adding live data and interactivity. However, if you are an experienced React developer then chart your own course.</P>
        </Section>
        <Section title='What you will learn' subTitle='Listed by component' level={2}>
          <Section title='Header (skill level 1)' level={3}>
            <UL>
              <LI>Using JSX (See <A href='https://reactjs.org/docs/introducing-jsx.html'>Introducing JSX</A>)</LI>
              <LI>Create a function component (<A href='https://reactjs.org/docs/components-and-props.html#functional-and-class-components'>Functional &amp; Class Components</A>)</LI>
              <LI>Importing an image</LI>
              <LI>Importing data from a separate module</LI>
              <LI>Applying CSS classes to JSX</LI>
              <LI>Importing a component</LI>
              <LI>Rendering a component</LI>
            </UL>
          </Section>
          <Section title='Nav (skill level 2)' level={3}>
            <UL>
              <LI>Create a new functional component</LI>
            </UL>
          </Section>
          <Section title='Gallery (skill level 3)' level={3}>
            <UL>
              <LI>Create a container component</LI>
              <LI><A href='https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components'>Rendering multiple instances of a components</A> with <A href=''>Array.map()</A></LI>
              <LI>Using a key when rendering multiple instances of a component</LI>
              <LI>Assign an array of components to a constant for rendering later</LI>
              <LI>Passing props</LI>
            </UL>
          </Section>
          <Section title='Menu (skill level 3)' level={3}>
            <UL>
              <LI>Similar to Gallery but you will be expanding on it later</LI>
            </UL>
          </Section>
          <Section title='Nav - Interactive Navigation (skill level 4)' level={3}>
            <UL>
              <LI>Use <A href='https://reactjs.org/docs/state-and-lifecycle.html'>state</A></LI>
              <LI>Implement an <A href='https://reactjs.org/docs/handling-events.html'>event</A></LI>
            </UL>
          </Section>
          <Section title='MenuEdit (skill level 4+)' level={3}>
            <UL>
              <LI>Putting multiple properties in state</LI>
              <LI>Managing multiple events</LI>
              <LI><A href='https://reactjs.org/docs/conditional-rendering.html'>Conditional Rendering</A></LI>
            </UL>
          </Section>
        </Section>
        <Section title='Some Words of Advice' level={2}>
          <P>Don't spend much time on styling. If your components work you have succeeded even if they don't look good.</P>
          <P>Stick to the challenge. If you go off in a different direction it may be hard to help you when you get stuck.</P>
          <P><b style={redText}>Ask questions!</b> It isn't a tutorial. Lot's of things are intentionally left unsaid. The challenge is designed to provoke questions and conversation by introducing new concepts and requiring thought around implementation.</P>
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
