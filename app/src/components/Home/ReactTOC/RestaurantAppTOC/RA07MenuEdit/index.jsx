// Gallery
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
import A from 'elements/A'
import InlineTag from 'elements/InlineTag'
import Hint from 'elements/Hint'
import iMenu from './img/menu.png'

const RA07MenuEdit = (props) => {
  return (
    <div>
      <PageTitle title='Making the Menu' back={props.match} />
      <Section title='Introduction' level={1}>
        <P>In this section you will create the restaurant's Menu. For now it will read only. Editing is part of a later challenge. Here is a picture of the Menu:</P>
        <Img src={iMenu} medium alt='menu read only' />
      </Section>
      <Section title='Requirements' level={1}>
        The Menu must meet the these requirements:
        <UL>
          <LI>Will have a element <InlineTag angle>h2</InlineTag> element with the text 'Our Menu'</LI>
          <LI>Will display all menu items from /src/menu-data.js</LI>
          <LI>Each menu item will have a title, the description and price.</LI>
          <LI>Each menu item will be on its own row.</LI>
          <LI>Create two components Menu &amp; MenuItem</LI>
        </UL>
      </Section>
      <Section title='Tips' level={1}>
        <Hint>
          <p>When you import menu-data.js it will be an array.</p>
        </Hint>
        <Hint>
          <p>Use <A href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'>Arrray.Map()</A> to loop through the data and render the individual menu items.</p>
        </Hint>
        <Hint>
          <p>Create a MenuItem component to render an individual menu item.</p>
        </Hint>
      </Section>

      <Section title='Structure & Styling' level={1}>
        <P>The button below reveals part of the answer. Don't click it until you have met the requiremets outlined above.</P>
        <Hint title='JSX for Menu'>
          <Pre
            code={[
              "<div className='menu'>",
              "  <h2>Our Menu</h2>",
              "  {renderItems}",
              "</div>",
            ]}
          />
        </Hint>
        <Hint title='CSS for Menu'>
          <Pre
            code={[
              ".menu h2 {",
              "  text-align: center;",
              "}",
            ]}
          />
        </Hint>
        <Hint title='JSX for MenuItem'>
          <Pre
            code={[
              "<div className='menu-item'>",
              "  <div className='menu-item-left'>",
              "    <div className='menu-item-title'>{title}</div>",
              "    <div className='menu-item-description'>{description}</div>",
              "  </div>",
              "  <div className='menu-item-right'>{price}</div>",
              "</div>",
            ]}
          />
        </Hint>
        <Hint title='CSS for MenuItem'>
          <Pre
            code={[
              ".menu-item {",
              "  display: flex;",
              "  justify-content: space-between;",
              "  margin: 15px 0;",
              "  max-width: 80%;",
              "  margin: auto;",
              "}",
              ".menu-item-title {",
              "  font-size: 1.2em;",
              "  font-weight: bold;",
              "  padding: 3px;",
              "}",
              "  .menu-item-description {",
              "  padding: 3px;",
              "}",
            ]}
          />
        </Hint>
      </Section>
    </div>
  )
};

export default RA07MenuEdit
