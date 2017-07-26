// L01HTMLElements
import React from 'react'
import { Button } from 'react-bootstrap'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import iHTMLTagAnatomy from './img/html-tag-anatomy.png'
import iHTMLTagAttributes from './img/html-tag-attributes.png'
import iSearchResults from './img/search-results.png'


const Lesson01 = (props) => {
  // console.log('html', lesson.html);
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>
      <header>
        <p className='lesson-title'>HTML Elements</p>
        <p className='lesson-sub-title'>What are They?</p>
      </header>

      <section>
        <h2>What are HTML Elements (a.k.a <em>tags</em>)</h2>
        <p>HTML elements are used to create the structure of a web page. With HTML elements you can create paragraphs, images, tables and much more. HTML elements have a specific structure that must be followed.</p>
        <p>Most HTML elements come in pairs known as the <em>opening tag</em> and <em>closing tag</em>.</p>
        <ul>
          <li>The below tag is a <em>paragraph</em> element.</li>
          <li>To be very specific, elements are made-up of tags. However, people often call an 'element' a 'tag'.</li>
          <li>Most elements have an opening and closing tag.</li>
          <li>Content, in this case words, goes betweenthe opening and closing tags.</li>
        </ul>
        <Img
          src={iHTMLTagAnatomy}
          cite='Mozilla Developer Network Contributors'
          alt=""
        />
      </section>
      <section>
        <h2>Attributes</h2>
        <p>HTML elements can be modified by using attributes. </p>
        <ul>
          <li>Attributes go inside of the opening tag.</li>
          <li>The most common attribute is <em>class</em>, which connects the element to a CSS class/style. We will learn about CSS in a later lesson.</li>
        </ul>
        <Img
          src={iHTMLTagAttributes}
          cite='Mozilla Developer Network Contributors'
          alt=""
        />
      </section>
      <section>
        <h2>Key Resources &amp; Techniques</h2>
        <h3>Searching (Google, Bing, Yahoo, etc.) is your best friend.</h3>
        <p>Say you want to find hout how to put an image on you page. To find out how to use it, enther this search string: <b>html image tag</b>. The picture below shows the results.</p>
        <Callout
          type='danger'
          title='Be careful on the internet'
          text='Remember, anyone can put anything on the internet. Only click on links from trusted sources.'
        />
        <ul>
          <li>For looking-up HTML/coding information, any search result that has the 'Ad' icon will not be useful.</li>
          <li>The best sources are underlined in <span className="red-text">red</span> in the picture.</li>
          <li><b>W3Schools</b> is an excellent resource for HTML &amp; CSS. It has many easy to follow examples.</li>
          <li><b>MDN (Mozilla Developer Network)</b> is alnother excellent resource. It is a little harder to read.</li>
          <li><b>stack<span className="large-text">overflow</span></b> is a very well moderated discussion forum. It is an excellent resource and you should definately make use of it. It can be more difficult to read than W3Schools or MDN, but do give it a try.</li>
        </ul>
        <Img
          src={iSearchResults}
          alt=""
        />
        <h2>HTML Reference</h2>
        <p>Both W3Schools and MDN have a complete list of all HTML elements.</p>
        <ul>
          <li><a href="https://www.w3schools.com/tags/">W3Schools HTML Element Reference</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN HTML element reference</a></li>
        </ul>
      </section>
      <hr/>
    </div>
      )
      };

export default Lesson01;
