// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import UL from 'elements/UL'
import P from 'elements/P'
import LI from 'elements/LI'
import A from 'elements/A'
import Img from 'elements/Img'
import LessonStatus from 'elements/LessonStatus'
import Callout from 'elements/Callout'
import iElement from './media/element.png'
import Angle from 'elements/Angle'
import Pre from 'elements/Pre'
import styles from './style.css'
import iAttributeAnatomy from './media/attribute-anatomy.png'
import Quiz from 'elements/Quiz'
import Question from 'elements/Question'

const HTML01 = () => {

  return (<div id='AboutReact'>
    <LessonStatus outline="outline">
      <LI>just a mixed bag of ideas at this point</LI>
    </LessonStatus>
    <Section title='What is HTML?' level={1}>
      <P><em>HTML</em> stands for <b>H</b>yper<b>t</b>ext <b>M</b>arkup <b>L</b>anguage. HTML creates the structure of a web page. Using HTML you can add paragraphs, headings, links, images and much more to your web page.</P>
      <P>HTML is called a <em>markup language</em>. It is not a programming language as it is focused on the presentation of content.</P>
    </Section>
    <Callout warning>
      <p><em>Content</em> is the text, images and other data displayed on the web page.</p>
    </Callout>
    <Callout info>
      <p>A web page is also called a <b>document</b>. The terms 'web page' and 'document' will be used through out this course.</p>
    </Callout>
    <Section title='Elements'>
      <P>HTML is made-up of <em>elements</em>. Each element represents something that can appear on a web page. There are over 100 HTML elements. However, you can create a complete web site with 15 or 20 of the most frequently used elements.</P>
      <Section title='Anatomy of a HTML Element' level={2}>
        <P>Below is an example of a '&lt;p&gt;' element. The 'p' stands for 'paragraph'. When you use the '&lt;p&gt;' element a pargraph is created on the web</P> page.
        <Img
          src={iElement}
        />
        <P>In the above diagram</P>
          <UL>
            <LI>Note that the element has an open tag and a closing tag</LI>
            <LI>The opening and closing tags differ only in that the closing tag has a '/' before the letter 'p'.</LI>
            <LI>Between the opening and closing tag is the content. It this case the content is text, but can be other things which you will learn later.</LI>
            <LI>The opening and closing tags together make-up an element. Elements almost always have content.</LI>
          </UL>

      </Section>
      <Section title='Examples' level={2}>
        <UL>
          <LI><Angle>p</Angle> creates a paragraph</LI>
          <LI><Angle>img</Angle> creates an image</LI>
          <LI><Angle>table</Angle> creates a table</LI>
          <LI><Angle>a</Angle> creates a link</LI>
          <LI><Angle>video</Angle> creates a video</LI>
        </UL>
      </Section>
      <Section title='Elements are Containers' level={2}>
        <P>Elements are <i>containers</i> in that elements can be put inside of elements. Using elements as containers provides organization and the ability to style groups of elements instead of each individual one.</P>
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
      <Section title='Attributes' level={2}>
        <P>Attributes add additional information to an element and can change its behavior. align, autocomplete, </P>
        <P>As an example of a behavior change controlled by an attribute, here are two inputs, the first does not have the 'disabled' attribute but the second does. As a result you can type in the first edit box but not in the second.</P>
        <Pre
          caption=' This input does not have the disabled attribute and you can type in it.'
          code={[
            '<input type="text" />',
          ]}
        />
        <input className={styles.inputWidth} type='text' placeholder='you can type in here'/>
        <Pre
          caption='This input has the disabled attribute. Its behavior is change so you can not type in it.'
          code={[
            '<input type="text" disabled="true"/>'
          ]}
        />
        <input className={styles.inputWidth} type='text' placeholder="disabled! you can't type in here" disabled/>
      </Section>
      <Callout warning
        title='Double or single quotes'
        >
        <p>While single quotes (&apos;) work most of the time they don't always work. When typeing the value of attributes use double quotes (&quot;)</p>
      </Callout>
      <Section title='Anatomy of an Attribute'>
        <img src={iAttributeAnatomy} alt='attribute anatome' />
        <P>The attribute is a combination of a name and a value. In programming this is known as a 'name value pair'.</P>
        <UL>
          <li>Attributes go inside the opening tag after the name of the element</li>
          <li>The attribute name and value are separated by an '=' sign with no spaces</li>
          <li>The attribute name is on the left side of the '=' sign and is not in quotes</li>
          <li>The attribute value is no the right side of the '=' sign and is in double quotes</li>

        </UL>
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
    </Section>
    <Callout title='Congratulations!' goal>
      <p>You have completed the lesson on HTML.</p>
      <p>In the next lesson you will begin learning specific HTML elements.</p>
    </Callout>
    <Pre
      linesAdded={[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
      code={[
        '<!DOCTYPE html>',
        '<html>',
        '<head>',
        '  <meta charset="utf-8">',
        '  <link rel="stylesheet" href="bootstrap.min.css">',
        '  <title>p-html-01</title>',
        '</head>',
        '<body>',
        '  <header>',
        '    <h1>Your Name</h1>',
        '    <h2>Software Student</h2>',
        '  </header>',
        '  <section>',
        '    <p>I am currently learning HTML. This is my first web page.</p>',
        '  </section>',
        '  <section>',
        '    <h2>The Matrix</h2>',
        '    <img src="matrix.jpg" alt="">',
        '  </section>',
        '</body>',
        '</html>',
      ]}
    />
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
          'A HTML element has an opening tag, come content, and a closing tag'
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
    </Quiz>

  </div>)
};

export default HTML01
