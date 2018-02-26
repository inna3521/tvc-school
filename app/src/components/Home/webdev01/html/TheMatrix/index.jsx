import React from 'react'
import Pre from 'elements/Pre'

const TheMatrix = () => {
  return (
    <div>

      <Pre
        linesAdded={[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
        code={[
          '<!DOCTYPE html>',
          '<html>',
          '<head>',
          '  <meta charset="utf-8">',
          '  <link rel="stylesheet" href="bootstrap.min.css">',
          '  <title>p-html-01</title>',
          '</head>',
          '<body>',
          '  <header>',
          '    <h1>Your Name</h1>',
          '    <h2>Software Student</h2>',
          '  </header>',
          '  <section>',
          '    <p>I am currently learning HTML. This is my first web page.</p>',
          '    <p>Indenting keeps things organized.</p>',
          '  </section>',
          '  <section>',
          '    <h2>The Matrix</h2>',
          '    <img src="matrix.jpg" alt="">',
          '  </section>',
          '</body>',
          '</html>',
        ]}
      />
    </div>
  )
}
export default TheMatrix
