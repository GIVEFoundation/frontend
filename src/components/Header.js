import React from 'react';
import logo from '../icons/GIVElogo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
return (
<nav className="pa3 pa4-ns bb bw2 gray">
  <Link to={'/'} className="link dim black b f6 f5-ns dib mr3" title="Home">
        <img src={logo} alt="logo"/>
  </Link>
</nav>);
}
export default Header;

