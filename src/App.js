import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextController } from './components/Context';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import History from './components/History';

function App() {
   return (
      <Fragment>
         <ContextController>
            <Router history={History}>
               <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/:id' component={SearchPage} />
               </Switch>
            </Router>
         </ContextController>
      </Fragment>
   );
}

export default App;
