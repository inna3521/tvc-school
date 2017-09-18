// L01HTMLElements
import React from 'react'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection/index'
import UL from '../../elements/UL'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import Pre from '../../elements/Pre'
import iImageImage from './img/image-image.png'
import Table from '../../elements/NewTable'
import TH from '../../elements/TH'
import TR from '../../elements/TR'
import TD from '../../elements/TD'
import styles from './style.css'
import Code from '../../elements/Code'


const L02EssentialHTMLElements = (props) => {
  return (

    <Lesson
      title='Essential HTML Elements'
      subTitle='Most Frequently Used Elements'
      handleMenuItemClick={props.handleMenuItemClick}
    >

      <LessonSection>

        <Table striped>
          <TR>
            <TH>Element (aka tag)</TH>
            <TH>Description</TH>
          </TR>
          <TR>
            <TD><Code code={'<a>'} html /></TD>
            <TD><b>anchor:</b> creates a clickable link to another web page or site</TD>
          </TR>
          <TR>
            <TD><Code code={'<b>'} html /></TD>
            <TD><b>bold:</b> used to make text bold</TD>
          </TR>
          <TR>
            <TD><Code code={'<br>'} html /></TD>
            <TD><b>line break:</b> use to make text go to the next line</TD>
          </TR>
          <TR>
            <TD><Code code={'<div>'} html /></TD>
            <TD><b>div:</b> use to create groupings of other tabs so they can be formatted and positioned as a group</TD>
          </TR>
          <TR>
            <TD><Code code={'<em>'} html /></TD>
            <TD><b>emphasis:</b> use to <em>emphasize</em> text</TD>
          </TR>
          <TR>
            <TD><Code code={'<footer>'} html /></TD>
            <TD><b>footer:</b> used once at the bottom of the page and typically contains links, copyright, contact information, etc.</TD>
          </TR>
          <TR>
            <TD><Code code={'<h1>'} html /> to <Code code={'<h6>'} html /></TD>
            <TD><b>headings:</b> used to create headings from <span className={styles.sudoH1}>h1</span> ... to ... <span className={styles.sudoH6}>h6</span></TD>
          </TR>
          <TR>
            <TD><Code code={'<header>'} html /></TD>
            <TD><b>header:</b> used to create the header section at the top of the page that typically contains the websites name and a larg picture or slideshow</TD>
          </TR>
          <TR>
            <TD><Code code={'<i>'} html /></TD>
            <TD><b>italic:</b> used to create <i>italic</i> text</TD>
          </TR>
          <TR>
            <TD centerVertical>
              <Code code={"<img>"} html />
            </TD>
            <TD>
              <b>image:</b> is used to put an image on the page.
              {/* <Img src={iImageImage} inline alt="placeholder of image" /> */}
              <img src={iImageImage}  className={styles.imgSmall} alt="placeholder"/>
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<li>'} html />
            </TD>
            <TD>
              <b>List item:</b> used in an ordered <Code code={'<ol>'} html /> or unordered <Code code={'<ul>'} html /> list. See next two rows.
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<ul>'} html/>
            </TD>
            <TD>
              <b>Unordered list</b> used in combination with <Code code={'<li>'} html/> to create a bulleted list of items.
              <ul>
                <li>item 1</li>
                <li>item 2</li>
              </ul>
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<ul>'} html/>
            </TD>
            <TD>
              <b>Ordered list</b> used in combination with <Code code={'<li>'} html/> to create a numbered list of items.
              <ol>
                <li>item 1</li>
                <li>item 2</li>
              </ol>
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<section>'} html />
            </TD>
            <TD>
              <b>section:</b> is just a <Code code={'<div>'} html /> with a special name. Use it to introduce the major parts of your web page such as 'about me', 'my education', 'my favorite games', etc.
            </TD>
          </TR>
          <TR>
            <TD>
              <Code code={'<title>'} html />
            </TD>
            <TD>
              <b>title:</b> use to set the title in the browser tab. The <Code code={'<title>'} html /> tag goes inside of the <Code code={'<head>'} html /> tag at the top of the HTML code.
            </TD>
          </TR>
        </Table>
      </LessonSection>

    </Lesson>
  )
};

export default L02EssentialHTMLElements;
