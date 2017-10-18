// ModifyProjectStructure
import React from 'react'
import './style.css'
import Pre from './../../elements/Pre'
import Img from '../../elements/Img/index'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection'
import OL from '../../elements/OL'
import UL from '../../elements/UL'
import P from '../../elements/P'
import LI from '../../elements/LI'
import ProjectStructure from '../ProjectStructure'
import origStructure from './orig-structure'
import nextStructure from './next-structure'

const ModifyProjectStructure = (props) => {
  return (
    <Lesson
      title='Modifying Project Structure'
      subTitle=''
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <LessonSection
        title='Overview'
      >
        <P>Create React App creates a very simple project structure. If left this way the project will get unmanagable. A real-life app has many components and a flat list of components will be confusing.</P>
        <P>In class we will use several project organizational methods.</P>
        <OL>
          <LI>One folder for each compoment</LI>
          <LI>Making child components folders inside of their parent</LI>
          <LI>Putting reusable components outside of the main app structure</LI>
        </OL>
        <P>In this lesson, we will begin to make use of methods 1 & 2.</P>
      </LessonSection>
      <LessonSection
        title='Initial Modifications'
      >
        <LessonSection
          title='Current Structure'
          level={2}
        >
          <ProjectStructure shape={origStructure} />
        </LessonSection>
        <LessonSection
          title='New Structure'
          level={2}
        >
          <ProjectStructure shape={nextStructure} />
        </LessonSection>
        <LessonSection
          title='Implement the new structure'
          level={2}>
          <P>Here are a list of steps to create the new project structure. All changes are made inside of the /src directory.</P>
          <OL>
            <LI>Delete App.test.js</LI>
            <LI>Delete logo.svg</LI>
            <LI>Create directory /src/components</LI>
            <LI>Create directory /components/Page</LI>
            <LI>Move App.css & App.js to /components/Page</LI>
            <LI>Rename App.js to index.jsx</LI>
            <LI>Rename App.css to style.css</LI>
          </OL>
        </LessonSection>
        <LessonSection
          title='Modify code to work with the new structure'
          level={2}
        >
          <LessonSection
            title='Page/index.jsx'
            level={3}
          >
            <OL>
              <LI>Delete all code in Page/index.jsx and replace it with the below.</LI>
            </OL>
            <Pre
              code={[
                "import React, { Component } from 'react'",
                "import './style.css'",
                "",
                "const Page = () => {",
                "  return (",
                "    <h1>Hello from the Page component</h1>",
                "  )",
                "}",
                "",
                "export default Page",

              ]}
            />
          </LessonSection>
          <LessonSection
            title='src/index.js'
            level={3}
          >
            <OL>
              <LI>In src/index.js, change the line that reads...</LI>
              <Pre
                code={["Import App from './App'"]} />
              to...
              <Pre code={["Import Page from '.components/Page'"]} />
              ... so that it uses the Page component instead of the App component which no longer exists.
              <LI>Make...</LI>
              <Pre code={["import '/index.css'"]} />
              ... the last import. Since we only have one CSS file imported here this is currently not important but will matter when you add additional CSS files such as Bootstrap.
              <LI>Change...</LI>
              <Pre code={["ReactDOM.render(<App />, document.getElementById('root'));"]} />
              to ...
              <Pre code={["ReactDOM.render(<Page />, document.getElementById('root'));"]} />
              ... so that it is referencing out Page component.
            </OL>
            <P>Your code should now look like this</P>
            <Pre
              code={[
                "import React from 'react'",
                "import ReactDOM from 'react-dom'",
                "import Page from './components/Page'",
                "",
                "import registerServiceWorker from './registerServiceWorker'",
                "import './index.css'",
                "",
                "ReactDOM.render(<Page />, document.getElementById('root'))",
                "registerServiceWorker()",

              ]}
            />
          </LessonSection>
        </LessonSection>
      </LessonSection>
      Checkout your project in the browser, it should look just
    </Lesson>
  )
};
export default ModifyProjectStructure;
