import React, {Component} from 'react'
import { log } from '../../../lib/ke-utils'

const questionStateUnansweredStyle = {
  backgroundColor: 'rgb(100, 100, 100)',
  border: '1px solid rgb(75, 75, 75)',
  borderLeftWidth: '5px',
  borderRadius: '3px',
  margin: '20px 0',
  padding: '20px',
}
const questionStateCorrectStyle = {
  backgroundColor: 'green',
  border: '1px solid rgb(75, 75, 75)',
  borderLeftWidth: '5px',
  borderRadius: '3px',
  margin: '20px 0',
  padding: '20px',
}

const questionStateWrongStyle = {
  backgroundColor: 'yellow',
  border: '1px solid rgb(75, 75, 75)',
  borderLeftWidth: '5px',
  borderRadius: '3px',
  margin: '20px 0',
  padding: '20px',
}

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionState: 'unanswered', // unanswered, correct, wrong
      checked: '',
    }
  }

  handleOptionChange = (e) => {
    const val = e.target.value
    // log('val', val, 'blue')
    this.setState({
      checked: val
    })
    // console.clear()
    const { choiceNames, answer, } = this.props
    // log('choiceNames', choiceNames, 'blue')
    const valIndex = choiceNames.indexOf(val, 0) + 1
    // log('valIndex', valIndex, 'blue')

     const questionState = valIndex === answer
      ? 'correct' // log('CORRECT', '', 'blue')
      : 'wrong' // log('WRONG', '', 'blue')
    this.setState({
      questionState: questionState,
    })
  }

  render() {
    const { question, choices, choiceNames, name } = this.props
    // log('name', name, 'blue')
    const renderChoices = choices.map((c, index) => {
      log('c', c, 'blue')
      const choiceName = choiceNames[index]
      return (
        <div key={`input${name}-${index}`}>
          <input
            type="radio"
            id={choiceName}
            name={name}
            checked={this.state.checked === {choiceName}}
            onChange={(e) => this.handleOptionChange(e)}
            value={choiceName} />
          <label key={`label${index}`} htmlFor={choiceName}>{c}</label>
        </div>
      )
    })
    const questionStateStyle = () => {
      // log('questionState', this.state.questionState, 'blue')
      switch (this.state.questionState) {
        case 'correct':
          // log('correct', '', 'blue')
          return questionStateCorrectStyle
        case 'wrong':
          // log('wrong', '', 'blue')
          return questionStateWrongStyle
        case 'unanswered':
        default:
          // log('unanswered', '', 'blue')
          return questionStateUnansweredStyle
      }
    }
    // log('questionStateStyle', questionStateStyle(), 'blue')
    return (
      <div style={questionStateStyle()}>
        <h4>{question}</h4>
        <form>
          <div>
            {renderChoices}
          </div>

        </form>
      </div>
    )
  }
}
export default Question
