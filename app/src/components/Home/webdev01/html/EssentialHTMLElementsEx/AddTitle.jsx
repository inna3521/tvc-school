import React from 'react'
import P from 'elements/P'
import Img from 'elements/Img'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'
import iTitleChrome from './media/title-chrome.png'
import iTitleFirefox from './media/title-firefox.png'

const imgDivStyle = {
  display: 'flex',
  justifyContent: 'space-around',
}
const AddTitle = () => {
  return (
    <Section title='Add a Browser Tab Title'>
      <div>
        <OL>
          <LI>Add a title as shown in the green highlighted line.</LI>
        </OL>
        <P>When you first look at your index.html file in a browser the title will be the file name. It may look different depending on which browser you are using.</P>
      </div>
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
