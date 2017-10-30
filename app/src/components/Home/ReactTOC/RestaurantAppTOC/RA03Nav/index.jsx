// MenuAppHeader
import React from 'react'
import './style.css'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import OL from 'elements/OL'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import InlineTag from 'elements/InlineTag'
import Hint from 'elements/Hint'
import iNav from './img/nav.png'

const RA02Header = (props) => {
  return (
    <div>
      <PageTitle title='Making the Nav Menu' back={props.match} />
      <Section title='Introduction' level={1}>
        <P>In this section you will add a navigation menu to Header.</P>
        <Img src={iNav} medium alt='header step 01' />
      </Section>
      <Section title='Requirements' level={1}>
        <P>The navigation menu must meet these requirements:</P>
        <OL>
          <LI>The component will be named Nav</LI>
          <LI>Nav with have 4 nav items</LI>
          <OL>
            <LI>'Menu' with href=#menu</LI>
            <LI>"Gallery" with href=#gallery</LI>
            <LI>'Location' with href=#location</LI>
            <LI>'Our Story' with href=#our-story</LI>
          </OL>
          <LI>Nav will be placed in the header below the tag line</LI>
        </OL>
      </Section>
      <Section title='Structure & Styling' level={1}>
        <P>The button below reveals part of the answer. Don't click it until you have met the requiremets outlined above.</P>
        <Hint title='JSX for Nav'>
          <Pre
            code={[
              "<ul className='nav-ul'>",
              "  <li><button href='#menu'>Menu</button></li>",
              "  <li><button href='#gallery'>Gallery</button></li>",
              "  <li><button href='#location'>Location</button></li>",
              "  <li><button href='#our-story'>Our Story</button></li>",
              "</ul>",
            ]}
          />
        </Hint>
        <Hint title='CSS for Nav'>
          <Pre
            code={[
              ".nav-ul {",
              "  display: flex;",
              "  flex-flow: row wrap;",
              "  font-size: 22px;",
              "  justify-content: space-around;",
              "  list-style-type: none;",
              "}",
              ".nav-ul li {",
              "  margin: 5px 5px;",
              "}",
              ".nav-ul li:hover {",
              "  text-decoration: underline;",
              "}",
              "  button {",
              "  border-color: transparent;",
              "  border-image: none;",
              "  border-style: none;",
              "  border-width: 0;",
              "}",
              "  button:focus {",
              "  outline: 0;",
              "}",
              ".button {",
              "  background-color: #5cb85c;",
              "  border-radius: 4px;",
              "  color: #fff;",
              "  font-size: 0.7em;",
              "  letter-spacing: 1px;",
              "  margin: 3px;",
              "  padding: 4px 10px;",
              "  text-align: center;",
              "  text-decoration: none;",
              "}",
              ".button:hover {",
              "  background-color: #5cb85c;",
              "  background-image: none;",
              "  border: 1px solid transparent;",
              "  border-color: #4cae4c;",
              "  box-shadow: 0 0 0 8px rgba(34, 195, 101, 0.1);",
              "}",
            ]}
          />
        </Hint>
      </Section>
    </div>
  )
};

export default RA02Header;
