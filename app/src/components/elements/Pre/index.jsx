// Pre
import React from 'react';
import classNames from 'classnames'
// import styles from './style.css'

// Takes an array of strings
const Code = (props) => {

  const preStyles = classNames(
    {
    'language-javascript': props.js,
    'language-css': props.css,
    'language-html': props.html,
    'line-numbers': props.lineNumbers

    }
  )
  let code = props.code
  let newCode = code.join('\n')
  return (
    <pre className={preStyles}>
      <code>
        {`${newCode}`}
      </code>
    </pre>
  )
};

export default Code;
