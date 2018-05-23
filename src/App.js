import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import ChooseRole from './components/ChooseRole';
import './App.css';
import './tachyons.min.css';

const history= createHashHistory();

const App = (props) => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={ChooseRole}/>
    </div>
  </Router>
);

export default App;
