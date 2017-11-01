// Gallery
import React from 'react'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import Hint from 'elements/Hint'
import iMenuEdit from './img/menu-edit.png'

const RA07MenuEdit = (props) => {
  return (
    <div>
      <PageTitle title='Making the Menu' back={props.match} />
      <Section title='Introduction' level={1}>
        <P>In this section you will create a component named MenuEdith which will allow the user to edit the menu. Below is the UI for this component.</P>
        <Img src={iMenuEdit} medium alt='menu read only' />
      </Section>
      <Section title='Requirements' level={1}>
        The Menu must meet the these requirements:
        <UL>
          <LI>The user will be able to change the title, description and price.</LI>
          <LI>Changes to the data will be stored in state</LI>
        </UL>
      </Section>
      <Section title='Tips' level={1}>
        <Hint>
          <p>Use the onChange() event</p>
        </Hint>
      </Section>

      <Section title='Structure & Styling' level={1}>
        <P>The button below reveals part of the answer. Don't click it until you have met the requiremets outlined above.</P>
        <Hint title='JSX for MenuEdit'>
          <Pre
            code={[

            ]}
          />
        </Hint>
        <Hint title='CSS for MenuEdit'>
          <Pre
            code={[

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
