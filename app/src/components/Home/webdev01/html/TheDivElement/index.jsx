// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import P from 'elements/P'
import Callout from 'elements/Callout'
import Pre from 'elements/Pre'
import HTMLTag from 'elements/HTMLTag'
import TwoCols from 'elements/TwoCols'
import Quiz from 'elements/Quiz'
import Question from 'elements/Question'
import iEx01 from './media/div-ex-01.png'
import iEx02 from './media/div-ex-02.png'
import iEx03 from './media/div-ex-03.png'
import iEx04 from './media/div-ex-04.png'

const TheDivElement = () => {

  return (
    <div id='TheDivElement'>
      <P>Grouping is everywhere. Dogs and cats are grouped into mammals, board games and video games are grouped into 'games' and students are grouped into 'classes'. Grouping is essential to our understanding the world. Grouping is also important in computer programming</P>
      <P>In a previous lesson we discussed how elements are 'containers' and containers group together individual elements. In HTML there is a special grouping element called a <HTMLTag>div</HTMLTag></P>
      <Section title="What's Special About a <div>?">
        <P>There isn't much special about a div and that is really the point of it. Unlike most elements like a <HTMLTag>p</HTMLTag>, the <HTMLTag>div</HTMLTag> does not have any styling associated with it. However, the programmer can, and most often does, add styling to the <HTMLTag>div</HTMLTag>. Let's look at some examples to understand more.</P>
      </Section>
      <Section level={2}>
        <P>Here is a web page that has a <HTMLTag>div</HTMLTag> as its only element. The div is not visible on the page.</P>
        <TwoCols>
          <Pre
            code={[
              "<body>",
              "  <div>",
              "  </div>",
              "</body>",
            ]}
          />
          <img className='img-responsive' src={iEx01} alt='ex01'/>
        </TwoCols>
      </Section>
      <Section level={2}>
        <P>Here is the same page with a <HTMLTag>p</HTMLTag> element inside the <HTMLTag>div</HTMLTag>. Note that the <HTMLTag>p</HTMLTag> element is visible but not the <HTMLTag>div</HTMLTag>.</P>
        <TwoCols>
          <Pre
            code={[
              "<body>",
              "  <div>",
              "    <p>I'm a 'p' inside of a 'div'</p>",
              "  </div>",
              "</body>",
            ]}
          />
          <img className='img-responsive' src={iEx02} alt='ex02'/>
        </TwoCols>
      </Section>
      <Section level={2}>
        <P>Here is the same HTML with a <HTMLTag>p</HTMLTag> element but no <HTMLTag>div</HTMLTag>. It looks exactly the same.</P>
        <TwoCols>
          <Pre
            code={[
              "<body>",
              "  <p>I'm a 'p' inside of a 'div'</p>",
              "</body>",
            ]}
          />
          <img className='img-responsive' src={iEx02} alt='ex02'/>
        </TwoCols>
      </Section>
      <Section level={2}>
        <P>Now let's add a second <HTMLTag>p</HTMLTag> and some styling to the <HTMLTag>div</HTMLTag> and see what happens.</P>
        <P>Observe how both of the <HTMLTag>p</HTMLTag> elements become green. That is the power of <HTMLTag>div</HTMLTag>s. You can group elements together and apply styles to all elements in the group rather than styling every individual item.</P>
        <TwoCols>
          <div>
            <Pre
              code={[
                "<body>",
                "  <div class='div-style'>",
                "    <p>I'm a 'p' inside of a 'div'</p>",
                "    <p>I'm a second 'p' element</p>",
                "  </div>",
                "</body>",
              ]}
            />
            <Pre
              code={[
                ".div-style {",
                "  color: green;",
                "}"
              ]}
            />
          </div>
          <img className='img-responsive' src={iEx03} alt='ex03'/>
        </TwoCols>
      </Section>
      <Section level={2}>
        <P>One last example before you get to try this out. Let's add a border to the 'div-style' class and see what happens. You can now see where the div is.</P>

        <TwoCols>
          <div>
            <Pre
              code={[
                "<body>",
                "  <div class='div-style'>",
                "    <p>I'm a 'p' inside of a 'div'</p>",
                "    <p>I'm a second 'p' element</p>",
                "  </div>",
                "</body>",
              ]}
            />
            <Pre
              code={[
                ".div-style {",
                "  color: green;",
                "  border: 2px solid green;",
                "}"
              ]}
            />
          </div>
          <img className='img-responsive' src={iEx04} alt='ex04'/>
        </TwoCols>
      </Section>
      <Callout info>
        <p>We will be using the <HTMLTag>div</HTMLTag> element often and learning more about it later.</p>
      </Callout>
      <Section title='Review' level={1}>
        <Quiz>
          <Question
            question='Which statement is true?'
            choices={[
              'A <div> is used to add styling to the page.',
              'A <div> is used to group other elements together.',
              'You can use a <div> instead of a <p> whenever you need to.'
            ]}
            answer={2}
          />
          <Question
            question='Grouping is important in computer programming.'
            choices={[
              'True',
              'False',
            ]}
            answer={1}
          />
          <Question
            question='A <div> with nothing inside of it will be visible on the page.'
            choices={[
              'True',
              'False',
            ]}
            answer={2}
          />
        </Quiz>
      </Section>
    </div>
  )
};

export default TheDivElement
