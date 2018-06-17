import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css'
import splash from '../icons/splash.png';
const HomePage= (props) => {
  
return (
 
<article>
  
  <div className="cf pa2">
    <div className="fl w-50 pa2">
      <Link to={'/SignIn'} className="db link dim tc">
        <img className="infobox" src={splash} alt="GIV"/>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Parents</dt>
          <dd className="ml0 black truncate w-100">GIVE</dd>
        </dl>
      </Link>
    </div>
    </div>
</article>);
}
export default HomePage;
