import React from 'react'
import P from 'elements/P'
import Pre from 'elements/Pre'
import OL from 'elements/OL'
import LI from 'elements/LI'
import Section from 'elements/Section'

const AddHeader = () => {
  return (

    <Section title='Add a Header'>
      <OL>
        <LI>Add a header element.</LI>
        <LI>Inside the header element add a heading 1 element with the text 'Practicing HTML'</LI>
      </OL>
      <P>When you first look at your index.html file in a browser the title will be the file name. It may look different depending on which browser you are using.</P>

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
