import React from 'react'
import P from 'elements/P'
import Img from 'elements/Img'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'
import Html from 'elements/Html'
import iNoTitleChrome from './media/no-title-chrome.png'
import iNoTitleFirefox from './media/no-title-firefox.png'
import iTitleChrome from './media/title-chrome.png'
import iTitleFirefox from './media/title-firefox.png'

const imgDivStyle = {
  display: 'flex',
  justifyContent: 'space-around',
}
const AddTitle = () => {
  return (
    <Section title='Add a Browser Tab Title'>
      <P>The text you add in the <Html>title</Html> element will appear in the browser tab. Because we have not set the <Html>title</Html> yet the file name will appear in the browser tab as shown below. (It may look different depending on which browser you are using.)</P>
      <div style={imgDivStyle}>
        <Img src={iNoTitleFirefox} title='Firefox' medium alt='no title in browser tab' />
        <Img src={iNoTitleChrome} title='Chrome' medium alt='no title in browser tab' />
      </div>
      <OL>
        <LI>Add a title as shown in the green highlighted line.</LI>
        <LI>Refresh the page and the title will appear in the browser tab.</LI>
      </OL>
      <div style={imgDivStyle}>
        <Img src={iTitleFirefox} title='Firefox' medium alt='no title in browser tab' />
        <Img src={iTitleChrome} title='Chrome' medium alt='no title in browser tab' />
      </div>

      <Pre
        linesAdded={[5]}
        code={[
        '<!DOCTYPE html>',
        '<html>',
        '  <head>',
        '    <meta charset="utf-8">',
        '    <title>Learning HTML</title>',
        '  </head>',
        '  <body>',
        '',
        '  </body>',
        '</html>',
        ]}
      />
    </Section>
  )
}
export default AddTitle
