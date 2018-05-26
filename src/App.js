import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import ChooseRole from './components/ChooseRole';
import ParentsPage from './components/ParentsPage';
import KidsPage from './components/KidsPage';
import './App.css';
import './tachyons.min.css';

const history= createHashHistory();

const App = (props) => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={ChooseRole}/>
      <Route exact path="/parents" component={ParentsPage}/>
      <Route exact path="/kids" component={KidsPage}/>
    </div>
  </Router>
);

export default App;
