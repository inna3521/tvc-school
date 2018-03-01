import React from 'react'
import P from 'elements/P'
import Img from 'elements/Img'
import iMockPage from './media/essential-html-mock-page.png'
import StartingPoint from './StartingPoint'
import AddTitle from './AddTitle'
import AddHeader from './AddHeader'
import CreateLinks from './CreateLinks'
import Lists from './Lists'
import FigureAndImage from './FigureAndImage'
import AddFooter from './AddFooter'

const EssentialHTMLElementsEx = () => {
  return (
    <div>
      <P>In this lesson you will practice using the list of elements we went over in the last lesson. Follow the directions carefully. If something doesn't work, look for typos.</P>
      <Img src={iMockPage} alt='page mockup' />
      <StartingPoint />
      <AddTitle />
      <AddHeader />
      <CreateLinks />
      <Lists />
      <FigureAndImage />
      <AddFooter />
    </div>
  )
}
export default EssentialHTMLElementsEx
