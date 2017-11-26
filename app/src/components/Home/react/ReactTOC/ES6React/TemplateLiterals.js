import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import Pre from 'elements/Pre'
import OL from 'elements/OL'
import LI from 'elements/LI'
import Code from 'elements/Code'
import A from 'elements/A'

const TemplateLiterals = ({ mdnTemplateLiterals }) => (
  <div>
    <Section title='Template Literals' level={1}>
      <P><A href={mdnTemplateLiterals}>Template literals</A> are used to embed the values of variables within strings. They can be used instead of string concatanation with '+'.</P>
    </Section>
    <P>To create a template literal you ... </P>
    <OL>
      <LI>Enclose the string in backticks (``)</LI>
      <LI>Put variables inside of {'${}'} /></LI>
    </OL>


    <P>The code below shows an example of embedding 2 variables within a string. The output is on line 5. Note that the string on line 4 is enclosed in backticks (``) not single quotes.</P>
    <Pre
      code={[
        "let firstName = 'Joe'",
        "let lastName = 'Herman'",
        "let sentence = `My first name is ${firstName} and my last name is ${lastName}.`",
        "console.log(sentence)",
        "// My first name is Joe and my last name is Herman."
      ]}
    />
    <P>This is equilivant to using the '+' operator as shown below.</P>
    <Pre
      code={[
        "let sentence = 'My first name is ' + firstName + ' and my last name is + lastName + '.'",
      ]}
    />
  </div>
)
export default TemplateLiterals
