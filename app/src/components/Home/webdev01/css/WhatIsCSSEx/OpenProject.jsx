import React from 'react'
import Section from 'elements/Section'
import OL from 'elements/OL'
import LI from 'elements/LI'

const OpenProject = () => {
  return (
    <Section title='Open Template Project' l1>
      <OL>
        <LI>Open Atom if it is not already open.</LI>
        <LI>If a project is already open then close it.</LI>
        <LI>From the exercises/css folder, open 'the-matrix' project.</LI>
      </OL>
    </Section>
  )
}
export default OpenProject
