// Home
import React from 'react';
// import styles from './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'
import CodeOfConduct from './CodeOfConduct'
// import Styling from './ReactTOC/Styling'
// import ModifyProjectStructure from './ReactTOC/ModifyProjectStructure'
// import GetReadyInstallConfig from './ReactTOC/GetReadyInstallConfig'
// import FirstReactApp from './ReactTOC/FirstReactApp'
// import FirstReactComponent from './ReactTOC/FirstReactComponent'
// import PropTypes from './ReactTOC/PropTypes'
// import * as ku from '../../lib/ke-utils'
import { routes } from './components'

const Home = (props) => (
  /*
      Components can be functions so I could write a function that returns the fucntions. However, since my components are very large (# lines) that would be pretty messy and they are essentially functions, just in another module.
      Would it be possible to declare all the componets in another module and then just import that one. Don't see why not and would be more tity. Could group components into separate modules based on some category which would make each individual on more managable.
  */

  <Router>
    <div>
      <TopBar />
      <Switch>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            exact={r.exact}
            component={r.component}
          />
        ))}
        <Route path='/code-of-conduct' component={CodeOfConduct} />
      </Switch>
      <Footer />
    </div>
  </Router>
    )

export default Home

// import Footer from './Footer'
// import L01WhatIsHTML from './html-css-js/L01WhatIsHTML'
// import L02EssentialHTMLElements from './html-css-js/L02EssentialHTMLElements'
// import L03FirstHTMLPage from './html-css-js/L03FirstHTMLPage'
// import L04WhatIsCSS from './html-css-js/L04WhatIsCSS'
// import L05CSSChallenge01 from './html-css-js/L05CSSChallenge01'
// import L06JSWhatIsIt from './html-css-js/L06JSWhatIsIt'
// import L07JSVariables from './html-css-js/L07JSVariables'
// import L08JSArrays from './html-css-js/L08JSArrays'
// import L09MozillaThimble from './html-css-js/L09MozillaThimble'
// import L10JSOperators from './html-css-js/L10JSOperators'
// import L11Functions from './html-css-js/L11Functions'
// import L12ControlFlow from './html-css-js/L12ControlFlow'
// import L13MovingImageIntro from './html-css-js/L13MovingImageIntro'
// import L14FunctionsTry2 from './html-css-js/L14FunctionsTry2'
// import Tables from './html-css-js/Tables'


// <Route path='/html/01-what-is-html' component={L01WhatIsHTML} />
// <Route path='/html/02-essential-html-elements' component={L02EssentialHTMLElements} />
// <Route path='/html/03-first-html-page' component={L03FirstHTMLPage} />
// <Route path='/04-css-what-is-it' component={L04WhatIsCSS} />
// <Route path='/05-css-challenge-1' component={L05CSSChallenge01} />
// <Route path='/tables' component={Tables} />
// <Route path='/06-javascript-what-is-it' component={L06JSWhatIsIt} />
// <Route path='/07-javascript-variables' component={L07JSVariables} />
// <Route path='/08-javascript-arrays' component={L08JSArrays} />
// <Route path='/09-mozilla-thimble' component={L09MozillaThimble} />
// <Route path='/10-javascript-operators' component={L10JSOperators} />
// <Route path='/11-javascript-functions' component={L11Functions} />
// <Route path='/12-conditional-control-flow-if' component={L12ControlFlow} />
// <Route path='/13-moving-image-intro' component={L13MovingImageIntro} />
// <Route path='/11-javascript-functions-try-2' component={L14FunctionsTry2} />
