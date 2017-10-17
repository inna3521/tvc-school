// Name
import React from 'react'
import './style.css'
import Pre from './../../elements/Pre'
import Img from '../../elements/Img/index'
import Lesson from '../../elements/Lesson'
import LessonSection from '../../elements/LessonSection'
import OL from '../../elements/OL'
import UL from '../../elements/UL'
import P from '../../elements/P'

const NAME = (props) => {
  return (
    <Lesson
      title=''
      subTitle=''
      handleMenuItemClick={props.handleMenuItemClick}
    >
      <LessonSection
        title=''
      >
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

    </Lesson>
  )
};

export default NAME;
