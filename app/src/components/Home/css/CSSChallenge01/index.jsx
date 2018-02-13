// _lesson
import React from 'react'
import iSearchForTvcSchool from './img/iSearchForTvcSchool.png'
import iClickTvcSchool from './img/iClickTvcSchool.png'
import iClickUsers from './img/iClickUsers.png'
import iClickCSSChallenge from './img/iClickCSSChallenge.png'
import iFork from './img/iFork.png'
import iForking from './img/iForking.png'
import iClickRepositories from './img/iClickRepositories.png'
import iCloneToEdit from './img/iCloneToEdit.png'
import iProjectNameEtc from './img/iProjectNameEtc.png'
import Section from 'elements/Section'
import Img from 'elements/Img'
import OL from 'elements/OL'
import UL from 'elements/UL'
import LT from 'elements/LT'
import GT from 'elements/GT'
import Angle from 'elements/Angle'
import AMP from 'elements/Amp'
import SP from 'elements/SP'

const CSSChallenge01 = () => {
  const warnStyle =  {
    color: 'red',
    fontWeight: 'bold',
  }
  return (
    <div id='CSSChallenge01'>
      <h1 style={warnStyle}>This page wasn't updated to use the newer elements/ because it really needs to be completely rewritten. Most of its content is not showing</h1>

      <Section title='Copy the Challenge Project on GitHub'>
        <p>Follow the below instructions to create a copy of the challenge project in your GitHub repository. You will be performing a process know as <em>forking</em></p>
        <OL
          listItems={[
            'Log into <a href="https://github.com">GitHub</a>',
            ["Search for 'tvc-school'",
            <Img
              src={iSearchForTvcSchool}
              alt=''
              size='medium'
            />
            ],
            ["Click on 'Users'",
            <Img
              src={iClickUsers}
              alt=''
              size='medium'
            />],
            ["Click 'tvc-school'",
            <Img
              src={iClickTvcSchool}
              alt=''
              size='medium'
            />],
            ["Click 'css-challenge-01'",
            <Img
              src={iClickCSSChallenge}
              alt=''
              size='medium'
            />],
            ["Click 'Fork' in the upperight-hand corner.",
            <Img
              src={iFork}
              alt=''
              size='medium'
            />]
          ]}
        />

        <p>You will see an image like below and then your new project will open.</p>
        <Img
          src={iForking}
          alt=''
          size='medium'
        />
      </Section>
      <Section title='Clone the Project on Cloud9'>
        <OL
          listItems={[
            'Log into <a href="https://c9.io">Cloud9</a>',
            ["Click 'Repositories' on the left-hand side",
            <Img
              src={iClickRepositories}
              alt=''
              size='medium'
            />],
            ["Find the 'css-challenge-01' project and click 'Clone to edit'",
            <Img
              src={iCloneToEdit}
              alt=''
              size='medium'
            />],
            ["Find the 'css-challenge-01' project and click 'Clone to edit'",
            <Img
              src={iCloneToEdit}
              alt=''
              size='medium'
            />],
            ["Make the following four changes and description, set the Team as shown and then click 'Create workspace' at the bottom.",
            <Img
              src={iProjectNameEtc}
              alt=''
              size='medium'
            />]
          ]}
        />
      </Section>
      <Section title='Perform the Challenge'>
        <Section title='Answer these Questions'>
          <OL
            listItems={[
              ['Open index.html and then click Preview', <GT/>, 'Live Preview File'],
              ['For each question, type the answer in the ', <LT/>,'p',<GT/>, "element below it after the text 'Answer: '"]
            ]}
          />

        </Section>
        <Section title='Apply Styles to the Page'>
          <h4>ID Selector(s)</h4>
          <UL
            listItems={[
              "Create an id selector for the element with the id of 'about'",
              'Set the font size to 2.0em and center the text.'
            ]}

          />
          <h4>Element Selector(s)</h4>
          <UL
            listItems={[
              'Create an element selector that makes all paragraphs have green text',
              ['Create an element selector that centers all ', <Angle>h1</Angle>, <SP/>, <AMP/>, <SP/>, <Angle>h2</Angle>, ' elements']
            ]}
          />
          <h4>Class Selector</h4>
          <UL
            listItems={[
              'Create a class selector that makes the font italic and apply it to the second and third paragraphs'
            ]}
          />
        </Section>
      </Section>
    </div>
      )
      };

export default CSSChallenge01;
