// Pre
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

/*
    language: css, html, js, jsx
 */

// Takes an array of strings
// Currently you can only send one of linesAdded, linesRemoved or linesBold
const Pre = ({ linesAdded, linesRemoved, linesBold, code, caption, language  }) => {

  // const preStyles = classNames(
  //   {
  //   'language-javascript': props.js,
  //   'language-css': props.css,
  //   'language-html': props.html,
  //   // 'line-numbers': props.lineNumbers
  //   'line-numbers': true,
  //   }
  // )

  let removed = !linesRemoved ? [] : linesRemoved
  let added = !linesAdded ? [] : linesAdded
  let newCode = code.join('\n')

  const codeCaption = caption
    ? <p>{caption}</p>
    : null
  return (
    <div>
      {codeCaption}
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={docco}
        wrapLines={true}
        lineStyle={lineNumber => {
          let style = { display: 'block', textAlign: 'left' };
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
    </div>
  )
};

export default Pre;
