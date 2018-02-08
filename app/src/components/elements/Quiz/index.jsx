import React from 'react'
import styles from './style.css'

const choiceNames = ['a', 'b', 'c', 'd', 'e']

const Quiz = ({ children }) => {

  const renderQuestions = children.map((q, index) => {
    return React.cloneElement(q, {
      choiceNames: choiceNames,
      key: `q${index}`,
      name: `q${index}`
    } )

  })
  return (
    <div>
      {renderQuestions}
    </div>
  )
}
export default Quiz
