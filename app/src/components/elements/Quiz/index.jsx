import React, {Component} from 'react'
import { log } from '../../../lib/ke-utils'
import P from 'elements/P'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choiceNames: ['a', 'b', 'c', 'd', 'e'],
      checked: -99
    }
  }


  handleOptionChange = (e) => {
    const val = e.target.value
    log('val', val, 'blue')
    this.setState({
      checked: val
    })
    // console.clear()

    const valIndex = this.state.choiceNames.indexOf(val, 0) + 1
    log('valIndex', valIndex, 'blue')
    const choice = this.props.answer
    log('choice', choice, 'blue')

    valIndex === choice
      ? log('CORRECT', '', 'blue')
      : log('WRONG', '', 'blue')
  }
  handleFormSubmit = (e) => {
    // console.log('handleFormSubmit')
  }
  render() {

    const { question, choices, answer } = this.props
    const renderChoices = choices.map((a, index) => {
      const choiceName = this.state.choiceNames[index]
      return (
        <div>
          <input
            key={`input${index}`}
            type="radio"
            id={choiceName}
            name='quiz'
            checked={this.state.checked === {choiceName}}
            onChange={(e) => this.handleOptionChange(e)}
            value={choiceName} />
          <label key={`label${index}`} htmlFor={choiceName}>{choices[index]}</label>
        </div>
      )
    })
    return (<div>
      <P>{question}</P>
      <form onSubmit={this.handleFormSubmit}>
        <div>
          {/* <input type="radio" id="contactChoice1" name="contact" value="email"/>
          <label for="contactChoice1">Email</label> */}

          {renderChoices}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>)
  }
}
export default Quiz
