// Lesson03
import React from 'react'
import styles from './style.css'
import UL from '../../elements/UL'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection'
import Pre from '../../elements/Pre'

const FirstHTMLPage = (props) => {
  return (
    <Lesson
      title='First HTML Page'
      subTitle='Make a Page with HTML Only'
    >
      <LessonSection>
        <p>In this lesson, you will be building a web page with HTML only, using all of the tags introduced in the previous section. Before you start writing HTML we need to discuss code formatting.</p>
      </LessonSection>
      <LessonSection
        title='Code Formatting - HTML'
      >
        <p>All programmers carefully format their code and anyone who does not will not be taken seriously by the development community or potential employers. Development groups each have their own preferences, but the amount of variation in the industry is not vast.</p>
        <p>Code formatting involves things like how may spaces to indent, whether to use spaces or tabs for indenting or how long lines of code should be.</p>
        <p>Delelopers have very strong feelings about how code should be formatted. Arguing over 2 space vs. 4 space indent is not uncommon. If you are joining a development team, immediately adopt their formatting standards. Not doing so will make you unwelcome.</p>
        <p>Here is some nicely formatted code:</p>
        <Pre
          language='html'
          code={[
            '<body>',
            '  <header>',
            '    <h1>Page Header</h1>',
            '  </header>',
            '  <div class="wrapper">',
            '    <p>A paragraph of text</p>',
            '    <p>Another paragraph of text</p>',
            '  </div>',
            '</body>',
          ]}
        />
        <p>In the above sample</p>
        <UL
          listItems={[
            'Each element that is inside of another element is indented 2 spaces more than its containing element.',
            'While not visible, the indent is spaces and not tabs.',
          ]}
        />
        <p>For the moment, the above 2 bullet points are our coding standard. We will specify more as the course progresses.</p>
      </LessonSection>
      <LessonSection
        title='Getting Ready'
      >
        <p>In a future lesson you will be creating a HTML page from scratch. For this first introduction to HTML you will start with a project template.</p>
        <p><b>down load the prject, will it be from github or on a flash drive or a download from google drive. In any event, consider it downloaded.</b></p>
        <p><b>open the project in whatver editor we will be using</b></p>
      </LessonSection>
      <LessonSection
        title='Project Structure'
      >
        <p>Projects often have many files organized by folders. While there is not one correct name for them, there are conventions. In future lessons we will be adding more files and folders to our project will get into the details of project structure once it has sufficient complexity. </p>
        <p>Our current project structure is shown below. Your HTML code will be entered in index.html. Open it now.</p>
        <p><b>do something with README.md, they should open the project folder and not index.html. All left depending on what editor they will be using.</b></p>
        <ul className={styles.fileStructure}>
          <li><i className="fa fa-folder-open-o" aria-hidden="true"></i> first-html-page</li>
          <li className={styles.indent2}><i className="fa fa-file-code-o" aria-hidden="true"></i> index.html</li>
          <li className={styles.indent2}><i className="fa fa-file-code-o" aria-hidden="true"></i> README.md</li>
        </ul>


      </LessonSection>
    </Lesson>
  )
};

export default FirstHTMLPage
