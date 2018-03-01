// L01HTMLElements
import React from 'react'
import styles from './style.css'
import Html from 'elements/Html'
import ThreeCols from 'elements/ThreeCols'
import Pre from 'elements/Pre'
import iImageImage from './img/image-image.png'
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
        <p><b><Html>a</Html> (anchor):</b> creates a clickable link to another web page or site. Although is called an 'anchor' you likely know it as a 'link'</p>
        <Pre
          code={[
            '<a href="https://www.w3schools.com/">Roblox</a>',
          ]}
        />
        <p>This is an <a style={aStyle} href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">Anchor Element</a>.</p>
      </ThreeCols>
      <ThreeCols title='<b> Bold'>
        <p><b><Html>b</Html> (bold):</b> is used to make text <b>bold</b>.</p>
        <Pre
          code={[
            '<p>Here is some <b>bold text</b>.</p>',
          ]}
        />
        <p>Here is some <b>bold text</b>.</p>
      </ThreeCols>
      <ThreeCols title='<br> Line Break'>
        <p><b><Html>br</Html> (line break):</b> is used to force text to a new line.</p>
        <Pre
          code={[
            '<p>First line and <br> second line.</p>',
          ]}
        />
        <p>First line and <br/> second line.</p>
      </ThreeCols>
      <ThreeCols title='<div> Div'>
        <p><b><Html>div</Html> (div):</b> is used to create groupings of other elements as a way of keeping things organized and so that thay can be formatted and positioned as a group.</p>
        <Pre
          code={[
            '<div>',
            '  <p>First paragraph</p>',
            '  <p>Second paragraph</p>',
            '</div>',
          ]}
        />
        <p>Remember, a <Html>div</Html> without styling is not visible so it we can't show you an example.</p>
      </ThreeCols>
      <ThreeCols title='<em> emphasis'>
        <p><b><Html>em</Html> (emphasis):</b> Use to <em>emphasize</em> text.</p>
        <Pre
          code={[
            '<p>Use to <em>emphasize</em> text.</p>',
          ]}
        />
        <p>Use to <em>emphasize</em> text.</p>
      </ThreeCols>
      <ThreeCols title='<figure> figure'>
        <p><b><Html>figure</Html> (figure):</b> Use when you want to put an image or diagram on a page as you would find in a text book. <Html>figure</Html> works together with <Html>figcaption</Html>.</p>
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
        <p><b><Html>figcaption</Html> (figure caption):</b> Use to add a caption to a figure.</p>
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
        <p><b><Html>footer</Html> (footer):</b> Used once at the bottom of the page and typically contains links, copyright, contact information, etc.</p>
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
        <p><b><Html>h1</Html> to <Html>h6</Html> (headings):</b> Use to create headings from <span className={styles.sudoH1}>h1</span> ... to ... <span className={styles.sudoH6}>h6</span>.</p>
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
        <p><b><Html>header</Html> (header):</b> Use .</p>
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
        <p><b><Html>i</Html> (italic):</b> Use to create <i>italic text</i>.</p>
        <Pre
          code={[
            "<p>Use to create <i>italic text</i>.</p>"
          ]}
        />
        <p>Use to create <i>italic text</i>.</p>
      </ThreeCols>
      <ThreeCols title='<img> image'>
        <p><b><Html>img</Html> (image):</b> Is used to put an image on the page.</p>
        <Pre
          code={[
            '<img src="placeholder.jpg" alt="placeholder" />',
          ]}
        />
        <img src={iImageImage} className='img-responsive' style={{maxWidth: 100, margin: 'auto',}}  alt="placeholder"/>
      </ThreeCols>
      <ThreeCols title='<li> list item'>
        <p><b><Html>li</Html> (list item):</b> Used in an ordered <Html>ol</Html> or unordered <Html>ul</Html> list to create list items.</p>
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
        <p><b><Html>ul</Html> (unordered list):</b> Used in combination with <Html>li</Html> to create a bullted list.</p>
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
        <p><b><Html>ol</Html> (ordered list):</b> Used in combination with <Html>li</Html> to create a numbered list.</p>
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
        <p><b><Html>section</Html> (section):</b> Is just a <Html>div</Html> with a special name. Use it to introduce the major parts of your web page such as 'about me', 'my education', 'my favorite games', etc..</p>
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
        <p><b><Html>title</Html> (title):</b> Use to set the title in the browser tab. The <Html>title</Html> tag goes inside of the <Html>head</Html> tag at the top of each HTML page.</p>
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
