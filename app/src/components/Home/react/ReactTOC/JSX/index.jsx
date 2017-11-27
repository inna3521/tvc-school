import React from 'react'
import './style.css'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import P from 'elements/P'
import A from 'elements/A'
import LessonStatus from 'elements/LessonStatus'
import LI from 'elements/LI'
import OL from 'elements/OL'
import Code from 'elements/Code'

const JSX = () => {
  return (
    <div id='JSX'>
      <LessonStatus underConstruction>
        <LI>Compare JSX to HTML</LI>
        <LI>Attributes</LI>
        <LI>HTML JSX Differences
          <OL>
            <LI>className vs class</LI>
            <LI>Event names camelCase</LI>
            <LI>When a JSX element has no children it is self closing <Code code={["<img />"]} /></LI>
          </OL>
        </LI>
        <LI>Embedding expressions, use className = value ? classA : classB </LI>
        <LI>User defined components.</LI>
        <LI><b>Questions</b>
          <LI>Reason for 'className' instad of 'class' is? 'class' is a keyword in javascript. Therefore the React team has choosen to not use them to avoide name conflicts. Additional, in javascript the propsert of an element to set the 'class' is className, so using className provides consistency..</LI>
          <OL>
            <LI>Not sure about the handlebars thing</LI>
            <LI>Make this an <b>exercise</b>: Use <A href='https://babeljs.io/repl/'>Babel REPL</A> to demonstrate what is happening behind the scenes.</LI>
          </OL>
        </LI>
      </LessonStatus>
      <Section title='Introduction' level={1}>
        <P>This is a brief introduction to JSX. You will learn JSX in-depth in the exercise that follows and as you progress through the course. JSX is a syntax extension to JavaScript, commonly used with React when building the UI of a component.  You can use React without JSX, but JSX makes React much more readable. If you've ever used a template language, such as EJS or Handlebars.js, then the concepts of JSX should feel familiar.  Let's take a look at some basic examples below.</P>
      </Section>

      <Section title="JSX &amp; How it Compres to HTML" level={1}>
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
        <Section title="Using Attributes with JSX " level={2}>
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
        <Section title="className Instead of 'class'" level={2}>
          <P>'class' is a reserved word in JavaScript and since JSX is JavaScript JSX cannot use 'class' as an identifier. Insted it uses 'className'.</P>
          <Pre
            code={[
              <div className='wrapper'></div>
            ]}
          />
        </Section>
        <Section title='Event Names are camelCase' level={2}>
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
        <Section title='All Elements must be Closed' level={2}>
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
      <Section title='Embedding Expressions in JSX' level={1}>
        <P>Part of the real power in JSX is that you can embed any JavaScript expression within JSX by inclosing it in curley brases. Here is a </P>
        // JavaScript
        const name = 'Joe'
        
        <Pre
          code={[
              "<div className='header'>",
              "  <h1>Children Text</h1>",
              "  <Nav signedIn={props.signedIn} />",
              "</div>",

          ]}
        />
        <P>Line three, from the code snippet above, is an example of a self-closing tag, which is used when there are no children.</P>
        <P>It is also an example of a user defined component.  Where as div and h1 are built-in components, user defined components must be capitalized.</P>
      </Section>

      <Section title='Editor Syntax Highlighting' level={1}>
        <P>It's likely that your editor of choice will not recognize JSX syntax.  This can make for an unpleasurable coding experience.  Check out <A href='http://babeljs.io/docs/editors'>Babel for editors</A> to add JSX syntax hightlighting to your favorite editor!</P>

      </Section>
      <Section title='Official Documentation' level={1}>
        <P>For more information on JSX check out the official documentation at <A href='https://reactjs.org/docs/introducing-jsx.html'>ReactJS</A>.</P>
      </Section>
    </div>
  )
};

export default JSX;
