import React from 'react'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import A from 'elements/A'
import InlineTag from 'elements/InlineTag'
import Hint from 'elements/Hint'
import iMenu from './img/menu.png'
import CodeHeader from 'elements/CodeHeader'

const RA05Menu = () => {
  return (
    <div id='RA05Menu'>
      <Section title='Introduction' level={1}>
        <P>In this section you will create the restaurant's Menu. For now it will be read only. Editing is part of a later challenge. Here is a picture of the Menu:</P>
        <Img src={iMenu} medium alt='menu read only' />
      </Section>
      <Section title='Requirements' level={1}>
        The Menu must meet these requirements:
        <UL>
          <LI>Will have an <InlineTag angle>h2</InlineTag> element with the text 'Our Menu'</LI>
          <LI>Will display all menu items from /src/menu-data.js</LI>
          <LI>Each menu item will have a title, the description and price</LI>
          <LI>Each menu item will be on its own row</LI>
          <LI>Create two components, Menu &amp; MenuItem</LI>
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
        <Hint>
          <P>Considering which components will need menuItems available will tell you which component should import it.</P>
        </Hint>
      </Section>

      <Section title='Structure & Styling' level={1}>
        <CodeHeader />
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
      </Section>
    </div>
  )
};
export default RA05Menu;
