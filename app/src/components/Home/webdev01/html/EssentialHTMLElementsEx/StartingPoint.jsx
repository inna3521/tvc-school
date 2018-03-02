import React from 'react'
import P from 'elements/P'
import Img from 'elements/Img'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Link from 'elements/Link'

const StartingPoint = () => {
  return (
    <Section title='Starting Point'>
      <P>Create a new project by following the <Link to='html/first-project'>New Project Proceedure</Link></P>
      <P>Once you have created the project open it in a browser.</P>
      <P>Your index.html page should look like this:</P>
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
