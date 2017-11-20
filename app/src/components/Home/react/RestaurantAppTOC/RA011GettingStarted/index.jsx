// MenuAppHeader
import React from 'react'
import PropTypes from 'prop-types'
import Section from 'elements/Section'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import OL from 'elements/OL'
import Pre from 'elements/Pre'
import Button from 'elements/Button'

const RA011GettingStarted = () => {
  const liStyle = {
    padding: '30px 0 20px 0'
  }
  return (
    <div id='RA011GettingStarted'>
      <Section level={2}>
        <P>Follow these instructions to get started.</P>
        <OL>
          <LI style={liStyle}>Sign-up for our <A href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjY5ODI5OTQzMDcyLWU5ZGI1MDMxNGMzYjk1NzBiMTZjOGQ5OWE4Zjg5MTU0NzgyNWE3N2RjMGJmODcxMzkyZGMwMTNmYjFhZDllZDY'>Slack channel</A>. We will be posting tips, helpful code and answering questions there.</LI>
          <a href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjY5ODI5OTQzMDcyLWU5ZGI1MDMxNGMzYjk1NzBiMTZjOGQ5OWE4Zjg5MTU0NzgyNWE3N2RjMGJmODcxMzkyZGMwMTNmYjFhZDllZDY'>
            <Button green><i className="fa fa-slack fa-2x" aria-hidden="true"></i>Join the Conversation on Slack</Button>
          </a>
          <LI style={liStyle}>Then use this command to clone the starter project from GitHub:</LI>
          <Pre code={[
            "$ git clone https://github.com/tvc-school/react-challenge-start.git wholesome-foods"
          ]} />
          <LI style={liStyle}>In terminal, navigate to the /wholesome-foods direcory and issue the below commands below one at a time:</LI>
          <Pre code={[
            "$ yarn install",
            "$ yarn start"
          ]} />
          <P>Alternatively, you can use npm:</P>
          <Pre code={[
            "$ npm install",
            "$ npm start"
          ]} />
          <LI style={liStyle}>Open the project in your favorite editor.</LI>
        </OL>
      </Section>

    </div>
  )
};
export default RA011GettingStarted;
