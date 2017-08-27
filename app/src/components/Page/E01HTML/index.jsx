// E01HTML
import React from 'react'
import { Button } from 'react-bootstrap'

const Lesson01 = (props) => {
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
      <header>
        <p className='lesson-title'>E01 - HTML Outline</p>
      </header>
      <section>
        <h2>Getting started with HTML</h2>
        <ol>
          <li>What is HTML</li>
          <li>Anatomy of an HTML element</li>
          <ol>
            <li>Nesting elements</li>
            <li>Block verses inline elements</li>
            <li>Empty elements</li>
          </ol>
          <li>Attributes</li>
          <ol>
            <li>Boolean attributes</li>
            <li>Omitting quotes around attribute values</li>
            <li>Single or double quotes</li>
          </ol>
          <li>Anatomy of an HTML document</li>
          <ol>
            <li>Whitespace in HTML</li>
          </ol>
          <li>Entity references: including special characters in HTML</li>
          <li>HTML comments</li>
        </ol>
      </section>
      <section>
        <h2>What's in the head? Metadata in HTML</h2>
        <ol>
          <li>What is the HTML head?</li>
          <li>Adding a title</li>
          <li>Metadata: the &lt;meta&gt; element</li>
          <ol>
            <li>Specifying your document's character encoding</li>
            <li>Adding an author and description</li>
            <li>Other types of metadata</li>
          </ol>
          <li>Adding custom icons to your site</li>
          <li>Applying CSS and JavaScript to HTML</li>
          <li>Setting the primary language of the document</li>
        </ol>
      </section>
      <section>
        <h2>HTML text fundamentals</h2>
        <ol>
          <li>The basics: Headings and Paragraphs</li>
          <ol>
            <li>Implementing structural hierarchy</li>
            <li>Why do we need structure?</li>
            <li>Why do we need semantics?</li>
          </ol>
          <li>Lists</li>
          <ol>
            <li>Unordered</li>
            <li>Ordered</li>
            <li>Nesting lists</li>
          </ol>
          <li>Emphasis and importance</li>
          <ol>
            <li>Emphasis</li>
            <li>Strong importance</li>
            <li>Italic, bold, underline...</li>
          </ol>
        </ol>
      </section>
      <section>
        <h2>Creating hyperlinks</h2>
        <ol>
          <li>What is a hyperlink?</li>
          <li>Anatomy of a link</li>
          <ol>
            <li>Adding supporting information with the title attribute</li>
            <li>Block level links</li>
          </ol>
          <li>A quick primer on URLs and paths</li>
          <ol>
            <li>Document fragments</li>
            <li>Absolute versus relative URLs</li>
          </ol>
          <li>Link best practices</li>
          <ol>
            <li>Use clear link wording</li>
            <li>Use relative links wherever possible</li>
            <li>Linking to non-HTML resources — leave clear signposts</li>
            <li>Use the download attribute when linking to a download</li>
          </ol>
          <li>Active learning: creating a navigation menu</li>
          <li>E-mail links</li>
          <ol>
            <li>Specifying details</li>
          </ol>
        </ol>
      </section>
      <section>
        <h2>Advanced text formatting</h2>
        <ol>
          <li>Description lists</li>
          <li>Quotations</li>
          <ol>
            <li>Blockquotes</li>
            <li>Inline quotations</li>
            <li>Citations</li>
          </ol>
          <li>Abberviations</li>
          <li>Marking up contact details</li>
          <li>Superscript and subscript</li>
          <li>Representing computer code</li>
          <li>Marking up times and dates</li>
        </ol>
      </section>
      <section>
        <h2>Document and website structure</h2>
        <ol>
          <li>Basic sections of a document</li>
          <ol>
            <li>header</li>
            <li>navigation bar</li>
            <li>main content</li>
            <li>sidebar</li>
            <li>footer</li>
          </ol>
          <li>HTML for structuring content</li>
          <ol>
            <li>Exercise for creating a page</li>
          </ol>
          <li>HTML layout elements in more detail</li>
          <ol>
            <li>Non-semantic wrappers</li>
            <li>Line breaks and horizontal rules</li>
          </ol>
          <li>Planning a simple website</li>
          <ol>
            <li>Site planning exercise</li>
          </ol>

        </ol>
      </section>
      <section>
        <h2>Debugging HTML</h2>
        <ol>
          <li>Debugging isn't scary</li>
          <li>HTML and debugging</li>
          <ol>
            <li>Permissive code</li>
            <ol>
              <li>Permissive code exercise</li>
            </ol>
          </ol>
          <li>HTML validation</li>
        </ol>
      </section>
      <section>
        <h2>Marking up a letter</h2>
        <p><b>Exercise</b></p>
      </section>
      <section>
        <h2>Structuring a page of content</h2>
        <p><b>Exercise</b></p>
      </section>
    </div>
      )
      };

export default Lesson01;
