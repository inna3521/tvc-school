import React from 'react'
import PropTypes from 'prop-types'
import Pre from 'elements/Pre'
import Section from 'elements/Section'
import PageTitle from 'elements/PageTitle'
import UL from 'elements/UL'
import P from 'elements/P'
import A from 'elements/A'
import LI from 'elements/LI'

const GetReadyInstallConfig = ({ match }) => {
  return (
    <div>
      <PageTitle title='Getting Ready: Installation & Configuration' match={match}/>

      <Section title='What Is a Development Environment?' level={1}>

        <P>A development environment is a set of procedures and tools for developing, testing and debugging software.</P>
      </Section>
      <Section title="Development Environment for Class" level={1}>
        <UL>
          <LI>Atom - a text editor</LI>
          <LI>npm - a node package manager</LI>
          <LI>yarn - a node package manager</LI>
          <LI>Create React App - a project starter template</LI>
        </UL>
      </Section>
      <Section title='A Note on Hardware and OS' level={1}>
        <P>I always recommend getting the best hardware you can afford and think it is better to buy a used machine than an under-powered new one. Since I only know the hardware I own I don't really know what the minimum hardware requirement is. However, I highly suggest a minimum of a dual-core i5 or better processor and at least 4 gigs of RAM. The machine I use in class is a quad-core i5 with 8 GB of RAM and is up to pretty much anything I need to do.</P>
        <P>Linux, Mac and Windows are all good for class and we have experience using Windows, Mac & Ubuntu.</P>
        <P>The best way to know if your machine is up to the task is to follow the install instructions below and see if your machine is adequately responsive while using Atom.</P>
      </Section>
      <Section title='Installation & Configuration Instructions' level={1}>
        <Section title='NodeJS & npm' level={2}>
          <P>npm is a package manager for NodeJS packages. Some people say 'npm' stands for 'node package manager', but I have also read it doesn't. npm comes with NodeJS, so install Node on your machine and npm will be ready to go.</P>
          <P>Node offers a LTS (long-term support) and 'Current' version. Be sure to install the LTS version.</P>
          <P>You can find Node at
            <A href='https://nodejs.org'>NodeJS</A>. Links to OS specific installations are below.</P>
          <LI>
            <A href='https://nodejs.org/en/download/'>MAC &amp; Windows</A>
          </LI>
          <LI>
            <A href='https://nodejs.org/en/download/package-manager/'>Linux</A>
          </LI>
        </Section>
        <Section title='Yarn' level={2}>
          <P>Yarn is an alternative to npm for managing npm packages. It is used by Create React App and we will use it in this class.</P>
          <UL>
            <LI>
              <A href='https://yarnpkg.com/en/docs/install#linux-tab'>Linux</A>
            </LI>
            <LI>
              <A href='https://yarnpkg.com/en/docs/install#mac-tab'>Mac</A>
            </LI>
            <LI>
              <A href='https://yarnpkg.com/en/docs/install#windows-tab'>Windows</A>
            </LI>
          </UL>
        </Section>
        <Section title='Atom' level={2}>
          <P>You can find Atom at
            <A href='https://atom.io'>atom.io</A>. Links to OS specific installations are below.</P>
          <UL>
            <LI>
              <A href='http://flight-manual.atom.io/getting-started/sections/installing-atom/'>Linux</A>
            </LI>
            <LI>
              <A href='http://flight-manual.atom.io/getting-started/sections/installing-atom/#platform-mac'>Mac</A>
            </LI>
            <LI>
              <A href='http://flight-manual.atom.io/getting-started/sections/installing-atom/#platform-windows'>Windows</A>
            </LI>
          </UL>
          <Section title='Atom Packages' level={3}>
            <P>Atom also has packages to add functionality. Without these added packages Atom is a very basic text editor, but with them it becomes very powerful. You can add packages via the Atom UI or via the 'atom package manager' (apm). We will do the latter.</P>
            <P>On an older or low powered machine Atom will get slow if you add too many packages. Below are 3 levels of packages. Only the first level is really needed. Add the second level if you think you machine is up to it. The third level you can install what is of interest to you.</P>
            <Section title='Level 1 - Required for Class' level={4}>
              <P>In terminal, enter the below command</P>
              <Pre
                code={[
                    '$ apm install highlight-selected intentions language-babel',
                ]}
              />
              />
            </Section>
            <Section title='Highly Recommended for Class' level={4}>
              <Pre
                code={[
                    '$ apm install busy-signal linter linter-css linter-eslint linter-htmlhint linter-ui-default autocomplete-modules autocomplete-paths'
                ]}
              />
            </Section>
            <Section title='Also Very Useful' level={4}>
              <P>All of the below packages are very useful. Look them up on <A href='http://atom.io'>atom.io</A> and install the ones you think you will use. </P>
              <UL>
                <LI>auto-detect-indentation</LI>
                <LI>atom-beautify</LI>
                <LI>atom-html-preview</LI>
                <LI>busy-signal</LI>
                <LI>custom-title</LI>
                <LI>docblockr</LI>
                <LI>git-plus</LI>
                <LI>git-time-machine</LI>
                <LI>markdown-preview-plus</LI>
                <LI>merge-conflicts</LI>
                <LI>open-in-browser</LI>
                <LI>pigments</LI>
                <LI>todo-show</LI>
              </UL>
              <P>If you want to install the above packages use this command:</P>
              <Pre
                code={[
                    '$ apm install auto-detect-indentation atom-beautify atom-html-preview busy-signal custom-title docblockr git-plus git-time-machine markdown-preview-plus merge-conflicts open-in-browser pigments todo-show'
                ]}
              />
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  )
};
GetReadyInstallConfig.propTypes = {
  match: PropTypes.object.isRequired
}
export default GetReadyInstallConfig
