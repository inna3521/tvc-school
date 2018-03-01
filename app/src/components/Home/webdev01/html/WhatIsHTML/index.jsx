// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import Img from 'elements/Img'
import Callout from 'elements/Callout'
import iElements from './media/elements.png'
import iTags from './media/tags.png'
import iContent from './media/content.png'
import iAttributeAnatomy from './media/attribute-anatomy.png'
import iNameValue01 from './media/name-value-01.svg'
import iNameValue02 from './media/name-value-02.svg'
import iElementSummary from './media/element-summary.png'
import iContainer from './media/container.png'
import Angle from 'elements/Angle'
import Pre from 'elements/Pre'
import styles from './style.css'
import Quiz from 'elements/Quiz'
import Question from 'elements/Question'
import Amp from 'elements/Amp'
import Code from 'elements/Code'


const WhatIsHTML = () => {

  return (<div id='WhatIsHTML'>
    <div>
      <P><em>HTML</em> stands for <b>H</b>yper<b>t</b>ext <b>M</b>arkup <b>L</b>anguage. HTML creates the structure of a web page. Using HTML you can add paragraphs, headings, links, images and much more to your web page.</P>
      <P>HTML is called a <em>markup language</em>. It is not a programming language as it is focused on the presentation of content.</P>
    </div>
    <Section title='HTML is made of Elements' l1>
      <P>HTML is made-up of <em>elements</em>. Each element represents something that can appear on a web page. For example, paragraphs or headings. <Code code={'<p></p>'} /> is a paragraph element and <Code code={'<title></title>'} /> is a title element.</P>
      <Img src={iElements} />
      <P>There are over 100 HTML elements. However, you can create a complete web site with 15 or 20 of the most frequently used elements.</P>
    </Section>
    <Section title='Elements are made of Tags' l1>
      <P>Most elements have an opening tag and a closing tag.</P>
      <P> The opening and closing tags differ only in that the closing tag has a '/' before the letter 'p'.</P>
      <Img src={iTags} />
    </Section>
    <Section title='Content goes between Tags' l1>
      <Img src={iContent} />
    </Section>
    <Section title='Attributes Modify Elements' l1>
      <P>Attributes are name / value pairs that go inside of the the element's opening tag, after the element name but before the closing angle bracket ('>')</P>
      <Img src={iAttributeAnatomy} />
      <P>Attributes always take the form:</P>
      <Img src={iNameValue01} />
      <P>Where 'name' on the left side of the '=' is the name of the attribute and 'value' on the right side of the '=' is the value of the attribute. It is a little like algebra, for example x = 3, 'x' would be the name and '3' would be the value.</P>
      <P>Below is an attribute named 'color' with a value of 'blue':</P>
      <Img src={iNameValue02} />
      <Section title='Attributes can Change Appearance and Behavior' l2>
        <P>Attributes add additional information to an element and can change its appearence <Amp/> behavior.</P>
        <Section title='Example of Appearance Change' l3>
          <Pre
            caption="The below paragraph tag has a 'class' attribute. The class attribute is used to apply a style which changes the appearance of the paragraph."
            code={[
              "<p class='color-it-blue'>"
            ]}
          />
          <Pre
            caption="The below paragraph tag has an  'onclick' attribute. The onclick attribute is used to run JavaScript code when the element is clicked. For example, it might pop-up a message that says 'Hello'."
            code={[
              '<p onclick="sayHello()">'
            ]}
          />
        </Section>
      </Section>

    </Section>
    <Callout info>
      <p>Name / value pairs are very common in programming. They are often called 'properties'.</p>
    </Callout>
    <Section title='Elements are Containers' l1>
      <div className={styles.elementsArecontainers}>
        <div sm={6}>
          <Img src={iContainer} />
        </div>
        <div sm={6} className={styles.containersText}><P>Elements are <i>containers</i> in that elements can be put inside of other elements. Using elements as containers provides organization and the ability to style groups of elements instead of each individual one.</P>
        </div>
      </div>
      <P>Here is an example of a <Angle>header</Angle> element which contains two elements, a <Angle>h1</Angle> and a <Angle>p</Angle> element.</P>
      <Pre
        code={[
          "<header>",
          "  <h1>Introduction to HTML</h1>",
          "  <p>HTML is a markup language</p>",
          "</header>"
        ]}
      />
      <Callout
        title='Indenting'
        warning>
        <p>Notice in the above example the contained elements, (i.e., the <Angle>h1</Angle> &amp; <Angle>p</Angle> elements) are indented 2 spaces. This shows that they are inside of the <Angle>Header</Angle> element.</p>
        <p>Indenting is curcial. A page of HTML can get very long and without indenting it quickly becomes difficult and fustrating to read and modify.</p>
        <p><b>Indent!</b></p>
      </Callout>
    </Section>
    <Section title='Empty Elements'>
      <P>Not all elements have content. These elements are known as <em>empty elements</em> or <em>self closing elements</em>. They have attributes but no content</P>
      <Pre
        caption='The <p> element has content'
        code={['<p>some content</p>']}
      />
      <Pre
        caption='The <img>, image, element does not take content'
        code={['<img src="flower.jpg" />']}
      />
      <ul>
        <li><Angle>img</Angle> has only only one tag</li>
        <li>There is a '/' before the closing '>'</li>
      </ul>
    </Section>
    <Section title='Element Summary' l1>
      <P>Below is an example of a <Angle>p</Angle> element. The 'p' stands for 'paragraph'. When you use the <Angle>p</Angle> element a pargraph is created on the web page.</P>
      <P>The diagram below explains the parts of a HTML element using the <Angle>p</Angle> element as an example.</P>
      <UL>
        <LI>Note that the element has an open tag and a closing tag</LI>
        <LI>The opening and closing tags differ only in that the closing tag has a '/' before the letter 'p'.</LI>
        <LI>Between the opening and closing tag is the content. It this case the content is text, but can be other things which you will learn later.</LI>
        <LI>The opening and closing tags together make-up an element. Elements almost always have content.</LI>
        <LI>If the element has attributes, the attributes go inside the element's opening tag.</LI>
      </UL>
      <Img
        src={iElementSummary}
      />
    </Section>

    <Callout warning
      title='Double or single quotes'
      >
      <p>Always use couble quotes (&quot;) for attribute values. While single quotes (&apos;) often work, they don't always.</p>
    </Callout>

    <Callout info>
      <p>A web page is also called a <b>document</b>. The terms 'web page' and 'document' will be used through out this course.</p>
    </Callout>


    <Callout title='Congratulations!' goal>
      <p>You have completed the lesson on HTML.</p>
      <p>In the next lesson you will begin learning specific HTML elements.</p>
    </Callout>
    <Section title='Review' l1>
      <Quiz>
        <Question
          question='HTML stands for?'
          choices={[
            'High Tolerance Modeling Language',
            'Hypertext Markup Language',
            'Horizontal Title Meta Language'
          ]}
          answer={2}

        />
        <Question
          question='HTM creates'
          choices={[
            'Interactivity',
            'Styling of the page',
            'Page structure',
          ]}
          answer={3}
        />
        <Question
          question='Select the HTML element that is correctly formed'
          choices={[
            '<p>some test</p>',
            '(p)some text(/p)',
            '<p>some test<p>',
            '</p>some text<p>'
          ]}
          answer={1}
        />
        <Question
          question='Select the answer that is most correct'
          choices={[
            'A HTML element has two tags and some content',
            'A HTML element is made up of two main elements and one or more sub-elements',
            'A HTML element is a tag',
            'A HTML element usually has an opening tag, come content, and a closing tag, but some have one tag and no content.'
          ]}
          answer={4}
        />
        <Question
          question='HTML Elements can contain other elements?'
          choices={[
            'True',
            'False',
          ]}
          answer={1}
        />
        <Question
          question='Where in an element does content go?'
          choices={[
            "Insider the opening tag before the '>'",
            "Inside the closing tag after the '<'",
            "Between the opening and closing tags",
            "After the closing tag",
          ]}
          answer={3}
        />
        <Question
          question='What is an empty element?'
          choices={[
            "An element with no attributes",
            "An element with one tag and no content",
            "An element with no ID property",
          ]}
          answer={2}
        />
        <Question
          question='I have to lean over 100 elements before I can create a website?'
          choices={[
            "True",
            "False",
          ]}
          answer={2}
        />
      </Quiz>
    </Section>
  </div>)
};

export default WhatIsHTML
