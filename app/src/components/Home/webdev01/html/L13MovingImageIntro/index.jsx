// L01HTMLElements
import React from 'react'
import styles from './style.css'
import Section from 'elements/Section'
import Img from 'elements/Img'
import iPreview from './img/moving-image-preview.png'

const L13MovingImageIntro = (props) => {
  return (
    <div>
      <Section title='Project Demo'>
        <div className={styles.preview}>
          <Img
            src={iPreview}

          />
        </div>
      </Section>
    </div>
  )
};

export default L13MovingImageIntro;
