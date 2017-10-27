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

  render() {
    const handleHintClick = () => {

      console.log('click')
      this.setState({
        show: !this.state.show,
      })
    }
    const hintStyle = classNames({
      show: this.state.show,
      hide: !this.state.show
    })

    return (
      <div>
        <div>
          <button onClick={handleHintClick}>Hint</button>
        </div>
        <div className={hintStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Hint
