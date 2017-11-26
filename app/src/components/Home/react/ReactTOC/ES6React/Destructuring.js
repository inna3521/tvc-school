import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import Pre from 'elements/Pre'

const Destructuring = ({ mdnDestructuring }) => (
  <div>
    <Section title='Destructuring' level={1}>
      <P><a href={mdnDestructuring}>Destructuring</a> offers a more efficient &amp; concise way of extracting one or more values from data stored in objects and arrays.</P>
    </Section>
    <Section title='Object Destructuring' level={2}>
      <P>You will often see object destructuring used when passing an object as an argument to a function. In React this is very common as you will see later, data is passed between components via 'props' and props is an object.</P>
      <P>In the below example you start with object 'obj' that contains two properties. On line 2 you extract those properties and assign them 2 new constants 'make' &amp; 'model'.</P>
      <Pre
        code={[
          "const obj = { make: 'Infinity', model:'Q90x' }",
          "const { make, model } = obj",
          "console.log(make) // Infinity",
          "console.log(model) // Q90x",
        ]}
      />
      <P>When passing an object as an argument to a function you can use destructuring to extract the data you need. In the below example model, cyl and drive are extracted out of the passed-in object. However, horsePower is not extracted and therefore produces an error.</P>
      <Pre
        code={[
          "const obj = { make: 'Infinity', model: 'Q90x', cyl: 6, drive: 'all-wheel', horsePower: 350}",
          "",
          "someFunct(obj)",
          "",
          "function someFunct({ model, cyl, drive }) {",
          "  console.log(model) // Q90x",
          "  console.log(cyl) // 6",
          "  console.log(drive) // all-wheel",
          "  console.log(horsePower) // ReferenceError: horsePower is not defined",
          "}",
        ]}
      />
    </Section>
    <Section title='Array Destructuring' level={2}>
      <P>Array destructuring is similar to object destructuring except that elements in an array are not named and therefore must be extracted positionally.</P>
      <Pre
        code={[
          "let [a, b, c] = [1, 2, 3]",
          "console.log(a) // 1",
          "console.log(b) // 2",
          "console.log(c) // 3",
        ]}
      />
      <P>To ignore an element in an array you leave an empty position on the left hand side. The skipped position is sometimes referred to as an 'array hole'.</P>
      <Pre
        code={[
          "console.log(y) // 1",
          "console.log(z) // 2",
        ]}
      />
    </Section>
  </div>
)
export default Destructuring
