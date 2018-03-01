import React from 'react'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import UL from 'elements/UL'
import LI from 'elements/LI'
import P from 'elements/P'
import InlineTag from 'elements/InlineTag'
import Hint from 'elements/Hint'
import iHeader01 from './img/header-step01.png'
import CodeHeader from 'elements/CodeHeader'
import ProjectStructure from 'elements/ProjectStructure'
import HeaderStructure from './header-structure'

const RA02Header = () => {
  return (
    <div id='RA02Header'>
      <Section title='Introduction' l1>
        <P>In this section you will create a component named Header which will look as shown below.</P>
        <Img src={iHeader01} medium alt='header step 01' />
      </Section>
      <Section title='Requirements' l1>
        Header must meet these requirements:
        <UL>
          <LI>An <InlineTag angle>img</InlineTag> element which displays src/images/vegies-left.jpg</LI>
          <LI>Will have an <InlineTag angle>h1</InlineTag> element with the text 'Wholesome Foods'</LI>
          <LI>Will have an <InlineTag angle>h2</InlineTag> element with the text 'Delicious meals made with locally sourced organic ingredients'</LI>
        </UL>
      </Section>
      <Section title='Tips / Hints' l1>
        <Hint title='Structure for a function component'>
          <Pre
            code={[
              "import React from 'react'",
              "",
              "const ComponentName = () => {",
              "  return (",
              "    <p>Return some JSX</p>",
              "  )",
              "}",

            ]}
          />
        </Hint>
        <Hint title='Where to put your component'>
          <P>There are different practices in the React community. For this project, place a component inside of the folder of the component that is rendering it. So with Header, it will look like this:</P>
          <ProjectStructure shape={HeaderStructure}>

          </ProjectStructure>
        </Hint>
      </Section>
      <Section title='Structure & Styling' l1>
        <CodeHeader />
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
