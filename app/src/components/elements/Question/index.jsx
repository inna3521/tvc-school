import React, { Component } from 'react'
import shortid from 'shortid'
import Choice from 'elements/Choice'

const choiceAlpha = ['a', 'b', 'c', 'd', 'e']

const baseStyle = {
  textAlign: 'left',
}

const unansweredStyle = {
  backgroundColor: 'inherit',
  border: '1px solid rgb(75, 75, 75)',
  borderLeftWidth: '5px',
  borderRadius: '3px',
  margin: '20px 0',
  padding: '20px',
}

const correctStyle = {
  backgroundColor: 'rgb(181, 255, 191)',
  border: '1px solid rgb(75, 75, 75)',
  borderLeftWidth: '5px',
  borderLeftColor: 'green',
  borderRadius: '3px',
  margin: '20px 0',
  padding: '20px',
}

const wrongStyle = {
  backgroundColor: 'rgb(255, 181, 191)',
  border: '1px solid rgb(75, 75, 75)',
  borderLeftWidth: '5px',
  borderLeftColor: 'red',
  borderRadius: '3px',
  margin: '20px 0',
  padding: '20px',
}
const titleStyle = {
  margin: '0 0 15px 0',
}
const CORRECT = 'correct'
const UNANSWERED = 'unanswered'
const WRONG = 'wrong'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionState: UNANSWERED, // unanswered || correct || wrong
      inputChecked: '',
      tag: shortid.generate()
    }
  }
  getIndexForAlpha = (alphaVal) => {
    return  choiceAlpha.indexOf(alphaVal, 0) + 1
  }
  getAlphaForIndex = (index) => {
    return choiceAlpha[index]
  }
  isAnswerCorrect = (alphaVal) => {
    return this.getIndexForAlpha(alphaVal) === this.props.answer
  }
  handleChange = (e) => {
    const val = e.target.value
    const id = e.target.id
    const correct = this.isAnswerCorrect(val)
    this.setState({
      inputChecked: id,
      questionState: correct === true ? CORRECT : WRONG,
    })
  }
  questionStateStyle = () => {
    switch (this.state.questionState) {
      case 'correct':
        return { ...baseStyle, ...correctStyle }
      case 'wrong':
        return  { ...baseStyle, ...wrongStyle }
      case 'unanswered':
      default:
        return { ...baseStyle, ...unansweredStyle }
    }
  }

  render() {
    const { tag } = this.state
    const { choices, question, questionNumber, ex } = this.props
    const renderChoices = choices.map((c, index) => {
      return (
        <Choice
          key={index}
          index={index}
          tag={tag}
          value={this.getAlphaForIndex(index)}
          handleChange={this.handleChange}
          inputChecked={this.state.inputChecked}
          label={c}
          questionState={this.state.questionState}
        />
      )
    })
    return (
      <div style={this.questionStateStyle()}>
        {ex}
        <h4 style={titleStyle}>{questionNumber}. {question}</h4>
        {renderChoices}
      </div>
    )
  }
}
export default Question
