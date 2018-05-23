import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import par from '../icons/parent.jpg';
import kid from '../icons/kids.png';

const ChooseRole = (props) => {
return (
<article>
  <Header title="Choose Role"/>
  <div className="cf pa2">
    <div className="fl w-50 pa2">
      <Link to={'/'} className="db link dim tc">
        <img className="w5 h5" src={par} alt="parent"/>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">Parent</dd>
        </dl>
      </Link>
    </div>
    <div className="fl w-50 pa2">
      <Link to={'/'} className="db link dim tc">
        <img className="w5 h5" src={kid} alt="kid"/>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">Kid</dd>
        </dl>
      </Link>
    </div>
  </div>
</article>);
}
export default ChooseRole;

