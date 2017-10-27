// L01HTMLElements
import React from 'react'
import Lesson from 'elements/Lesson'
import LessonSection from 'elements/LessonSection/index'
import UL from 'elements/UL'
import Img from 'elements/Img'
import Callout from 'elements/Callout'
import iHTMLTagAnatomy from './img/html-tag-anatomy.png'
import iHTMLTagAttributes from './img/html-tag-attributes.png'
import iSelfClosing from './img/self-closing-element.svg'
import A from 'elements/A/'

const Lesson01 = (props) => {
  return (
    <Lesson
      title='What is HTML'
    >
      <LessonSection

      >
        <Callout
          type='info'
          title='HTML'
        >
          <p>
            HTML (Hypertext Markup Language) is the code that is used to structure and display a web page and its content. For example, content could be structured within a set of paragraphs,  a list of bulleted points, or using images and data tables.
          </p>
          <cite>source: Mozilla Developer Network Contributors</cite>
        </Callout>

        <p>So HTML is the code to structure and display a web page and its content, but what is structure, display and content?</p>
        <dl>
          <dt>Content</dt>
          <dd>Content is everything you see displayed on a web page. It consists of text and pictures.</dd>
          <dt>Display</dt>
          <dd>Display is the result of the process of combining HTML and CSS (we learn about CSS later) to create what you see on the page</dd>
          <dt>Structure</dt>
          <dd>Structure includes whether an element is a paragraph, image, bulleted list or other HTML element, and can include alignment and position on the page. However, appearance such as alignment, position and color is largely determined by CSS.</dd>
        </dl>
        <p>Your understanding of content, display and structure will become clearer as you move through the HTML and CSS sections of this course.</p>
      </LessonSection>
      <LessonSection
        title='What are HTML Elements (aka. tags)'
      >
        <p>HTML elements are used to create the structure of a web page. With HTML elements you can create paragraphs, images, tables and much more. HTML elements have a specific structure that must be followed.</p>

        <UL
          listItems={[
            'The below tag is a <em>paragraph</em> element.',
            'Most HTML elements come in pairs known as the <em>opening tag</em> and <em>closing tag</em>',
            "To be very specific, elements are made-up of tags. However, people often call an 'element' a 'tag'.",
            'Content, in this case words, goes between the opening and closing tags.',
          ]}
        />
        <Img
          src={iHTMLTagAnatomy}
          cite='Mozilla Developer Network Contributors'
          alt="anatomy of html tag"
        />
        <p>Some tags are <em>self-closing</em>. They do not have a closing tag.</p>
        <Img
          src={iSelfClosing}
          alt="self-closing html tag"
        />
      </LessonSection>
      <LessonSection
        title='Attributes'
      >
        <p>HTML elements can be modified by using attributes.</p>
        <UL
          listItems={[
            'Attributes go inside of the opening tag.',
            'The most common attribute is <em>class</em>, which connects the element to a CSS class/style. We will learn about CSS in a later lesson. Attributes are not visible on the page.',
          ]}
        />

        <Img
          src={iHTMLTagAttributes}
          cite='Mozilla Developer Network Contributors'
          alt=""
        />
      </LessonSection>
      <LessonSection
        title='Additional Information'
        subTitle='Looking-up and learning about HTML elements'
      >
        <p>Both W3Schools and MDN have a complete list of all HTML elements.</p>
        <UL
          listItems={[
            <A href="https://www.w3schools.com/tags/">W3Schools HTML Element Reference</A>,
            <A href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN HTML element reference</A>,
          ]}
        />
        <p>Often, the fastest way to look-up an element would be to search for it. For example, if you wanted to know the tag to display an image on the page you could search for 'html tag image mdn' and it will most likely be the first search result.</p>

      </LessonSection>
    </Lesson>
  )
};

export default Lesson01;
