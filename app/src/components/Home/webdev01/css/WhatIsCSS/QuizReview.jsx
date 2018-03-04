import React from 'react'
import Section from 'elements/Section'
import Quiz from 'elements/Quiz'
import Question from 'elements/Question'
import QEx from 'elements/QuestionEx'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import iQuizSelector from './img/quiz-selector.png'
import iQuizBlock from './img/quiz-block.png'
import iQuizRuleset from './img/quiz-ruleset.png'
import iQuizDeclaration from './img/quiz-declaration.png'

const QuizReview = () => {
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
        <Question
          question='In CSS name/value pairs are called property/value?'
          choices={[
            "True",
            "False",
          ]}
          answer={1}
        />
        <Question
          ex={<Img src={iQuizSelector} alt='quiz selector' />}
          question='The word highlighted in green is called'
          choices={[
            "A declaration",
            "A selector",
            "A block",
            "A ruleset",
          ]}
          answer={2}
        />
        <Question
          ex={<Img src={iQuizBlock} alt='quiz selector' />}
          question='The area inside the green rectangle is called:'
          choices={[
            "A declaration",
            "A selector",
            "A block",
            "A ruleset",
          ]}
          answer={3}
        />
        <Question
          ex={<Img src={iQuizRuleset} alt='quiz selector' />}
          question='The area inside the green rectangle is called:'
          choices={[
            "A declaration",
            "A selector",
            "A block",
            "A ruleset",
          ]}
          answer={4}
        />
        <Question
          ex={<Img src={iQuizDeclaration} alt='quiz selector' />}
          question='The text highlighted in green is called:'
          choices={[
            "A declaration",
            "A selector",
            "A block",
            "A ruleset",
          ]}
          answer={1}
        />
      </Quiz>

    </Section>
  )
}

export default QuizReview
