// L01HTMLElements
import React from 'react'
import styles from './style.css'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection/index'
import Img from './../../elements/Img'
import iPreview from './img/moving-image-preview.png'

const L13MovingImageIntro = (props) => {
  return (
    <Lesson
      title='Moving Image Project'
      subTitle='Introduction'
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
