// L10JSOperatorsWithMath
import React from 'react'
import './style.css'
import { Button, Table } from 'react-bootstrap'
import Pre from './../../elements/Pre'
import Code from './../../elements/Code'
import Img from '../../elements/Img/index'
import iFunctionSyntax from './img/function-syntax.png'
import iParameters from './img/parameters.png'

const L11Functions = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      {/* <Header
        title='Functions'
      /> */}
      <h1>What is a function?</h1>
      <p>A function is a grouping of reusable code. For example: Say you needed to do a bunch things many times in your application such as</p>
      <ol>
        <li>Create a file</li>
        <li>Open the file</li>
        <li>Write text to the file</li>
        <li>Print the file</li>
      </ol>
      <p>Doing that in pseudo code would look lik this</p>
      <Pre
        code={[
          'file.create someFile.txt',
          'let f = file.open someFile.txt',
          'f.writeText = "this is the text for my file"',
          'f.print',
        ]}
        language='js'
      />
      <p>The above performed 4 operations on a file named 'someFile.txt'. Now you need to do it again to a different file with diffent text</p>
      <Pre
        code={[
          'file.create differentFile.txt',
          'let f = file.open differentFile.txt',
          'f.writeText = "put some different text in the different file"',
          'f.print',
        ]}
        language='js'
      />
      <p>There are real-life software applications that perform these actions on 1000s of files. Could you imagin writing those 4 lines of code 1000s of times?</p>
      <p>Further, the software doesn't know the name of the file nor what text to put in the file until it is told. Wouldn't it be nice if there were a way to reuse the same lines of code? There is! It is called <b>functions</b></p>
      <p>Here is an example of a real JavaScript function that prints hello to the page</p>
      <Pre
        code={[
          'function saySomething() {',
          "  document.write('hello')",
          '}',
        ]}
        language='js'
      />
      <p>You can tell this function what to say with a little variation</p>
      <Pre
        code={[
          "saySomething('hello class')",
          "",
          'function saySomething(text) {',
          "  document.write(text)",
          '}',
        ]}
        language='js'
      />

      <h2>Syntax of a Fucntion</h2>
      <Img
        src={iFunctionSyntax}
      />
      <ul>
        <li>The 'function' keyword tells JavaScript this is a function</li>
        <li>The function keyword is followed by a space and then the functions name</li>
        <li>The name is followed by a pair of parentheses</li>
        <li>The parentheses are followed by a space an then an opening curly bracket</li>
        <li>The functions ends with a closing curly bracket</li>
        <li>Everything inside of the opening and closing curly brackets is the 'function body'</li>

      </ul>

      <h2>Passing Parameters to a Function</h2>
      <Img
        src={iParameters}
      />
      <ul>
        <li>Parameters are like variables, they hold values such as text and numbers</li>
        <li>While you can pass many parameters to a function it is common to only pass a few, perhaps up to 6 or 7</li>
        <li>Note that the parameters are separated by a comma</li>
      </ul>

      <h2>Calling (using) a Function</h2>
      <ul>
        <li>On lines 3 to 5 below is a function that takes two numbers and multiplies them</li>
        <li>Line 1 calls that function passing it 2 numbers. Note that thenumbers are separated by a comma.</li>
      </ul>

      <Pre
        code={[
          'multiply(2, 4) // this line calls/uses the function',
          '',
          'function multipyTwoNumbers(num1, num2) {',
          '  return num1 * num2',
          '}',
        ]}
        language='js'
      />
    </div>
  )
};

export default L11Functions;
