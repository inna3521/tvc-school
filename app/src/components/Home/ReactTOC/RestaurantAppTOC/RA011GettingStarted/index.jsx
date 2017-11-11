// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import PageTitle from 'elements/PageTitle'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import OL from 'elements/OL'
import Pre from 'elements/Pre'
import Callout from 'elements/Callout'
import ProjectStructure from 'elements/ProjectStructure'
import fInitComponentModel from './init-component-model'

const RA01Introduction = (props) => {
  const redText = {
    color: 'red',
  }
  return (
    <div>
      <PageTitle title='Getting Started' back={props.match}/>
      <Section level={2}>
        <P>Follow these instructions to get started.</P>
        <OL>
          <LI>Sign-up for our <A href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjY5ODI5OTQzMDcyLWU5ZGI1MDMxNGMzYjk1NzBiMTZjOGQ5OWE4Zjg5MTU0NzgyNWE3N2RjMGJmODcxMzkyZGMwMTNmYjFhZDllZDY'>Slack channel</A>. We will be posting tips, helpful code and answering questions there.</LI>
          <LI>Then</LI>
          <Pre code={[
            "$ git clone https://github.com/tvc-school/react-challenge-start.git wholesome-foods"
          ]} />
          <LI>Open the project in your favorite editor.</LI>
        </OL>
      </Section>

    </div>
  )
};

export default RA01Introduction;
