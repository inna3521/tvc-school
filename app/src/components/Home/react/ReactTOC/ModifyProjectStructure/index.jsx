import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import PageTitle from 'elements/PageTitle'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import OL from 'elements/OL'
import P from 'elements/P'
import LI from 'elements/LI'
import ProjectStructure from 'elements/ProjectStructure'
import origStructure from './orig-structure'
import nextStructure from './next-structure'

const ModifyProjectStructure = ({ match }) => {
  return (
    <div>
      <PageTitle title='Modifying Project Structure' match={match} />
      <Section title='Overview' level={1}>
        <P>Create React App creates a very simple project structure. If left this way the project will get unmanagable. A real-life app has many components and a flat list of components will be confusing.</P>
        <P>In class we will use several project organizational methods.</P>
        <OL>
          <LI>One folder for each compoment</LI>
          <LI>Making child components folders inside of their parent</LI>
          <LI>Putting reusable components outside of the main app structure</LI>
        </OL>
        <P>In this lesson, we will begin to make use of methods 1 & 2.</P>
      </Section>
      <Section title='Initial Modifications' level={1}>
        <Section title='Current Structure' level={2}>
          <ProjectStructure shape={origStructure} />
        </Section>
        <Section title='New Structure' level={2}>
          <ProjectStructure shape={nextStructure} />
        </Section>
        <Section title='Implement the new structure' level={2}>
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
        </Section>
        <Section title='Modify code to work with the new structure' level={2}>
          <Section title='Page/index.jsx' level={3}>
            <OL>
              <LI>We will learn about React components in a later lesson. For now, delete all code in Page/index.jsx and replace it with the below.</LI>
            </OL>
            <Pre
              code={[
                "import React, { Component } from 'react'",
                "import './style.css'",
                "",
                "class Page extends Component",
                "  render() {",
                "    return (",
                "      <h1>Hello from the Page component</h1>",
                "    )",
                "  }",
                "}",
                "",
                "export default Page",

              ]}
            />
          </Section>
          <Section title='src/index.js' level={3}>
            <OL>
              <LI>In src/index.js, change the line that reads...</LI>
              <Pre
                code={["Import Page from './App'"]} />
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
          </Section>
        </Section>
      </Section>
      Checkout your project in the browser, it should look just
    </div>
  )
};
ModifyProjectStructure.propTypes = {
  match: PropTypes.object.isRequired
}
export default ModifyProjectStructure;
