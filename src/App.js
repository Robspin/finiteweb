import React, { Fragment } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import History from './components/History';

function App() {
   return (
      <Fragment>
         <Router history={History}>
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route path='/:id' component={SearchPage} />
            </Switch>
         </Router>
      </Fragment>
   );
}

export default App;
