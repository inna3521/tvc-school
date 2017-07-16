// _lesson
import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap'
import Img from './../../elements/Img'
import Code from './../../elements/Code'
import Callout from './../../elements/Callout'
// import { lesson } from './data';
// import { space } from '../../../lib/utils'
import iGithubSelectProject from './img/iGithubSelectProject.png'
import iSearchForTvcSchool from './img/iSearchForTvcSchool.png'
import iClickTvcSchool from './img/iClickTvcSchool.png'
import iClickUsers from './img/iClickUsers.png'
import iClickCSSChallenge from './img/iClickCSSChallenge.png'
import iFork from './img/iFork.png'
import iForking from './img/iForking.png'
import iClickRepositories from './img/iClickRepositories.png'
import iCloneToEdit from './img/iCloneToEdit.png'
import iProjectNameEtc from './img/iProjectNameEtc.png'

const L05CSSChallenge01 = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <header>
        <p className='lesson-title'>How Start a New Project</p>
      </header>
      <h2>Copy the Challenge Project on GitHub</h2>
      <p>Follow the below instructions to create a copy of the challenge project in your GitHub repository. You will be performing a process know as <em>forking</em></p>
      <ol>
        <li>Log into <a href='https://github.com'>GitHub</a></li>
        <li>Search for 'tvc-school'</li>
        <Img
          src={iSearchForTvcSchool}
          alt=''
          size='medium'
        />
        <li>Click on 'Users'</li>
        <Img
          src={iClickUsers}
          alt=''
          size='medium'
        />
        <li>Click 'tvc-school'</li>
        <Img
          src={iClickTvcSchool}
          alt=''
          size='medium'
        />
        <li>Click 'css-challenge-01'</li>
        <Img
          src={iClickCSSChallenge}
          alt=''
          size='medium'
        />
        <li>Click 'Fork' in the upperight-hand corner.</li>
        <Img
          src={iFork}
          alt=''
          size='medium'
        />
        <p>You will see an image like below and then your new project will open.</p>
        <Img
          src={iForking}
          alt=''
          size='medium'
        />
      </ol>
      <h2>Clone the Project on Cloud9</h2>
      <ol>
        <li>Log into <a href="https://c9.io">Cloud9</a></li>
        <li>Click 'Repositories' on the left-hand side</li>
        <Img
          src={iClickRepositories}
          alt=''
          size='medium'
        />
        <li>Find the 'css-challenge-01' project and click 'Clone to edit'</li>
        <Img
          src={iCloneToEdit}
          alt=''
          size='medium'
        />
        <li>Make the following four changes
          and description, set the Team as shown and then click 'Create workspace' at the bottom.
          <ol>
            <li>Give your project a name</li>
            <li>Give you project a description</li>
            <li>Set the 'Team' as shown</li>
            <li>Click 'Create workspace'</li>
          </ol>
        </li>
        <Img
          src={iProjectNameEtc}
          alt=''
          size='medium'
        />
        <li>next</li>
      </ol>
      <h2>Perform the Challenge</h2>
      <h3>Answer the Questions</h3>
      <ol>
        <li>Open index.html and then click Preview > Live Preview File</li>
        <li>For each question, type the answer in the &lt;p&gt; element below it after the text 'Answer: '</li>
      </ol>
      <h3>Apply Styles to the Page</h3>
      <h4>ID Selector(s)</h4>
      <ul>
        <li>create an id selector for the element with the id of 'about. Set the font size to 2.0em and center the text.</li>
      </ul>
      <h4>Element Selector(s)</h4>
      <ul>
        <li>Create an element selector that makes all paragraphs have green text.</li>
        <li>Create an element selector that centers all &lt;h1&gt; &apm; &lt;h2&gt; elements.</li>
      </ul>
      <h4>Class Selector</h4>
      <ul>
        <li>Create a class selector that makes the font italic and apply it to the second and third paragraphs</li>
      </ul>

    </div>
  )
};

export default L05CSSChallenge01;
