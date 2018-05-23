import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import MainPage from './containers/MainPage';
import './App.css';

const history= createHashHistory();

const App = (props) => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/sub" component={SubMainPage}/>
      <Route path="/sub/SubPage" component={SubSubPage}/>
    </div>
  </Router>
);

export default App;
