// L01HTMLElements
import React from 'react'
import styles from './style.css'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection/index'
import UL from '../../elements/UL'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import iPreview from './img/moving-image-preview.png'

const L13MovingImageIntro = (props) => {
  return (
    <Lesson
      title='Moving Image Project'
      subTitle='Introduction'
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <LessonSection
        title='Project Demo'
      >
        <div className={styles.preview}>
          <Img
            src={iPreview}

          />
        </div>
      </LessonSection>
    </Lesson>
  )
};

export default L13MovingImageIntro;
