// Hint
import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './style.css'

class Hint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  handleHintClick = () => {
    // test to work around issue where style 'show' is always active
    let val
    this.state.show
      ? val = false
      : val = true

    this.setState({ show: val  })
  }
  render() {
    const hintStyle = classNames({
      show: this.state.show,
      hide: !this.state.show
    })
    const title = this.props.title
      ? this.props.title
      : 'Hint'

    return (
      <div>
        <div>
          <button onClick={this.handleHintClick}>{title}</button>
        </div>
        <div className={hintStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Hint
