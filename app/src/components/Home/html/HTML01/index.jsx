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
import Code from 'elements/Code'

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
        <P>
          In the above diagram
          <UL>
            <LI>Note that the element has an open tag and a closing tag</LI>
            <LI>The opening and closing tags differ only in that the closing tag has a '/' before the letter 'p'.</LI>
            <LI>Between the opening and closing tag is the content. It this case the content is text, but can be other things which you will learn later.</LI>
            <LI>The opening and closing tags together make-up an element. Elements almost always have content.</LI>
          </UL>
        </P>
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
        <P>Elements are <i>containers</i> in that elements can be put inside of elements. Here is an example of a <Angle>header</Angle> element which contains two elements, a <Angle>h1</Angle> and a <Angle>p</Angle> element.</P>
        <Code
          code={
            "<header>",
            "  <h1>Introduction to HTML</h1>",
            "  <p>HTML is a markup language</p>",
            "</header>"
          }
        />
        <Callout warning>
          <h4>Indenting</h4>
          <p>Notice in the above example the contained elements, (i.e., the <Angle>h1</Angle> &amp; <Angle>p</Angle> elements) are indented 2 spaces. This shows that they are inside of the <Angle>Header</Angle> element.</p>
          <p>Indenting is curcial. A page of HTML can get very long and without indenting it quickly becomes difficult and fustrating to read and modify.</p>
          <p><b>Indent!</b></p>
        </Callout>
      </Section>
      <Section title='attributes' level={2}>
        <P>Attributes add additional information to an element.</P>
      </Section>
    </Section>

  </div>)
};

export default HTML01
