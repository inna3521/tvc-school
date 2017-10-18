// Project Structure
import React from 'react'
import styles from './style.css'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import UL from '../../elements/UL'
import OL from '../../elements/OL'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection'
import Code from '../../elements/Code'
import Pre from '../../elements/Pre'
import Folder from './Folder'
import LI from '../../elements/LI'
import P from '../../elements/P'
import File from './File'

const ProjectStructure = (props) => {
  const renderStructure = props.shape.map((m, index) => {
    return m.type === 'file'
      ? <File level={m.level}>{m.name}</File>
      : <Folder level={m.level}>{m.name}</Folder>
  })
  return (
    <ul className={styles.fileStructure}>
      {renderStructure}
    </ul>
  )
};

export default ProjectStructure
