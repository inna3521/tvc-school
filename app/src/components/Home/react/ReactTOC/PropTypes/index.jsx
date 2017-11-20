import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import Section from 'elements/Section'
import P from 'elements/P'
import A from 'elements/A'
import iWarning from './img/warning.png'

const UsingPropTypes = () => {
  return (
    <div id='UsingPropTypes'>
      <Section title='Introduction' level={1}>
        <P>In this lesson, we will discuss a helpful debugging feature in the React ecosystem, called PropTypes.</P>
        <P>PropTypes is used for typechecking a components props.  When props are not passed to the component or are passed with a different type than expected, PropTypes will issue a warning in the console, making debugging easier.</P>
      </Section>
      <Section title='Installation & Import Instructions' level={1}>
        <P>PropTypes is a seperate library from React.  In order to use this library in your app, you must first install it.</P>
        <P>In your terminal, enter the below command:</P>
        <Pre
          code={[
              '$ npm install --save prop-types',
          ]}
        />
        <P>Now that PropTypes is installed, you'll need to import the library in each component that takes props.</P>
        <Pre
          code={[
              "import PropTypes from 'prop-types'",
          ]}
        />
      </Section>
      <Section title='Using PropTypes' level={1}>
        <P>We will revisit our GalleryItem component in the restaurant app to help illustrate how to implement the PropTypes library.</P>

        <Pre
          code={[
            "const GalleryItem = (props) => {",
            "  return (",
            "    <div className='gallery-item'>",
            "      <img src={props.image} alt='' className='gallery-img'></img>",
            "      <div className='image-title'>{props.title}</div>",
            "      <div>{props.description}</div>",
            "      <div>{props.price}</div>",
            "    </div>",
            "  )",
            "}",
            "",
            "GalleryItem.propTypes = {",
            "  image: PropTypes.string.isRequired,",
            "  title: PropTypes.string.isRequired,",
            "  description: PropTypes.string.isRequired,",
            "  price: PropTypes.number.isRequired,",
            "}",
          ]}
        />

        <P>In the above example, we're using PropTypes.string for the props passed to image, title and description. In addition, we've used PropTypes.number to evaluate the prop passed to price.</P>
        <P>Next, we will change the PropTypes validator for price to check for a string instead.</P>
        <Pre
          code={[
              "price: PropTypes.string.isRequired,",
          ]}
        />

        <P>Making the above change will prompt PropTypes to issue the following warning to the console.</P>
        <Img src={iWarning} medium alt='warning message' />
      </Section>
      <Section title='Official Documentation' level={1}>
        <P>For more information on PropTypes features, including a list of all supplied validators, check out the official documentation at <A href='https://reactjs.org/docs/typechecking-with-proptypes.html'>ReactJS</A>.</P>
      </Section>
    </div>
  )
};
export default UsingPropTypes;
