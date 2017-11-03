// MenuAppHeader
import React from 'react'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import InlineTag from 'elements/InlineTag'
import Hint from 'elements/Hint'
import iHeader01 from './img/header-step01.png'

const RA02Header = (props) => {
  return (
    <div>
      <PageTitle title='Making the Header' back={props.match} />
      <Section title='Introduction' level={1}>
        <P>In this section you will create a component named Header which will look as show below.</P>
        <Img src={iHeader01} medium alt='header step 01' />
      </Section>
      <Section title='Requirements' level={1}>
        Header must meet these requirements:
        <UL>
          <LI>An <InlineTag angle>img</InlineTag> element which displays src/images/vegies-left.jpg</LI>
          <LI>Will have an <InlineTag angle>h1</InlineTag> element with the text 'Wholesome Foods'</LI>
          <LI>Will have an <InlineTag angle>h2</InlineTag> element with the text 'Delicious meals made with locally sourced organic ingredients'</LI>
        </UL>
      </Section>
      <Section title='Structure & Styling' level={1}>
        <P>The button below reveals part of the answer. Don't click it until you have met the requiremets outlined above.</P>
        <Hint title='JSX for Header'>
          <Pre
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
              "  </div>",
              "</div>",
            ]}
          />
        </Hint>
      </Section>
    </div>
  )
};

export default RA02Header;
