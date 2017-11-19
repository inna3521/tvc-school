// MenuAppHeader
import React from 'react'
import PropTypes from 'prop-types'
import Section from 'elements/Section'
import PageTitle from 'elements/PageTitle'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import Img from 'elements/Img'
import iOneTwoWayBinding from './img/2and1-way-binding.png'

const InitialConcepts = ({ match }) => {

  return (
    <div>
      <PageTitle title='Initial Concepts' match={match}/>
      <Section title='Introduction' level={1}>
        <P>As you progress throught the you will be learning several key React concepts. ... </P>
      </Section>
      <Section title="React is Open" level={1}>
        <P>React's main competitor is <A href='https://angularjs.org/'>AngularJS</A> which is made by Google and is a full 'framework' which includes things like data connectivity. There are a few key differences between the two. First React is strictly for creating the 'view'. Unlike AngularJS, React contains no built-in functionality for connecting to data, it doesn't have templates nor does it prescribe a design pattern like MVC.</P>
        <P>So then what is so greate about React? Well first of all, and most importantly, it doesn't prescribe how things should be done. You use it to render your views and then assemble the rest of your applications stack based on your needs and preferences.</P>
        <P>Another great thing about React is it allows you to use JavaScript to render your UI</P>
        <UL>
          <LI>lots of ways to do same the or and to go wrong</LI>
          <LI>No templates required: https://www.youtube.com/watch?v=x7cQ3mrcKaY</LI>
          <LI>Everything in one place</LI>
          <LI>Incorrect JSX doesn't fail quietly as HTML doesn</LI>
          <LI>Everything is JavaScript, JSX is an extension of JavaScript</LI>
          <LI>There is close to zero React specific syntax to learn</LI>
          <LI>The ultimate in flexibility (and pain) Not opinionated on how your application should be structured.</LI>
          <LI>What is data binding https://www.accelebrate.com/blog/two-way-data-binding-angular-2-and-react/</LI>
          <Img src={iOneTwoWayBinding} alt='one and two way binding' />
          <LI>One way vs two-way binding
            <UL>
              <LI>One source of data. </LI>
              <LI>All UI updates come from the model. User input is first sent to the model and then to the UI element.</LI>
            </UL>
          </LI>
          <LI>Two way binding
            <UL>
              <LI>A UI element can be updated via the model or user input. User input updates the UI and then flows to the model. Changes in the model flow to the UI</LI>
            </UL>
          </LI>
        </UL>
      </Section>
      <Section title='Virtual DOM' level={1}>
        <UL>
          <LI>http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/</LI>
          <LI>https://www.accelebrate.com/blog/the-real-benefits-of-the-virtual-dom-in-react-js/</LI>
        </UL>
      </Section>
    </div>
          )
          };

          InitialConcepts.propTypes = {
            match: PropTypes.object.isRequired
          }

          export default InitialConcepts
