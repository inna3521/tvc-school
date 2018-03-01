import React from 'react'
import Pre from 'elements/Pre'
import Img from 'elements/Img/index'
import iFunctionSyntax from './img/function-syntax.png'
import iParameters from './img/parameters.png'
import Section from 'elements/Section'
import OL from 'elements/OL'
import UL from 'elements/UL'
import LI from 'elements/UL'

const FunctionsTry2 = () => {
  return (
    <div id='FunctionsTry2'>
      <Section title='What is a fnction?'>
        <p>A function is a grouping of reusable code. For example: Say you needed to do a bunch things many times in your application such as</p>
        <OL>
          <LI>Create a file</LI>
          <LI>Open the file</LI>
          <LI>Write text to the file</LI>
          <LI>Print the file</LI>
        </OL>
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
        <p>There are real-life software applications that perform these actions on 1000s of files. Could you imagin writing those 4 lines of code 1000s of times? Clearly the answer is 'no' and fortunately there is a solution - functions!</p>
        <p>Here is an example of a real JavaScript function that prints hello to the page</p>
      </Section>
      <Section title='Syntax of a function'>
        <Img
          src={iFunctionSyntax}
        />
        <UL>
          <LI>The 'function' keyword tells JavaScript this is a function</LI>
          <LI>The function keyword is followed by a space and then the functions name</LI>
          <LI>The name is followed by a pair of parentheses</LI>
          <LI>The parentheses are followed by a space an then an opening curly bracket</LI>
          <LI>The functions ends with a closing curly bracket</LI>
          <LI>Everything inside of the opening and closing curly brackets is the 'function body'</LI>
        </UL>
      </Section>
      <Section title='Passing Parameters to a Function'>
        <Img
          src={iParameters}
        />
        <UL>
          <LI>Parameters are like variables, they hold values such as text and numbers'</LI>
          <LI>While you can pass many parameters to a function it is common to only pass a few, perhaps up to 6 or 7'</LI>
          <LI>Note that the parameters are separated by a comma</LI>
        </UL>
      </Section>
      <Section title='Calling (using) a Function'>
        <UL>
          <LI>On lines 3 to 5 below is a function that takes two numbers and multiplies them</LI>
          <LI>Line 1 calls that function passing it 2 numbers. Note that thenumbers are separated by a comma</LI>
        </UL>
        <Pre
          code={[
              'function multipyTwoNumbers(num1, num2) {',
              '  return num1 * num2',
              '}',
              '',
              'multiply(2, 4) // this line calls/uses the function',
          ]}
          language='js'
        />
      </Section>
    </div>
      )
      };

      export default FunctionsTry2;
