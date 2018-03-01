import React from 'react'
import P from 'elements/P'
import Img from 'elements/Img'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import iNoTitleChrome from './media/no-title-chrome.png'
import iNoTitleFirefox from './media/no-title-firefox.png'

const imgDivStyle = {
  display: 'flex',
  justifyContent: 'space-around',
}

const StartingPoint = () => {
  return (
    <Section title='Starting Point'>
      <P>When you first look at your index.html file in a browser the title will be the file name. It may look different depending on which browser you are using.</P>
      <div style={imgDivStyle}>
        <Img src={iNoTitleFirefox} title='Firefox' medium alt='no title in browser tab' />
        <Img src={iNoTitleChrome} title='Chrome' medium alt='no title in browser tab' />
      </div>
      <Pre code={[
        '<!DOCTYPE html>',
        '<html>',
        '  <head>',
        '    <meta charset="utf-8">',
        '    <title></title>',
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
export default StartingPoint
