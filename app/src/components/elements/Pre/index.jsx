// Pre
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import classNames from 'classnames'
// import styles from './style.css'

// Takes an array of strings
const Code = (props) => {

  const preStyles = classNames(
    {
    'language-javascript': props.js,
    'language-css': props.css,
    'language-html': props.html,
    // 'line-numbers': props.lineNumbers
    'line-numbers': true,
    }
  )
  let code = props.code
  let newCode = code.join('\n')
  return (
      <SyntaxHighlighter showLineNumbers style={docco}>
        {`${newCode}`}
      </SyntaxHighlighter>
  )
};

export default Code;
