// SiteTitle
import React from 'react';
import { PrismCode } from 'react-prism'
import './style.css';

const Code = (props) => {
  let code = props.code
  console.log('code', props.code)
  let newCode = code.join('\n')
  console.log('newCode', newCode)
  return (
    <PrismCode component='pre' className='language-javascript'>
      {`${newCode}`}
    </PrismCode>
  )
};

export default Code;
