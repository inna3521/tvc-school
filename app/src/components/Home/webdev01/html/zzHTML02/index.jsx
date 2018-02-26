// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import LI from 'elements/LI'
import LessonStatus from 'elements/LessonStatus'
import Angle from 'elements/Angle'

const HTML02 = () => {

  return (
    <div id='AboutReact'>
      <LessonStatus outline="outline">
        Outline
      </LessonStatus>
      <Section title='More HTML Elements' level={1}>
        <P>In this lesson</P>
        <table>
          <tr>
            <th>Element</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><LI><Angle>h1</Angle> ... <Angle>h6</Angle></LI></td>
            <td>Headings from major to minor</td>
          </tr>
          <tr>
            <td><Angle>a</Angle></td>
            <td>Stands for 'anchor' but better known as a link.</td>
          </tr>
          <tr>
            <td><Angle>p</Angle></td>
            <td>Paragraph</td>
          </tr>
          <tr>
            <td><Angle>img</Angle></td>
            <td>Put an image on the page</td>
          </tr>
          <tr>
            <td><Angle>video</Angle></td>
            <td>Put a video on the page</td>
          </tr>
          <tr>
            <td><Angle>iframe</Angle></td>
            <td>Put a page in a page. Don't worry if you don't get this, it is easy once you see it.</td>
          </tr>
          <tr>
            <td><Angle>header</Angle></td>
            <td></td>
          </tr>
          <tr>
            <td><Angle>section</Angle></td>
            <td></td>
          </tr>
          <tr>
            <td><Angle>footer</Angle></td>
            <td></td>
          </tr>
        </table>

      </Section>
    </div>
  )
};

export default HTML02
