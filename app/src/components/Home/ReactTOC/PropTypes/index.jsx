import React from 'react'
import './style.css'
import PageTitle from 'elements/PageTitle'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import P from 'elements/P'
import A from 'elements/A'
import LI from 'elements/LI'

const PropTypes = (props) => {
  return (
    <div>
      <PageTitle title='PropTypes' back={props.match}/>
      <Section title='Introduction' level={1}>
        <P></P>

      </Section>
      <Section title='Title' level={1}>
        <P></P>

        <Pre
          code={[
              '$ cd wholesome-foods',
              '$ yarn start',
          ]}
        />
      </Section>
    </div>
  )
};

export default PropTypes;
