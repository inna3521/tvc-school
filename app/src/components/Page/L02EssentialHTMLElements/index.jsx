// Lesson02
import React from 'react'
import styles from './style.css'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection/index'
import Img from './../../elements/Img'
import iImageImage from './img/image-image.png'
import Table from '../../elements/Table'
import LT from '../../elements/LT'
import GT from '../../elements/GT'
import AMP from '../../elements/AMP'

const Lesson02 = (props) => {
  const rows = [
    [
      <pre language='html'><LT/>img<GT/>;</pre>,
      [<b>image:</b>, ' is used to put an image on the page.',
      <Img
        src={iImageImage}
        size='inline'
        alt=""
      />]
    ],
    [
      <pre><LT/>ul<GT/> <AMP/> <LT/>li<GT/></pre>,
      [<b>unordered list</b>, ' is used to create a bulleted list of items ', <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>]
    ],
    [
      <pre><LT/>ol<GT/> <AMP/> <LT/>li<GT/></pre>,
      [<b>ordered list</b>, ' is used to create a numbered list of items ',
      <ol>
        <li>item 1</li>
        <li>item 2</li>
      </ol>]
    ],
    [
      <pre><LT/>section<GT/></pre>,
      [<b>section:</b>, ' used to set the title in the browser tab. The ', <LT/>]
    ],
    [
      <pre><LT/>title<GT/></pre>,
      'problem 2'
    ],
    [
      <pre><LT/>video<GT/></pre>,
      [<b>video:</b>, ' use to put a video on the page', <br/>,
      <iframe className={styles.videoTag} width='160' height='90' title='dont mine a night' src="https://www.youtube.com/embed/X_XGxzMrq04" frameBorder="0" allowFullScreen>
      </iframe>]
    ]
  ]

  return (
    <Lesson
      title='Essential HTML Elements'
      sutTitle='Most Frequenty Used Elements'
      handleMenuItemClick={props.handleMenuItemClick}
    >


      <LessonSection>
        <h2>List of Essential Tags</h2>
        <p>These are the most frequently used tags.</p>
        <Table
          colLabels={
              [
              'Elements (aka tags)',
              'Description'
              ]
          }

          rowData={rows}
        />

      </LessonSection>
      <footer>
        About MDN by <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"><span className={styles.mdnContributors}></span>Mozilla Contributors</a> is licensed under <a href="http://creativecommons.org/licenses/by-sa/2.5/">CC-BY-SA 2.5</a> .
      </footer>

    </Lesson>
      )
      };

      export default Lesson02;
