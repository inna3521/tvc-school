// Lesson03
import React from 'react'
import styles from './style.css'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import iKingFisherBird from './img/kingfisher-bird.jpg'
import iAdlerBird from './img/adler-bird.jpg'
import iSwans from './img/swans-1436266_640.jpg'
import UL from '../../elements/UL'
import OL from '../../elements/OL'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection'
import Code from '../../elements/Code'
import Pre from '../../elements/Pre'

const FirstHTMLPage = (props) => {
  return (
    <Lesson
      handleMenuItemClick={props.handleMenuItemClick}
    >


      <LessonSection
        title='Project Structure'
      >
        <p>Projects are carfully organized with files and folders. Let's take a quick tour of out project.</p>
        <ul className={styles.fileStructure}>
          <li><i className="fa fa-folder-open-o" aria-hidden="true"></i> Project</li>
          <li className={styles.indent2}><i className="fa fa-folder-open-o" aria-hidden="true"></i> images</li>
          <li className={styles.indent4}><i className="fa fa-file-code-o" aria-hidden="true"></i> puppy-linux.jpg</li>
          <li className={styles.indent2}><i className="fa fa-file-code-o" aria-hidden="true"></i> app.js</li>
          <li className={styles.indent2}><i className="fa fa-file-code-o" aria-hidden="true"></i> <span className={styles.redText}>index.html</span></li>
          <li className={styles.indent2}><i className="fa fa-file-code-o" aria-hidden="true"></i> README.md</li>
          <li className={styles.indent2}><i className="fa fa-file-code-o" aria-hidden="true"></i> style.css</li>

        </ul>


      </LessonSection>
    </Lesson>
  )
};

export default FirstHTMLPage
