// Name
import React from 'react'
import './style.css'
import Pre from './../../../elements/Pre'
import Img from '../../../elements/Img/index'
import Lesson from '../../../elements/Lesson'
import LessonSection from '../../../elements/LessonSection'
import OL from '../../../elements/OL'
import UL from '../../../elements/UL'
import P from '../../../elements/P'
import LI from '../../../elements/LI'
import A from '../../../elements/A'

const NAME = (props) => {
  return (
    <Lesson
      title='First React Component'
      subTitle=''
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <LessonSection
        title='Overview'
      >
        <P>Our first React component will be a header for our app. We will create it and then render it inside of the Page component. The Header component will be a 'functional' component. We will explore what that means in a later lesson. For now, we will explore the basics of creating a component.</P>
        first component

        - new folder under components
        - name Header
        - index.jsx
        - style.css
        - index.jsx
        - import react
        - import sytle
        - Page index.jsx
        - add the component
        - Adjacent jsx elements ...
        - Put them in div so returns one element
        - mkdir Header/images
        - put the image file in there https://pixabay.com/en/banner-digital-header-strawberry-2003586/
        -
      </LessonSection>
      <LessonSection
        title='Making the Header Component'
      >
        <P>Follow these steps to create the Header component.</P>
        <OL>
          <LI>Create a new folder under /Page named /Header</LI>
          <LI>Inside of /Header, create two files, index.jsx &amp; style.css</LI>
          <LI>Modify index.jsx to match the code below</LI>
          <Pre
            js
            code={[
              "import React from 'react'",
              "import './style.css'",
              "",
              "const Header = () => {",
              "  return (",
              "    <div>",
              "      <h1>Wholesome Foods</h1>",
              "      <h2>Delicious meals made with locally sourced organic ingredients.</h2>",
              "    </div>",
              "}",
              "",
              "export default Header",

            ]}
          />
        </OL>
        <P>Although it could use some styling, the Header component is now complete. However, it won't appear on the page until you render it somewhere. We will do so from the Page component.</P>
      </LessonSection>
      <LessonSection
        title='Rendering the Header Component'
      >
        <P>Edit /Page/index.jsx as follows to render the Header component from within Page</P>
        <OL>
          <LI>Add the below import</LI>
          <Pre
            js
            code={[
              "import Header from './Header'"
            ]}
          />
          <LI>Add line 3 below inside the return statement.</LI>
          <Pre
            js
            code={[
              "return (",
              "  <div>",
              "    <h1>Hello from the Page component</h1>",
              "    <Header />",
              " </div>",
              ")",
            ]}
          />
        </OL>
      </LessonSection>
      <LessonSection
        title="Common Mistakes"
      >
        <LessonSection
          title='Adjacent JSX elements must be wrapped in an enclosing tag ...'
          level={2}
        >
          <P>Inside Header, remove the div that wraps the 2 elements inside the return.</P>
          <Pre
            js
            code={[
              "return (",
              "    <h1>Hello from the Page component</h1>",
              "    <Header />",
              ")",
            ]}
          />
          <P>Switch back to your browser and you will notice an error: "Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag ..."</P>
          <P>Inside of Header we are returning 2 separate JSX elements. React requires all JSX elements be wrapped inside of one parent JSX element.</P>
          <p>Put the div back in the code.</p>
        </LessonSection>
        <LessonSection
          title="export 'default' (imported as 'Header') was not found in './Header'"
          level={2}
        >
          <P>Comment out the list line in Head</P>
          <Pre
            js
            code={[
              "// export default Header"
            ]}
          />
          <P>Forgetting to export a component is a common mistake. All components must be exported.</P>
          <P>Uncomment the export line in Header. Your code should now be working.</P>
        </LessonSection>
      </LessonSection>

    </Lesson>
      )
      };

export default NAME;
