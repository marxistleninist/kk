import React from 'react'
import ReactDom from 'react-dom'
import Post from './Post'
import Debate from './Debate'
import history from './history'
import {HashRouter} from 'react-router-dom'
import './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <HashRouter>


        <Router history={history}

          onUpdate={() => window.scrollTo(0, 0)}
        >
          <Switch>
            <Route exact path="/debate" component={Debate}></Route>
            <Route exact path="/" component={Post}></Route>
          </Switch>
        </Router>
      </HashRouter>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
