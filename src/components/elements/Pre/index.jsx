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
    }
  )
  let code = props.code
  let newCode = code.join('\n')
  return (
    <PrismCode component='pre' className={styles}>
      {`${newCode}`}
    </PrismCode>
  )
};

export default Code;
