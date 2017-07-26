// _lesson
import React from 'react'
import { Button } from 'react-bootstrap'
import Pre from './../../elements/Pre'
import Header from '../../elements/Header'

const L06JSWhatIsIt = (props) => {
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <Header
        title='JavaScript, What is it?'
        subTitle='What can you do with it?'
      />

      <p>To understand what JavaScript is what what it is used for you need to know three key concepts, <b>Static</b>, <b>dynamic</b> & <b>interactive</b> content. The exact definition of each type of content differs depending on who you are speaking with. Below is one useful way of defining these three key concepts.</p>
      <p><span className='keyword'>Content</span> is anything that appears on the page such as pictures and text.</p>
      <p><span className='keyword'>Static</span> content stays the same and does not change even when you click on it.</p>
      <p><span className='keyword'>Dynamic</span> content is content that changes without your having to do anything. A good example is a slide-show header that displays a different picture every second or so.</p>
      <p><span className='keyword'>Interactive</span> content is content that responds to the user. The simplest example is when something happens in response to your clicking on a button. The web page 'responds' to you and that is called 'interactive'. One of the most interactive web sites is <a href='https://www.google.com/maps'>Google maps</a>.</p>


      <h2>So, what is JavaScript?</h2>
      <p>JavaScript is a programming language that can be used to create any type of software application. However, it is especially well suited to creating dynamic and interactive content on websites. According to <a href="https://w3techs.com/technologies/details/cp-javascript/all/all">W<sup>3</sup>Techs</a>, JavaScript is used on 94% of all websites</p>

      <p>JavaScript looks like this</p>
      <Pre
        code={[
          "let names = ['Jack', 'Jane', 'Alice'] ",
          "for (let i=0; i<3; i++) {",
          "  console.log(names[i])",
          "}"
        ]}
        language='js'
      />

      Variables
      Arrays
      Functions
      Events

      <h2>General Coding tidbits</h2>
      <ul>
        <li>Code often runs from top to bottom</li>
        <li>Server-side vs client-side</li>
      </ul>
      A developers tool chest: events, operators, loops, etc.
      <h2>Candidate code</h2>
      1. list click changes css class
      2. button click pops a messge or changes text on the screen
      3. take text from edit box and populate list
      4. api call (just dicsuss or demo?)
      5. random picture generator (rand function + array of pictures)
      6. canvas drawing animation (move car across screen)
      <h2>Sub topics</h2>
      <ul>
        <li>functions</li>
        <li>variables</li>
        <li>arrays</li>
        <li>operators</li>
        <li>conditionals ? </li>
        <li>events</li>
        <li>loops</li>

      </ul>

      <h2>Project setup</h2>
      <ol>
        <li>Add index.js file</li>
        <li>Add script tag</li>
        <li>Code alert message</li>
      </ol>

    </div>
  )
};

export default L06JSWhatIsIt;
