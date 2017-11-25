// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import OL from 'elements/OL'
import LI from 'elements/LI'
import P from 'elements/P'
import Hint from 'elements/Hint'
import iNav from './img/nav.png'
import CodeHeader from 'elements/CodeHeader'

const RA03Nav = () => {
  return (
    <div id='RA03Nav'>
      <Section title='Introduction' level={1}>
        <P>In this section you will add a component named Nav to Header. Nav will look as shown below.</P>
        <Img src={iNav} medium alt='header step 01' />
      </Section>
      <Section title='Requirements' level={1}>
        <P>Nav must meet these requirements:</P>
        <OL>
          <LI>The component will be named Nav</LI>
          <LI>Nav will have 4 nav items:</LI>
          <OL>
            <LI>'Menu' with href=#menu</LI>
            <LI>'Gallery' with href=#gallery</LI>
            <LI>'Location' with href=#location</LI>
            <LI>'Our Story' with href=#our-story</LI>
          </OL>
          <LI>Nav will be placed in the header below the tag line</LI>
        </OL>
      </Section>
      <Section title='Structure & Styling' level={1}>
        <CodeHeader />
        <Hint title='JSX for Nav'>
          <Pre
            code={[
              "<ul className='nav-ul'>",
              "  <li><a href='#menu'><button className='button'>Menu</button></a></li>",
              "  <li><a href='#gallery'><button className='button'>Gallery</button></a></li>",
              "  <li><a href='#location'><button className='button'>Location</button></a></li>",
              "  <li><a href='#our-story'><button className='button'>Our Story</button></a></li>",
              "</ul>",
            ]}
          />
        </Hint>
        <Hint title='New JSX for Header'>
          <Pre
            linesAdded={[10]}
            code={[
              "<div className='header'>",
              "  <div className='header-left'>",
              "    <img className='img-responsive' src={iVegies} alt='fresh vegies'/>",
              "  </div>",
              "  <div className='header-right'>",
              "    <div className='header-titles'>",
              "      <h1>Wholesome Foods</h1>",
              "      <h2>Delicious meals made with locally sourced organic ingredients.</h2>",
              "    </div>",
              "    <Nav />",
              "  </div>",
              "</div>",
            ]}
          />
        </Hint>
      </Section>
    </div>
  )
};
export default RA03Nav;
