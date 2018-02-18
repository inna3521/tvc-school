import React from 'react'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import Callout from 'elements/Callout'
import LessonStatus from 'elements/LessonStatus'
import UL from 'elements/UL'
import LI from 'elements/LI'

const InstallingAtom = () => {
  return (
    <div id='InstallingAtom'>
      <LessonStatus outline>

      </LessonStatus>
      <Section title='Adding Packages To Atom' level={1}>
        <p>You can greatly enhance the functionality in Atom by installing packages. Here is a list of recommended packages.</p>
        <UL>
          <li>atom-beautify</li>
          <li>atom-ternjs</li>
          <li>auto-detect-indention</li>
          <li>autocomplete-modules</li>
          <li>autocomplete-paths</li>
          <li>busy-signal</li>
          <li>highlight-selected</li>
          <li>intensions</li>
          <li>language-babel</li>
          <li>linter</li>
          <li>linter-csslint</li>
          <li>linter-eslint</li>
          <li>linter-htmlhint</li>
          <li>linter-ui-default</li>
          <li>open-in-browser</li>
        </UL>
        <p>The easiest way to install packages in via the commandline with the below command</p>
        <Pre
          code="$ apm atom-beautify atom-ternjs auto-detect-indention autocomplete-modules autocomplete-paths busy-signal highlight-selected intensions language-babel linter linter-csslint linter-eslint linter-htmlhint linter-ui-default open-in-browser"
        />
      </Section>
    </div>
  )
};

export default InstallingAtom
