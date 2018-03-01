import React from 'react'
import './style.css'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import P from 'elements/P'
import A from 'elements/A'
import LessonStatus from 'elements/LessonStatus'
import Code from 'elements/Code'
import Callout from 'elements/Callout'

const JSX = () => {
  return (
    <div id='JSX'>
      <LessonStatus draftOne>

      </LessonStatus>
      <Section title='Introduction' l1>
        <P>This is a brief introduction to JSX. You will learn JSX in-depth in the exercise that follows and as you progress through the course. JSX is a syntax extension to JavaScript, commonly used with React when building the UI of a component.  You can use React without JSX, but JSX makes React much more readable. If you've ever used a template language, such as EJS or Handlebars.js, then the concepts of JSX should feel familiar.  Let's take a look at some basic examples below.</P>
      </Section>

      <Section title="JSX &amp; How it Compares to HTML" l1>
        <P>Most of JSX looks like HTML but isn't. JSX is an extension to the JavaScript language and is compiled by the React library to JavaScript. You will see this in the exercise that follows this lesson.
        </P>
        <P>The example below is valid JSX. There is nothing in the example that isn't also valid HTML except for the user of single quotes and you can use double quotes if that is your preference. As you can see from the example, if you know HTML you already know the majority of JSX.</P>
        <Pre
          code={[
            "<div>",
            "  <header>",
            "    <h1>Some Title Text</h1>",
            "    <i>Some SubTitle Text</i>",
            "  </header>",
            "  <section>",
            "    <h2>Section Title</h2>",
            "    <img src='https://....' alt='some picture' />",
            "  </section>",
            "</div>",
          ]}
        />
        <Section title="Using Attributes with JSX " l2>
          <P>Like HTML, JSX has attributes. The below example shows an <Code code={["<img />"]} /> tag using the 'src' &amp; 'alt' attributes.</P>
          <Pre
            code={[
              "<img src='https://....' alt='some picture' />",
            ]}
          />
        </Section>
      </Section>
      <Section title='Differences Between JSX &amp; HTML'>
        <P>There are a number of differences between JSX &amp; HTML. Fortunately, there are not too many.</P>
        <Section title="className Instead of 'class'" l2>
          <P>'class' is a reserved word in JavaScript and since JSX is JavaScript JSX cannot use 'class' as an identifier. Instaed it uses 'className'.</P>
          <Pre
            code={[
              "<div className='wrapper'></div>",
            ]}
          />
        </Section>
        <Section title='Event Names are camelCase' l2>
          <P>In JSX event names are camelCase</P>
          <Pre
            code={[
              "HTML",
              "<button onclick='sayHello()'>Hello</button>",
              "",
              "JSX",
              "<button onClick='sayHello()'>Hello</button>",
            ]}
          />
        </Section>
        <Section title='All Elements must be Closed' l2>
          <P>All JSX must be closed either with a closing tag or '/>'</P>
          <P>So while in HTML you can do this:</P>
          <Pre
            code={[
              "<img src='image.jpg'>",
            ]}
          />
          <P>In JSX you need to add a '/' to the end.</P>
          <Pre
            code={[
              "<img src='image.jpg' />",
            ]}
          />
        </Section>
      </Section>
      <Section title='Embedding Expressions in JSX' l1>
        <P>Part of the real power in JSX is that you can embed any JavaScript expression within JSX by enclosing it in curly braces. Here is a </P>
        <Pre
          code={[
            "const name = 'Joe'",
            "<p>I'm going to learn coding with {name}</p>",
          ]}
        />
      </Section>
      <Section title='Editor Syntax Highlighting' l1>
        <P>It's likely that your editor of choice will not recognize JSX syntax.  This can make for an unpleasurable coding experience.  Check out <A href='http://babeljs.io/docs/editors'>Babel for editors</A> to add JSX syntax highlighting to your favorite editor!</P>
      </Section>
      <Section title='Official Documentation' l1>
        <P>For more information on JSX check out the official documentation at <A href='https://reactjs.org/docs/introducing-jsx.html'>ReactJS</A>.</P>
      </Section>
      <Callout goal>
        <P>Worry not if you don't understand everything in this lesson. In the sections ahead, each subject will be revisited and explained in more detail.</P>
      </Callout>
    </div>
  )
};

export default JSX;
