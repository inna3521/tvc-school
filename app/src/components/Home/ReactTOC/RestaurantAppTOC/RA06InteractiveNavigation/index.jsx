// RA05InteractiveNavigation
import React from 'react'
import PageTitle from 'elements/PageTitle'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Img from 'elements/Img'
import OL from 'elements/OL'
import LI from 'elements/LI'
import P from 'elements/P'
import A from 'elements/A'
import Hint from 'elements/Hint'
import iNavSignedOut from './img/nav-signedout.png'
import iNavSignedIn from './img/nav-signedin.png'

const RA05InteractiveNavigation = (props) => {
  return (
    <div>
      <PageTitle title='Interactive Navigation' subTitle='Using State &amp; Events' back={props.match} />
      <Section title='Introduction' level={1}>
        <P>In this section you will make the navigation interactive by adding a Sign-in button that toggles to Sign-out. Additionally, when Sign-in is active, an Edit Menu button will appear.</P>
        <P>Here is the menu with Sign-in active (user is not signed-in)</P>
        <Img src={iNavSignedOut} medium alt='nav with user signed-out' />
        <P>Here is the menu with Sign-out active</P>
        <Img src={iNavSignedIn} medium alt='nav with user signed-out' />
      </Section>
      <Section title='Requirements' level={1}>
        The Menu must meet these requirements:
        <OL>
          <LI>Use <A href='https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator'>Conditional Rendering</A> to show &amp; hide nav items</LI>
          <LI>Signed-out state: When the user is not signed-in, the Nav component must display a 'Sign-in' button</LI>
          <LI>Signed-in state: When the user is signed-in the Nav component must display 'Sign-out' & 'Edit Menu' buttons</LI>
          <LI>Clicking 'Sign-in' will:
            <OL>
              <LI>change the Nav state from signed-out to signed-in</LI>
              <LI>set a variable in state named 'signedIn' to true</LI>
              <LI>result in the 'Edit Menu' button being displayed</LI>
            </OL>
          </LI>
          <LI>Clicking 'Sign-out' will:
            <OL>
              <LI>change the Nav state from signed-in to signed-out</LI>
              <LI>set a variable in state named 'signedIn' to false</LI>
              <LI>result in the 'Edit Menu' button being hidden</LI>
            </OL>
          </LI>
          <LI>Clicking 'Edit Menu' will print 'edit menu mode' to the console</LI>
        </OL>
      </Section>
      <Section title='Tips'>
        <P>Look at the mock-up of the final UI and give some thought to what component should maintain state. Think about where the items of state will be needed.</P>
      </Section>
      <Section title='Hints' level={1}>
        <Hint>
          <P>You will need to implement an event for the button click. Information for implementing events is at <A href='https://reactjs.org/docs/handling-events.html'>Handling Events</A>.</P>
        </Hint>
        <Hint>
          <P>Did you check-out <A href='https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator'>Conditional Rendering</A>?</P>
        </Hint>
        <Hint>
          <P>For info on which component(s) should maintain state see the official React doc <A href='https://reactjs.org/docs/lifting-state-up.html'>Lifting State Up</A>.</P>
        </Hint>
        <Hint>
          <P>For implementing and using state see <A href='https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class'>Adding Local State to a Class</A> and <A href='https://reactjs.org/docs/state-and-lifecycle.html'>State and Lifecycle</A>.</P>
        </Hint>
        <Hint>
          <P>Remember, don't change state directly. Use this.setState.</P>
        </Hint>
      </Section>
      <Section title='Structure &amp; CSS' level={1}>
        <P>The button below reveals part of the answer. Don't click it until you have met the requiremets outlined above.</P>
        <Hint title='JSX for Nav'>
          <Pre
            code={[
              "<ul className='nav-ul'>",
              "  <li><a href='#menu'><button className='button'>Menu</button></a></li>",
              "  <li><a href='#gallery'><button className='button'>Gallery</button></a></li>",
              "  <li><a href='#location'><button className='button'>Location</button></a></li>",
              "  <li><a href='#our-story'><button className='button'>Our Story</button></a></li>",
              "  {",
              "    props.signedIn",
              "      ? <div className='sign-in'>",
              "        <li><button className='button' onClick={props.handleEditMenuClick}>Edit Menu</button></li>",
              "        <li><button className='button' onClick={props.handleSignInClick}>Sign-out</button></li>",
              "      </div>",
              "      : <div className='sign-in'>",
              "        <li><button className='button' onClick={props.handleSignInClick}>Sign-in</button></li>",
              "        </div>",
              "  }",
              "</ul>",
            ]}
          />
        </Hint>
      </Section>
    </div>
      )
      };

      export default RA05InteractiveNavigation;
