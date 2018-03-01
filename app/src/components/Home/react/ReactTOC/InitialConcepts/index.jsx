// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import Img from 'elements/Img'
import iOneTwoWayBinding from './img/2and1-way-binding.png'
import LessonStatus from 'elements/LessonStatus'

const InitialConcepts = () => {

  return (
    <div id='InitialConcepts'>
      <LessonStatus draftOne>

      </LessonStatus>
      <Section title='Introduction' l1>
        <P>As you progress through this course you will be learning several key React concepts. The concepts are summarized below and expanded upon in later lessons.</P>
        <Section title='JSX' l2>
          <P>JSX: JSX is an extension to JavaScript. It looks a lot like HTML but it is not HTML. JSX describes what the UI should look like. If you know HTML then you are almost ready to start using JSX. You will only have a few details to learn such as using className="style-name" instead of class="style-name"</P>
        </Section>
        <Section title='Components' l2>
          <P>Components are units of UI such as a button or a header. You create components by combining JSX & optionally JavaScript. Components can be as large or as small as your application's needs require. However, in general, it is best to keep components small as this is more flexible when things change.</P>
        </Section>
        <Section title='Props' l2>
          <P>Props is short for 'properties'. Props are name value pairs such as name='Jack' or color='blue' which one component can pass to another. You declare which props should be passed and React passes them for you.</P>
        </Section>
        <Section title='State' l2>
          <P>State is the current data held by an appliction at any given moment in type. A system for managing state is built into React.</P>
        </Section>
        <Section title='Events' l2>
          <P>Just like JavaScript, React has event. React events are just like JavaScript events such as onclick(). However, React implements wrapper around the browser's native events and ensures that each event behaves the same regardless of which browser it is executed in. </P>
        </Section>
        <Section title='Lifecycle' l2>
          <P>Each component has a lifecycle and events that occur during the components lifecycle. Lifecycle events describe when components are created and destroyed, re-rendered, etc. These events have names such as ComponentWillMout and ComponentWillUnmount. They can be used to influence the behavior of a component at various points in its lifecycle.</P>
        </Section>
        <Section title='Virtual DOM' l2>
          <P>The virtual DOM is a representation of the browser's DOM that React keeps in memory. React keeps the virtual DOM in synch within your application. When your code requires a change to the DOM, React first updates the virtual DOM, then compares the virtual DOM to the actual DOM to find differences. Only the differences are propogated to the actual DOM eliminating the need to update larger parts of the page.</P>
        </Section>
        <Section title='One-way Data Binding' l2>
          <P>You will be using data binding in ths course but a detailed description of one-way vs. two-way binding is beyond its scope. However, you should be aware that React implements one-way binding. Data binding is a bit beyond the One way data binding</P>
        </Section>
        <Img src={iOneTwoWayBinding} alt='ll' />
      </Section>
    </div>
  )
};

export default InitialConcepts
