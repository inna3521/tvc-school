// Code
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

// Takes an array of strings
const Code = (props) => {
  // const codeStyles = classNames(
  //   {
  //   'language-javascript': props.js,
  //   'language-css': props.css,
  //   'language-html': props.html,
  //   [styles.grayCode]: props.gray,
  //   [styles.fontSize]: true,
  //   }
  // )
  const codeStyle = {
    display: 'inline',
  }
  return (
    <SyntaxHighlighter
      customStyle={codeStyle}
      style={docco}>
      {`${props.code}`}
    </SyntaxHighlighter>
  )
};

export default Code;
