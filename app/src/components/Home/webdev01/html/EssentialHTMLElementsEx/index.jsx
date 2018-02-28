import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import iMockPage from './media/essential-html-mock-page.png'
import Img from 'elements/Img'

const EssentialHTMLElementsEx = () => {
  return (
    <div>
      <P>In this lesson you will practice using the list of elements we went over in the last lesson. Follow the directions carefully. If something doesn't work, look for typos.</P>
      <Img src={iMockPage} alt='page mockup' />
    </div>
  )
}
