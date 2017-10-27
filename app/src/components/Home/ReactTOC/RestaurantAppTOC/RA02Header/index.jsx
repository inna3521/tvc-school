// MenuAppHeader
import React from 'react'
import './style.css'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import OL from 'elements/OL'
import UL from 'elements/UL'
import P from 'elements/P'

const RA02Header = (props) => {
  return (
    <div>
      <PageTitle title='Making the Header' back={props.match} />
      <Section
        title='First Section'
      >
        <P>Some text here</P>
      </Section>
    </div>
  )
};

export default RA02Header;
