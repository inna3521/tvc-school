import React from 'react'
import Section from 'elements/Section'
import Question from 'elements/Question'
import Quiz from 'elements/Quiz'

const ReviewQuiz = () => {
  return (
    <Section title='Review' l1>
      <Quiz>
        <Question
          question='HTML stands for?'
          choices={[
            'High Tolerance Modeling Language',
            'Hypertext Markup Language',
            'Horizontal Title Meta Language'
          ]}
          answer={2}

        />
        <Question
          question='HTM creates'
          choices={[
            'Interactivity',
            'Styling of the page',
            'Page structure',
          ]}
          answer={3}
        />
        <Question
          question='Select the HTML element that is correctly formed'
          choices={[
            '<p>some test</p>',
            '(p)some text(/p)',
            '<p>some test<p>',
            '</p>some text<p>'
          ]}
          answer={1}
        />
        <Question
          question='Select the answer that is most correct'
          choices={[
            'A HTML element has two tags and some content',
            'A HTML element is made up of two main elements and one or more sub-elements',
            'A HTML element is a tag',
            'A HTML element usually has an opening tag, come content, and a closing tag, but some have one tag and no content.'
          ]}
          answer={4}
        />
        <Question
          question='HTML Elements can contain other elements?'
          choices={[
            'True',
            'False',
          ]}
          answer={1}
        />
        <Question
          question='Where in an element does content go?'
          choices={[
            "Insider the opening tag before the '>'",
            "Inside the closing tag after the '<'",
            "Between the opening and closing tags",
            "After the closing tag",
          ]}
          answer={3}
        />
        <Question
          question='What is an empty element?'
          choices={[
            "An element with no attributes",
            "An element with one tag and no content",
            "An element with no ID property",
          ]}
          answer={2}
        />
        <Question
          question='I have to lean over 100 elements before I can create a website?'
          choices={[
            "True",
            "False",
          ]}
          answer={2}
        />
      </Quiz>
    </Section>
  )
}
export default ReviewQuiz
