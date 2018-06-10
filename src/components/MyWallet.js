import React from 'react';
import Header from './Header';
import styles from '../App.css'
import splash from '../icons/splash.png';
import user1 from '../icons/user1.png';
const logoStyle = {
  width: '50px',
};
const linkStyle = {
  left:'0px',
  bottom: '0px',
};
const MyWalletPage = (props) => {
  const topStyle = {
    top:'0px',
    right: '0px',
  };
  const heightStyle = {
    top:'0px',
    height: '0px',
  };
return (
 
<article>
  <Header title="MyWallet"/>
  <div className="sidebar"><div className="sidebar-inner">
	  <div className="sidebar-logo">
	      <div className="peers ai-c fxw-nw">
			  <div className="peer peer-greed">
				  <a className="sidebar-link td-n" href="#">
					  <div className="peers ai-c fxw-nw">
						<div className="peer">
							 <div className="logo">
								<img style={logoStyle} src={user1} alt=""/>
							</div>
							</div>
						  <div className="peer peer-greed"><h5 className="lh-1 mB-0 logo-text">Joshua Williams</h5>
						    
						  </div>
					   </div>
					 </a>
			</div>
			  <div className="peer">
				  <div className="mobile-toggle sidebar-toggle"><a href="#" className="td-n"><i className="ti-arrow-circle-left"></i></a>
				  </div>
			  </div>
			  </div>
			  </div>
			  
			  <ul className="sidebar-menu scrollable pos-r ps">
			     <li className="nav-item mT-30 active"><a className="sidebar-link" href="#" default=""><span className="title">Profile Settings</span></a></li>
				 <li className="nav-item"><a className="sidebar-link" href="#"><span className="title">Charity Classified</span></a></li>
				 <li className="nav-item"><a className="sidebar-link" href="#"><span className="title">Incentives</span></a></li>
				 <li className="nav-item"><a className="sidebar-link" href="#"><span className="title">Logout</span></a></li>
			<div className="ps__rail-x" style={linkStyle}><div className="ps__thumb-x" style={linkStyle}></div></div><div className="ps__rail-y" style={topStyle}><div className="ps__thumb-y"  style={heightStyle}></div></div></ul>
			</div>
			</div>

</article>);
}
export default MyWalletPage;
