// L12ControlFlow
import React from 'react'
import './style.css'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import P from 'elements/P'

const ControlFlow = ({ match }) => {
  return (
    <div id="ControlFlow">
      <PageTitle title='Control Flow' match={match} />
      <Section title='Conditional Flow Control' subTitle='" if " statement' >
        <P>What is an if statement?</P>
      </Section>
    </div>
  )
};

export default ControlFlow;
