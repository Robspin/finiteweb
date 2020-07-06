import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextController } from './components/Context';

import Home from './components/Home';
import Search from './components/Search';
import History from './components/History';

function App() {
   return (
      <Fragment>
         <ContextController>
            <Router history={History}>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/:id' component={Search} />
               </Switch>
            </Router>
         </ContextController>
      </Fragment>
   );
}

export default App;
