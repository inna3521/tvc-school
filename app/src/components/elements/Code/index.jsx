// Code
import React from 'react';
import classNames from 'classnames'
import styles from './style.css'

// Takes an array of strings
const Code = (props) => {
  const codeStyles = classNames(
    {
    'language-javascript': props.js,
    'language-css': props.css,
    'language-html': props.html,
    [styles.grayCode]: props.gray,
    [styles.fontSize]: true,
    }
  )
  return (
    <code className={codeStyles}>
      {`${props.code}`}
    </code>
  )
};

export default Code;
