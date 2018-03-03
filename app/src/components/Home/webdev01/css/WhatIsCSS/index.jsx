import React from 'react'
import Intro from './Intro'
import NameValuePairs from './NameValuePairs'
import QuizReview from './QuizReview'
import Selectors from './Selectors'
import Summary from './Summary'
import Syntax from './Syntax'


const WhatIsCSS = () => {
  return (
    <div id='WhatIsCSS'>
      <Intro />
      <NameValuePairs />
      <Syntax />
      <Selectors />
      <Summary />
      <QuizReview />
    </div>
    )
  };
export default WhatIsCSS;
