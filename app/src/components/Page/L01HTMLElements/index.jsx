// L01HTMLElements
import React from 'react'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection/index'
import UL from '../../elements/UL'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import iHTMLTagAnatomy from './img/html-tag-anatomy.png'
import iHTMLTagAttributes from './img/html-tag-attributes.png'
import iSearchResults from './img/search-results.png'


const Lesson01 = (props) => {
  // console.log('html', lesson.html);
  return (
    <Lesson
      title='HTML Elements'
      subTitle='What are They?'
    >


      <LessonSection
        title='What are HTML Elements (a.k.a tags)'
        subTitle='Section Sub-Title'
      >
        <p>HTML elements are used to create the structure of a web page. With HTML elements you can create paragraphs, images, tables and much more. HTML elements have a specific structure that must be followed.</p>
        <p>Most HTML elements come in pairs known as the <em>opening tag</em> and <em>closing tag</em>.</p>
        <UL
          listItems={[
            'The below tag is a <em>paragraph</em> element.',
            "To be very specific, elements are made-up of tags. However, people often call an 'element' a 'tag'.",
            'Most elements have an opening and closing tag.',
            'Content, in this case words, goes betweenthe opening and closing tags.',
          ]}
        />
        <Img
          src={iHTMLTagAnatomy}
          cite='Mozilla Developer Network Contributors'
          alt=""
        />
      </LessonSection>
      <LessonSection
        title='Attributes'
      >
        <p>HTML elements can be modified by using attributes. </p>
        <UL
          listItems={[
            'Attributes go inside of the opening tag.',
            'The most common attribute is <em>class</em>, which connects the element to a CSS class/style. We will learn about CSS in a later lesson.',
          ]}
        />

        <Img
          src={iHTMLTagAttributes}
          cite='Mozilla Developer Network Contributors'
          alt=""
        />
      </LessonSection>
      <LessonSection
        title='Key Resources and Techniques'
        subTitle='Searching (Google, Bing, Yahoo, etc.) is your best friend.'
      >
        <p>Say you want to find hout how to put an image on you page. To find out how to use it, enther this search string: <b>html image tag</b>. The picture below shows the results.</p>
        <Callout
          type='danger'
          title='Be careful on the internet'
          text={[
            'Remember, anyone can put anything on the internet. Only click on links from trusted sources.',
            'and here is a second paragraph'
          ]}
        />
        <UL
          listItems={[
            "For looking-up HTML/coding information, any search result that has the 'Ad' icon will not be useful.",
            'The best sources are underlined in <span className="red-text">red</span> in the picture.',
            '<b>W3Schools</b> is an excellent resource for HTML &amp; CSS. It has many easy to follow examples.',
            '<b>MDN (Mozilla Developer Network)</b> is alnother excellent resource. It is a little harder to read.',
            '<b>stack overflow</b> is a very well moderated discussion forum. It is an excellent resource and you should definately make use of it. It can be more difficult to read than W3Schools or MDN, but do give it a try.',
          ]}
        />

        <Img
          src={iSearchResults}
          alt=""
        />
        <h2>HTML Reference</h2>
        <p>Both W3Schools and MDN have a complete list of all HTML elements.</p>
        <UL
          listItems={[
            '<a href="https://www.w3schools.com/tags/">W3Schools HTML Element Reference</a>',
            '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN HTML element reference</a>',
          ]}
        />

      </LessonSection>
    </Lesson>
  )
};

export default Lesson01;
