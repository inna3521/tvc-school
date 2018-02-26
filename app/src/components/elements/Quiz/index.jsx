import React from 'react'
import Question from 'elements/Question'

const Quiz = ({children}) => {
  const questions = children.map((c, index) => {
    return (
      <Question
        key={index}
        ex={c.props.ex}
        choices={c.props.choices}
        question={c.props.question}
        answer={c.props.answer}
        questionNumber={index}
       />
    )
  })
  return (
    <div>{questions}</div>
  )
}
export default Quiz
