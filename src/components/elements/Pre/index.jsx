// Pre
import React from 'react';
import { PrismCode } from 'react-prism'
import classNames from 'classnames'

// Takes an array of strings
const Code = (props) => {
  const styles = classNames(
    {
    'language-javascript': props.language === 'js',
    'language-css': props.language === 'css',
    'language-html': props.language === 'html',
    'line-numbers': true,
    }
  )
  let code = props.code
  let newCode = code.join('\n')
  return (
    <pre className={styles}>
      <code>
        {`${newCode}`}
      </code>
    </pre>
  )
};

export default Code;
