// Code
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
  return (
    <PrismCode className={styles}>
      {`${props.code}`}
    </PrismCode>
  )
};

export default Code;
