// MenuAppHeader
import React from 'react'
import Section from 'elements/Section'
import PageTitle from 'elements/PageTitle'
import P from 'elements/P'

const CodeOfConduct = (props) => {
  return (
    <div>
      <PageTitle title='TriValley Coders' subTitle='Code of Conduct' back={props.match}/>
      <Section title='Rules' level={1}>


        <Section title='Be considerate' level={2}>
          <P>Your words and actions will affect others in this community and you will in turn depend on the words and actions of others. Any decision you take will affect other community members, and we expect you to take those consequences into account when making decisions.</P>
        </Section>
        <Section title='Be respectful' level={2}>
          <P>We don’t all agree all of the time but disagreement is no excuse for poor behavior and poor manners.</P>
        </Section>
        <Section title='Be helpful & collaborative' level={2}>
          <P>We are all learning together. Members of the community will do their best to offer you help and you are encouraged to help others when you can.</P>
        </Section>
        <Section title='Be pragmatic' level={2}>
          <P>This community is results oriented. We value tangible results over having the last word in a discussion and don’t have arguments.</P>
        </Section>

        <Section title='Be patient' level={2}>
          <P>TriValley Coders is built on volunteer time from both participants and organizers. Both organizers and participants help when they have time. As a result, your questions may not get an immediate response.</P>
        </Section>
        <Section title='Be nice' level={2}>
          <P>Everyone is welcome regardless of their background. Please be courteous, respectful and polite to fellow community members. Offensive comments related to gender, gender identity or expression, sexual orientation, disability, physical appearance, body size, race, religion; no sexual images in public spaces, real or implied violence, intimidation, oppression, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, or unwelcome sexual attention will not be tolerated.</P>
        </Section>
        <Section title='Communicate effectively' level={2}>
          <P>We don't all speak the same language at the same skill level. Clear communication can help to avoid misunderstandings, as can remembering that our interpretations of words can be different depending on our backgrounds. Having context is important. It's better to ask for clarification than to make assumptions. Disagreements, social and technical, are normal, but we expect participants in the project to resolve disagreements constructively — so please avoid flamewars, trolling, personal attacks, and repetitive arguments.</P>
        </Section>
      </Section>
      <Section title='Policy' level={1}>
        <P>Harassment includes offensive verbal comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</P>
        <P>Participants asked to stop any harassing behavior are expected to comply immediately. Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, activities, or other material. Organizers and other volunteers should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.</P>
        <P>If a participant engages in harassing behavior, the organizers may take any action they deem appropriate, including warning the offender of expulsion from the community.</P>
      </Section>
    </div>
  )
};

export default CodeOfConduct;
