// _lesson
import React from 'react'
import Pre from './../../elements/Pre'
import Lesson from '../../elements/Lesson'
import UL from '../../elements/UL'

const Lesson04 = (props) => {
  return (
    <Lesson
      title='Variables'
      subTitle='An Essential Ingredient'
      handleMenuItemClick={props.handleMenuItemClick}
    >

      <p>Without varables programming languages would not be very useful and all of the apps that you use today would not exist. Variables are a place to store data for use later. The data stored in a variable can be changed.</p>
      <p>In order to use a veriable you must create it. In programming this is called 'declaring' the variable'. Here is how you do it.</p>
      <Pre
        code={[
          'let x'
        ]}
        language='js'
      />
      <p>That single line of code declares (creates) a variable named 'x'. Now let's assign some data to x.</p>
      <Pre
        code={[
          "x = 'San Ramon'"
        ]}
        language='js'
      />
      <p>You may be tempted to say 'x equals San Ramon' but you would not really be right. In programming, '=' is called the 'assignment operator'. It assigns data to a variable. Here is how you change the data assigned to x:</p>
      <Pre
        code={[
          "x = 'Danville'"
        ]}
        language='js'
      />
      <p>So that is how you create variables and assign data to them. Here are a few rules and guidelines for naming variables in JavaScript</p>
      <UL
        listItems={[
          'Variables names can include the letters a - z, A - Z, numbers 0 - 9, an underscore ( _ ) or a dollar sign ($).',
          'The first character in the variable must be a letter, underscore or dollar sign. It cannnot be a number.',
          'Any character after the first one can be a number',
          "JavaScript varable names are usually 'camel case'. In camel case, words are combined without spaces, the first word is lower case and all other words start with a capital. For example 'camelCase' or 'someLongVariableName'",
          "Variable names should be descriptive. For examle, a good variable name for a person's first name is 'firstName'"
        ]}
      />

    </Lesson>
  )
};

export default Lesson04;
