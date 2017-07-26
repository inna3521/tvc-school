// Lesson03
import React from 'react'
import { Button } from 'react-bootstrap'
import Img from './../../elements/Img'
import Callout from './../../elements/Callout'
import iKingFisherBird from './img/kingfisher-bird.jpg'
import iAdlerBird from './img/adler-bird.jpg'
import iSwans from './img/swans-1436266_640.jpg'

const Lesson03 = (props) => {
  // console.log('html', lesson.html);
  return (
    <div>
      <Button
        bsStyle='primary'
        onClick={() => props.handleMenuItemClick()}
      >
        Back
      </Button>
      <hr/>

      <header >
        <p className='lesson-title'>HTML Challenge 1</p>
        <p className='lesson-sub-title'>Make a Page with HTML Only</p>
      </header>
      <section>
        <h2>Getting Ready</h2>
        <p>Here are some things to decide upon and organize before you begin.</p>
        <ul>
          <li>Open a file to take notes</li>
          <li>Decide on your web page's topic. This can be anything that interests you like Pokemon or Transformers.</li>
          <li>Find 3 to 5 pictures related to your subject. For each picture, save the URL in your notes.</li>
          <li>Find 1 to 2 videos YouTube related to you subject. For each video save the embed code.</li>
        </ul>
        <h2>The Challenge</h2>
        <p>To successfully complete this challenge you must have on your page all of the below requirements</p>
        <ol>
          <li>The browser tab must have the title of your site</li>
          <li>Header: The header must have a title and a slogan, motto or tagline.</li>
          <li>Each section must have a title</li>
          <li>First section: 'About', tells the reader what you subject is.</li>
          <li>Second section: 'Pictures', shows pictures of your subject.</li>
          <li>Third section: 'Videos', shows videos of your subject</li>
          <li>Each picture and video must have a comment that tells the reader what it is.</li>
          <li>Footer: The footer must have 1 or more links to information about your subject.</li>
        </ol>
      </section>
      <section>
        <h2>Tips & Additional Requirements</h2>
        <ul>
          <li>You must get all images from <a href="https://pixabay.com/">pixabay</a></li>
        </ul>
        <Callout
          type='warning'
          title='Be save on the internet'
          text={[
            "If you listen to or read the news regulary then you already know that it is easy to get a virus or other malware (malware = 'software that is intended to damage or disable computers and computer systems'). Be careful what websites you use. The creators of malware put a great deal of effort into tricking people into clicking onto something that isn't safe.",
            `To stay safe, we will use images from ${<a href="https://pixabay.com/">pixabay</a>}. Pixabay does not have advertising and you do not have to create an account.`
          ]}

        >
        </Callout>
      </section>
      <section>
        <h2>Sample Page</h2>
        <div className="sample-page bg-gray">
          <header>
            <h1>BIRDS</h1>
            <p className="lead">Flying Higher Because They Can</p>
          </header>
          <section>
            <h2>About Birds</h2>
            <p>There are so many types of birds. Most birds can fly but not all of them can. For example, a chicken is a bird but it cannot fly (at least I have never seen one fly).</p>
            <p>Here is what Wikipedia has to say about birds ...</p>
            <blockquote cite="https://en.wikipedia.org/wiki/Bird">
              Birds (Aves) are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5 cm (2 in) bee hummingbird to the 2.75 m (9 ft) ostrich. They rank as the class of tetrapods with the most living species, at approximately ten thousand, with more than half of these being passerines, sometimes known as perching birds. Birds are the closest living relatives of crocodilians. Birds are descendants of extinct dinosaurs with feathers, making them the only surviving dinosaurs according to cladistics.
            </blockquote>
          </section>

          <section>
            <h2>Bird Pictures</h2>
            <p>Some birds are very colorful like this Kingfisher.</p>
            <Img src={iKingFisherBird} alt="" />
            <p>Some birds have sharp beaks.</p>
            <img src={iAdlerBird} alt="" />
            <p>Some birds like to live in the water.</p>
            <img src={iSwans} alt="" />
          </section>
          <section>
            <h2>Bird Video</h2>
            <p>Here is a National Geographic Documentary on Bald Eagles</p>
            <iframe width="854" height="480" src="https://www.youtube.com/embed/eiyOtUwJiDo" frameBorder="0" allowFullScreen>
            </iframe>
          </section>
        </div>
      </section>






      </div>
      )
      };

export default Lesson03;
