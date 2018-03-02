import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import OL from 'elements/OL'
import LI from 'elements/LI'
import Section from 'elements/Section'
import Img from 'elements/Img'
import iHeader from './media/header.png'

const AddHeader = () => {
  return (

    <Section title='Add a Header'>
      <P>The header of a web page contains introductionary information. It tells the user what the site is about and usually includes navigation to help the user find other parts of the page or site. Let's look at the header for the San Ramon school district.</P>
      <Img src={iHeader} alt='san ramon school district header' />
      <OL>
        <LI>Add a header element.</LI>
        <LI>Inside the header element add a heading 1 element with the text 'Practicing HTML'</LI>
      </OL>
      <Pre
        linesAdded={[8, 9, 10]}
        code={[
        '<!DOCTYPE html>',
        '<html>',
        '  <head>',
        '    <meta charset="utf-8">',
        '    <title>Learning HTML</title>',
        '  </head>',
        '  <body>',
        '    <header>',
        '      <h1>Practicing HTML</h1>',
        '    </header>',
        '  </body>',
        '</html>',
        ]}
      />
    </Section>
  )
}
export default AddHeader
