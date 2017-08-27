// Lesson02
import React from 'react'
import styles from './style.css'
import { Button } from 'react-bootstrap'
import Img from './../../elements/Img'
import iImageImage from './img/image-image.png'


const Lesson02 = (props) => {
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
      <header >
        <p className='lesson-title'>Essential HTML Elements</p>
        <p className='lesson-sub-title'>Most Frequenty Used Elements</p>
      </header>
      <section>
        <h2>List of Essential Tags</h2>
        <p>These are the most frequently used tags.</p>
        <table className="table">
          <tbody>
            <tr>
              <th>Element (aka tag)</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><pre>&lt;a&gt;</pre></td>
              <td><b>hyperlink</b>: Use to create a clickable link to another web page or site.</td>
            </tr>
            <tr>
              <td><pre>&lt;b&gt;</pre></td>
              <td><b>bold</b>: use to make text bold.</td>
            </tr>
            <tr>
              <td><pre>&lt;br&gt;</pre></td>
              <td><b>line break</b>: use to make text go to next line</td>
            </tr>
            <tr>
              <td><pre>&lt;div&gt;</pre></td>
              <td><b>div:</b> use to create a grouping of other tags so they can be formatted and positioned as a group.</td>
            </tr>
            <tr>
              <td><pre>&lt;em&gt;</pre></td>
              <td><b>emphasis:</b> use to <em>emphasize</em> text.</td>
            </tr>
            <tr>
              <td><pre>&lt;footer&gt;</pre></td>
              <td><b>footer:</b> used once at the bottom of the page and typically contains links, copyright, contact information, etc.</td>
            </tr>
            <tr>
              <td><pre>&lt;h1&gt; to &lt;h6&gt;</pre></td>
              <td><b>headings:</b> used to create headings from <span className={styles.sudoH1}>h1</span> ... to ... <span className={styles.sudoH2}>h6</span></td>
            </tr>
            <tr>
              <td><pre>&lt;header&gt;</pre></td>
              <td><b>header:</b> is used to create the section at the top of the page that typically contains the websites name and a larg picture of slideshow</td>
            </tr>
            <tr>
              <td><pre>&lt;i&gt;</pre></td>
              <td><b>italic:</b> used to create <i>talic text</i>.</td>
            </tr>
            <tr>
              <td><pre>&lt;img&gt;</pre></td>
              <td><b>image:</b> is used to put an image on the page.
                <Img
                  src={iImageImage}
                  size='inline'
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td><pre>&lt;ul&gt; &amp; &lt;li&gt;</pre></td>
              <td><b>unordered list</b> is used to create a bulleted list of items <ul>
                <li>item 1</li>
                <li>item 2</li>
              </ul></td>
            </tr>
            <tr>
              <td><pre>&lt;ol&gt; &amp; &lt;li&gt;</pre></td>
              <td><b>ordered list</b> is used to create a numbered list of items <ol>
                <li>item 1</li>
                <li>item 2</li>
              </ol></td>
            </tr>
            <tr>
              <td><pre>&lt;section&gt;</pre></td>
              <td><b>section:</b> is just a &lt;div&gt; with a special name. Use it to introduce the major parts of you web page such as 'about me', 'my education', 'my favorite games', etc.</td>
            </tr>
            <tr>
              <td><pre>&lt;title&gt;</pre></td>
              <td><b>title:</b> used to set the title in the browser tab. The &lt;title&gt; tag goes inside of the &lt;head&gt; tag at the top of the HTML code.</td>
            </tr>
            <tr>
              <td><pre>&lt;video&gt;</pre></td>
              <td><b>video:</b> use to put a video on the page<br/>
                <iframe className='videoTag' width='160' height='90' title='dont mine a night' src="https://www.youtube.com/embed/X_XGxzMrq04" frameBorder="0" allowFullScreen>
                </iframe>
              </td>
            </tr>
          </tbody>
        </table>

      </section>
      <footer>
        About MDN by <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"><span className={styles.mdnContributors}></span>Mozilla Contributors</a> is licensed under <a href="http://creativecommons.org/licenses/by-sa/2.5/">CC-BY-SA 2.5</a> .
      </footer>

    </div>
  )
};

export default Lesson02;
