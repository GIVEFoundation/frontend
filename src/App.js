import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import ChooseRole from './components/ChooseRole';
import ParentsPage from './components/ParentsPage';
import KidsPage from './components/KidsPage';
import MyWalletPage from './components/MyWallet';
import HomePage from './components/Home';
import SignInPage from './components/SignIn';
import './App.css';
import './tachyons.min.css';

const history= createHashHistory();

const App = (props) => (
  <Router history={history}>
    <div>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/Home" component={HomePage}/>
    <Route exact path="/SignIn" component={SignInPage}/>
    <Route exact path="/MyWallet" component={MyWalletPage}/>
      {/* <Route exact path="/" component={ChooseRole}/>
      <Route exact path="/parents" component={ParentsPage}/>
      <Route exact path="/kids" component={KidsPage}/>
      <Route exact path="/MyWallet" component={MyWalletPage}/> */}
    </div>
  </Router>
);

export default App;
