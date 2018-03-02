import React from 'react'
import Section from 'elements/Section'
import Quiz from 'elements/Quiz'
import Question from 'elements/Question'
import QEx from 'elements/QuestionEx'
import Pre from 'elements/Pre'

const Quiz = () => {
  return (
    <Section title='Review'>
      <Quiz>
        <Question
          question='CSS stands for?'
          choices={[
            "Cascading Style Sheets",
            "Continuous Style System",
            "Color Style Sheets",
          ]}
          answer={1}
        />
        <Question
          question='Which is not a CSS selector type?'
          choices={[
            "Element selector",
            "Tag selctor",
            "ID selector",
            "Class selector"
          ]}
          answer={2}
        />
        <Question
          ex={<QEx>
            <Pre code={[
              ".footer {",
              " color: green;",
              "}",
            ]} />
          </QEx>}
          question='The above code shows which type of a selector?'
          choices={[
            "Element selector",
            "ID selector",
            "Class selector"
          ]}
          answer={3}
        />
        <Question
          ex={<QEx>
            <Pre code={[
              "div {",
              " color: green;",
              "}",
            ]} />
          </QEx>}
          question='The above code shows which type of a selector?'
          choices={[
            "Element selector",
            "ID selector",
            "Class selector"
          ]}
          answer={1}
        />
        <Question
          ex={<QEx>
            <Pre code={[
              "#footer {",
              " color: green;",
              "}",
            ]} />
          </QEx>}
          question='The above code shows which type of a selector?'
          choices={[
            "Element selector",
            "ID selector",
            "Class selector"
          ]}
          answer={2}
        />
      </Quiz>
    </Section>
  )
}
