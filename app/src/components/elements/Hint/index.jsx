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
    const hintStyle = classNames({
      [styles.showHint]: this.state.showHint === true,
      [styles.hideHint]: this.state.showHint === false,
    })
    const title = this.props.title
      ? this.props.title
      : 'Hint'
    return (
      <div>
        <button className={styles.btn} onClick={this.handleHintClick}>
          {title}&nbsp;&nbsp;
          {this.state.showHint
            ? <i className="fa fa-chevron-down" aria-hidden="true"></i>
            : <i className="fa fa-chevron-right" aria-hidden="true"></i>}
        </button>
        <div className={hintStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Hint
