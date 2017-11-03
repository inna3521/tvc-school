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
    this.setState({
      show: !this.state.show,
    })
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
