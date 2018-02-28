// L01HTMLElements
import React from 'react'
import Section from 'elements/Section'
import iImageImage from './img/image-image.png'
import Table from 'elements/NewTable'
import TH from 'elements/TH'
import TR from 'elements/TR'
import TD from 'elements/TD'
import styles from './style.css'
import Code from 'elements/Code'
import A from 'elements/A'
import HTMLTag from 'elements/HTMLTag'
import ThreeCols from 'elements/ThreeCols'
import Pre from 'elements/Pre'
import iBanner from './img/banner.png'
import iTitle from './img/title.png'

const aStyle = {
  color: 'blue',
}
const figureDivStyle = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}
const figureStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
}

const EssentialHTMLElements = () => {
  return (
    <div id='EssentialHTMLElements'>
      <ThreeCols title='<a> Anchor'>
        <p><b><HTMLTag>a</HTMLTag> (anchor):</b> creates a clickable link to another web page or site. Although is called an 'anchor' you likely know it as a 'link'</p>
        <Pre
          code={[
            '<a href="https://www.w3schools.com/">Roblox</a>',
          ]}
        />
        <p>This is an <a style={aStyle} href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">Anchor Element</a>.</p>
      </ThreeCols>
      <ThreeCols title='<b> Bold'>
        <p><b><HTMLTag>b</HTMLTag> (bold):</b> is used to make text <b>bold</b>.</p>
        <Pre
          code={[
            '<p>Here is some <b>bold text</b>.</p>',
          ]}
        />
        <p>Here is some <b>bold text</b>.</p>
      </ThreeCols>
      <ThreeCols title='<br> Line Break'>
        <p><b><HTMLTag>br</HTMLTag> (line break):</b> is used to force text to a new line.</p>
        <Pre
          code={[
            '<p>First line and <br> second line.</p>',
          ]}
        />
        <p>First line and <br/> second line.</p>
      </ThreeCols>
      <ThreeCols title='<div> Div'>
        <p><b><HTMLTag>div</HTMLTag> (div):</b> is used to create groupings of other elements as a way of keeping things organized and so that thay can be formatted and positioned as a group.</p>
        <Pre
          code={[
            '<div>',
            '  <p>First paragraph</p>',
            '  <p>Second paragraph</p>',
            '</div>',
          ]}
        />
        <p>Remember, a <HTMLTag>div</HTMLTag> without styling is not visible so it we can't show you an example.</p>
      </ThreeCols>
      <ThreeCols title='<em> emphasis'>
        <p><b><HTMLTag>em</HTMLTag> (emphasis):</b> Use to <em>emphasize</em> text.</p>
        <Pre
          code={[
            '<p>Use to <em>emphasize</em> text.</p>',
          ]}
        />
        <p>Use to <em>emphasize</em> text.</p>
      </ThreeCols>
      <ThreeCols title='<figure> figure'>
        <p><b><HTMLTag>figure</HTMLTag> (figure):</b> Use when you want to put an image or diagram on a page as you would find in a text book. <HTMLTag>figure</HTMLTag> works together with <HTMLTag>figcaption</HTMLTag>.</p>
        <Pre
          code={[
            '<figure>',
            '  <img',
            '  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"',
            '  alt="An awesome picture">',
            '  <figcaption>MDN Logo</figcaption>',
            '</figure>',
          ]}
        />
        <div style={figureDivStyle}>
          <figure style={figureStyle}>
            <img
            src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
            alt="MDN Logo" />
            <figcaption>MDN Logo</figcaption>
          </figure>
        </div>

      </ThreeCols>
      <ThreeCols title='<figcaption> '>
        <p><b><HTMLTag>figcaption</HTMLTag> (figure caption):</b> Use to add a caption to a figure.</p>
        <Pre
          code={[
            '<figure>',
            '  <img',
            '  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"',
            '  alt="An awesome picture">',
            '  <figcaption>MDN Logo</figcaption>',
            '</figure>',
          ]}
        />
        <div style={figureDivStyle}>
          <figure style={figureStyle}>
            <img
            src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
            alt="MDN Logo" />
            <figcaption>MDN Logo</figcaption>
          </figure>
        </div>
      </ThreeCols>
      <ThreeCols title='<footer> '>
        <p><b><HTMLTag>footer</HTMLTag> (footer):</b> Used once at the bottom of the page and typically contains links, copyright, contact information, etc.</p>
        <Pre
          code={[
            '<footer>',
              '<p>Copy right 2014 - 2018</p>',
            '</footer>',
          ]}
        />
        <footer>
          <p>Copy right 2014 - 2018</p>
        </footer>
      </ThreeCols>
      <ThreeCols title='<h1> to <h6> headings'>
        <p><b><HTMLTag>h1</HTMLTag> to <HTMLTag>h6</HTMLTag> (headings):</b> Use to create headings from <span className={styles.sudoH1}>h1</span> ... to ... <span className={styles.sudoH6}>h6</span>.</p>
        <Pre
          code={[
            '<h1>Heading1</h1>',
            '<h3>Heading3</h3>',
            '<h6>Heading6</h6>',
          ]}
        />
        <div>
          <h1>Heading1</h1>
          <h3>Heading3</h3>
          <h6>Heading6</h6>
        </div>
      </ThreeCols>
      <ThreeCols title='<header> header'>
        <p><b><HTMLTag>header</HTMLTag> (header):</b> Use .</p>
        <Pre
          code={[
            '<header>',
            '  <img src="banner.png" alt="banner" />',
            '</header>',
          ]}
        />
        <header><img src={iBanner} className={'img-responsive'} alt='banner' /></header>
      </ThreeCols>
      <ThreeCols title='<i> italic'>
        <p><b><HTMLTag>i</HTMLTag> (italic):</b> Use to create <i>italic text</i>.</p>
        <Pre
          code={[
            "<p>Use to create <i>italic text</i>.</p>"
          ]}
        />
        <p>Use to create <i>italic text</i>.</p>
      </ThreeCols>
      <ThreeCols title='<img> image'>
        <p><b><HTMLTag>img</HTMLTag> (image):</b> Is used to put an image on the page.</p>
        <Pre
          code={[
            '<img src="placeholder.jpg" alt="placeholder" />',
          ]}
        />
        <img src={iImageImage} className='img-responsive' style={{maxWidth: 100, margin: 'auto',}}  alt="placeholder"/>
      </ThreeCols>
      <ThreeCols title='<li> list item'>
        <p><b><HTMLTag>li</HTMLTag> (list item):</b> Used in an ordered <HTMLTag>ol</HTMLTag> or unordered <HTMLTag>ul</HTMLTag> list to create list items.</p>
        <Pre
          code={[
            '<ul>',
            '  <li>First list item</li>',
            '  <li>Second list item</li>',
            '</ul>',
          ]}
        />
        <ul>
          <li>First list item</li>
          <li>Second list item</li>
        </ul>
      </ThreeCols>
      <ThreeCols title='<ul> unordered list'>
        <p><b><HTMLTag>ul</HTMLTag> (unordered list):</b> Used in combination with <HTMLTag>li</HTMLTag> to create a bullted list.</p>
        <Pre
          code={[
            '<ul>',
            '  <li>First list item</li>',
            '  <li>Second list item</li>',
            '</ul>',
          ]}
        />
        <ul>
          <li>First list item</li>
          <li>Second list item</li>
        </ul>
      </ThreeCols>
      <ThreeCols title='<ol> ordered list'>
        <p><b><HTMLTag>ol</HTMLTag> (ordered list):</b> Used in combination with <HTMLTag>li</HTMLTag> to create a numbered list.</p>
        <Pre
          code={[
            '<ol>',
            '  <li>First list item</li>',
            '  <li>Second list item</li>',
            '</ol>',
          ]}
        />
        <ol>
          <li>First list item</li>
          <li>Second list item</li>
        </ol>
      </ThreeCols>
      <ThreeCols title='<section> section'>
        <p><b><HTMLTag>section</HTMLTag> (section):</b> Is just a <HTMLTag>div</HTMLTag> with a special name. Use it to introduce the major parts of your web page such as 'about me', 'my education', 'my favorite games', etc..</p>
        <Pre
          code={[
            '<section>',
            '  <h3>About Me</h3>',
            "  <p>A section is like a div. You can't see it!</p>",
            '</section>',
            '<section>',
            '  <h3>My Projects</h3>',
            '</section>',
          ]}
        />
        <div>
          <section>
            <h3>About Me</h3>
            <p>A section is like a div. You can't see it!</p>
          </section>
          <section>
            <h3>My Projects</h3>
          </section>
        </div>
      </ThreeCols>
      <ThreeCols title='<title> title'>
        <p><b><HTMLTag>title</HTMLTag> (title):</b> Use to set the title in the browser tab. The <HTMLTag>title</HTMLTag> tag goes inside of the <HTMLTag>head</HTMLTag> tag at the top of each HTML page.</p>
        <Pre
          code={[
            '<head>',
            '  <meta charset="utf-8">',
            '  <title>The Matrix</title>',
            '  <link rel="stylesheet" href="style.css">',
            '</head>',
          ]}
        />
        <img src={iTitle} className='img-responsive' alt='title in browser tab' />
      </ThreeCols>
    </div>
  )
};

export default EssentialHTMLElements;
