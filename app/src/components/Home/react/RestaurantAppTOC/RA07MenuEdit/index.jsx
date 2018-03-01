// Gallery
import React from 'react'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import Hint from 'elements/Hint'
import iMenuEdit from './img/menu-edit.png'
import CodeHeader from 'elements/CodeHeader'

const RA07MenuEdit = () => {
  return (
    <div id='RA07MenuEdit'>
      <Section title='Introduction' l1>
        <P>In this section you will create a component named MenuEdit which will allow the user to edit the menu. Changes to the menu will be stored in state. Below is the UI for this component.</P>
        <Img src={iMenuEdit} medium alt='MenuEdit component' />
      </Section>
      <Section title='Requirements' l1>
        MenuEdit must meet these requirements:
        <UL>
          <LI>Enables user to edit the title, description and price</LI>
          <LI>Modifies menu data which is stored in state</LI>
        </UL>
      </Section>
      <Section title='Tips' l1>
        <Hint>
          <P>Give some thought to where the menu items need to live in state. Thinking of the application's components as a tree sturcture, consider each component that needs the menu items and place the menu items in state inside a component that is the parent to all of them.</P>
        </Hint>
        <Hint>
          <P>For the sake of saving time in the context of this learning exercise, you could leave the import of menu items in the Menu component. However, this would be bad form for a real application. With that in mind, once you have MenuEdit working, remove the import of menu items from the Menu component.</P>
        </Hint>
      </Section>

      <Section title='Structure & Styling' l1>
        <CodeHeader />
        <Hint title='JSX for MenuEdit'>
          <Pre
            code={[
              "<div className='menu-edit'>",
              "  <h2>Our Menu</h2>",
              "    {renderItems}",
              "  <button className='button menu-edit-done'",
              "    onClick={props.handleEditMenuClick}",
              "  >Done</button>",
              "</div>",
            ]}
          />
        </Hint>
        <Hint title='JSX for MenuItem'>
          <Pre
            code={[
              "<div className='menu-edit-item'>",
              "  <div className='menu-edit-item-left'>",
              "    <input className='title-input' type='text' value={title} onChange={(event) => handleChange('title', event.target.value)}  /><br/>",
              "    <input className='description-input' type='text' value={description} onChange={(event) => handleChange('description', event.target.value)}  />",
              "  </div>",
              "  <div className='menu-edit-item-right'>",
              "    <input className='price-input' type='text' value={price} onChange={(event) => handleChange('price', event.target.value)}  />",
              "  </div>",
              "</div>",
            ]}
          />
        </Hint>

      </Section>
    </div>
  )
};
export default RA07MenuEdit
