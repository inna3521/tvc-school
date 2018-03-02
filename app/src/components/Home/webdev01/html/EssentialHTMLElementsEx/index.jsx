import React from 'react'
import P from 'elements/P'
import Img from 'elements/Img'
import Callout from 'elements/Callout'
import iMockPage from './media/essential-html-mock-page.png'
import StartingPoint from './StartingPoint'
import AddTitle from './AddTitle'
import AddHeader from './AddHeader'
import CreateLinks from './CreateLinks'
import Lists from './Lists'
import FigureAndImage from './FigureAndImage'
import AddFooter from './AddFooter'
import ClosingThoughts from './ClosingThoughts'

const EssentialHTMLElementsEx = () => {
  return (
    <div>
      <P>In this lesson you will practice using the list of elements we went over in the last lesson. Follow the directions carefully. If something doesn't work, first look for typing errors and then ask for help.</P>
      <P>You will be creating a web page as shown below. To create the page you will use each of the elements we went over in the last lesson. Refer back to the previous lesson as needed.</P>
      <Callout info>
        <p>If you have never used HTML before you may find this exercise difficult. Don't worry, it gets easier. Ask for help when you need it.</p>
      </Callout>

      <Img src={iMockPage} alt='page mockup' />
      <StartingPoint />
      <AddTitle />
      <AddHeader />
      <CreateLinks />
      <Lists />
      <FigureAndImage />
      <AddFooter />
      <ClosingThoughts />
    </div>
  )
}
export default EssentialHTMLElementsEx
