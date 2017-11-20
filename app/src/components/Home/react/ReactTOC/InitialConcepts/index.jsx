// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import Img from 'elements/Img'
import iOneTwoWayBinding from './img/2and1-way-binding.png'

const InitialConcepts = () => {

  return (
    <div id='InitialConcepts'>
      <Section title='Introduction' level={1}>
        <P>As you progress throught the you will be learning several key React concepts. ... </P>
      </Section>
      <Section title="Outline" level={1}>
        <UL>
          <LI>JSX: JSX is an extension to JavaScript. It looks a lot like HTML but it is not HTML. JSX describes what the UI should look like. If you know HTML then you are almost ready to start using JSX. You will only have a few details to learn such as using className="style-name" instead of class="style-name"</LI>
          <b>Show sample of JSX with className highlighted</b>
          <b>Use <A href='https://babeljs.io/repl/'>Babel REPL</A> to demonstrate what is happening behind the scenes.</b>
          <LI>Components: Components units of UI such as a button or a header. You create components by combining JSX & JavaScript. Components can be as large or as small as your application's needs require. However, in general, it is best to keep components small as this is more flexible when things change.</LI>
          <LI>Props: Props are name value pairs such as name='Jack' or color='blue'. They are used to pass data from one component to another.</LI>
          <LI>State: State is the current data held by an appliction at any given moment in type. A system for managing state is built into React.</LI>
          <LI>Lifecycle: Each component has a lifecycle. In simplest terms, components are created and destroyed. These events have names such as ComponentWillMout and ComponentWillUnmount and can be used to influence the behavior of a component a various points in its lifecycle.</LI>
          <LI>Events: Events are things that happen within an application. The most typical event is a click on the UI. A change in data from within the application is also an event. </LI>

          <LI>Virtual DOM: The virtual DOM is a representation of the browser's DOM that is kept in memory. React keeps the virtual DOM in synch with your application and only specific changes are made to the browser's DOM. For example, if the text of a label changes but nothing else changes, React will update only the lable and not the whole page.</LI>
          <LI>One way data binding</LI>
          <Img src={iOneTwoWayBinding} alt='ll' />
        </UL>
      </Section>
    </div>
  )
};

export default InitialConcepts
