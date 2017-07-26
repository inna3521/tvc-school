// _lesson
import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap'
import Pre from './../../elements/Pre'
import Header from '../../elements/Header'

const Lesson04 = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <Header
        title='Variables'
        subTitle='An Essiential Ingredient'
      />

      <p>Without varables programming languages would not be very useful and all of the apps that you use today would not exist. Variables are a place to store data for use later. The data stored in a variable can be changed.</p>
      <p>In order to use a veriable you must create it. In programming we call this 'declaring' the variable'. Here is how you do it.</p>
      <Pre
        code={[
          'let x'
        ]}
        language='javascript'
      />
      <p>That single line of code declares (creates) a variable named 'x'. Now let's assign some data to x.</p>
      <Pre
        code={[
          "x = 'San Ramon'"
        ]}
        language='javascript'
      />
      <p>You may be tempted to say 'x equals San Ramon' but you would not really be right. In programming, '=' is called the 'assignment operator'. It assigns data to a variable. Here is how you change the data assigned to x:</p>
      <Pre
        code={[
          "x = 'Danville'"
        ]}
        language='javascript'
      />
      <p>So that is how you create variables and assign data to them. Here are a few rules and guidelines for naming variables in JavaScript</p>
      <ul>
        <li>Variables names can include the letters a - z, A - Z, numbers 0 - 9, an underscore ( _ ) or a dollar sign ($).</li>
        <li>The first character in the variable must be a letter, underscore or dollar sign. It cannnot be a number.</li>
        <li>Any character after the first one can be a number</li>
        <li>JavaScript varable names are usually 'camel case'. In camel case, words are combined without spaces, the first word is lower case and all other words start with a capital. For example 'camelCase' or 'someLongVariableName'</li>
        <li>Variable names should be descriptive. For examle, a good variable name for a person's first name is 'firstName'</li>
      </ul>


    </div>
  )
};

export default Lesson04;
