// Project Structure
import React from 'react'
import styles from './style.css'
import Folder from './Folder'
import File from './File'
import Component from './Component'

const ProjectStructure = (props) => {
  const renderStructure = props.shape.map((m, index) => {
    switch (m.type) {

      case 'folder':
        return <Folder level={m.level}>{m.name}</Folder>
      case 'component':
        return <Component level={m.level}>{m.name}</Component>
      case 'file':
      default:
        return <File level={m.level}>{m.name}</File>
    }
  })
  return (
    <ul className={styles.fileStructure}>
      {renderStructure}
    </ul>
  )
};

export default ProjectStructure
