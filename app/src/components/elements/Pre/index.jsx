// Pre
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
// import classNames from 'classnames'
// import styles from './style.css'

// Takes an array of strings
const Pre = (props) => {

  // const preStyles = classNames(
  //   {
  //   'language-javascript': props.js,
  //   'language-css': props.css,
  //   'language-html': props.html,
  //   // 'line-numbers': props.lineNumbers
  //   'line-numbers': true,
  //   }
  // )
  let { linesAdded, linesRemoved } = props
  let removed = !linesRemoved ? [] : linesRemoved
  let added = !linesAdded ? [] : linesAdded

  let code = props.code
  let newCode = code.join('\n')

  return (
      <SyntaxHighlighter
        showLineNumbers
        style={docco}
        wrapLines={true}
        lineStyle={lineNumber => {
          let style = { display: 'block' };
          if (added.includes(lineNumber)) {
            style.backgroundColor = '#dbffdb';
          }
          else if (removed.includes(lineNumber)) {
            style.backgroundColor = '#ffecec';
          }
          return style;
        }}
      >
        {`${newCode}`}
      </SyntaxHighlighter>
  )
};

export default Pre;
