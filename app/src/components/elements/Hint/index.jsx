// Hint
import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './style.css'

class Hint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHint: false,
    }

  }

  handleHintClick = () => {
    this.setState({ showHint: !this.state.showHint  })
  }

  render() {
    console.log('showHint', this.state.showHint)
    const hintStyle = classNames({
      [styles.showHint]: this.state.showHint === true,
      [styles.hideHint]: this.state.showHint === false,
    })
    const title = this.props.title
      ? this.props.title
      : 'Hint'
    console.log('hintStyle', hintStyle)
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
