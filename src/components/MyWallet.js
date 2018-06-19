import React from 'react';
import Header from './Header';
import styles from '../App.css'
import splash from '../icons/splash.png';
import user1 from '../icons/user1.png';
import charity from '../icons/charity_card.png';
import charity1 from '../icons/charity_card1.jpg';
import charity2 from '../icons/charity_card2.png';
import sunimage from '../icons/sun.png';
import fabimage from '../icons/fab.png';
import userpic from '../icons/userpic_3.jpg';
import communityimg from '../icons/icommunity.png';
import istoreimg from '../icons/istore.png';
import iactivewalletimg from '../icons/iactivewallet.png';
import icharityimg from '../icons/icharity.png';
import imenuimg from '../icons/imenu.png';

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
	const marginStyle = {
		margin:'10px', // note the capital 'W' here
	
	};
	const width90 = {
		width:'90%', // note the capital 'W' here
	
	};
	const width10 = {
		width:'10px', // note the capital 'W' here
	
	};
return (
 
<article>
<div className="page-container">
			
				<main className="main-content bgc-grey-100">
				 <div id="">
				  <div id="container-fluid">
					<div className="row">	
						
						<div className="col-md-8">
							<div className="bdrs-3 ov-h bgc-white bd ">
							    
								<div className="bgr-n bgpX-c bgpY-c bgsz-cv bg-head bgc-grey-700 ta-l p-15">
								
									<div className="menu-btn row pL-5 pR-5">
										
										<h5 style={width90} className="text-white pL-10 fw-600" >My Wallet</h5>
										
										<div style={width10} className="fl-r ta-l -5">
											<span className="help-circle">
											<i className=" help ti-help"></i>
											</span>
										</div>
									</div>
									<div className="sun-img"><img src={sunimage}/></div>
									<div className="tree-img"><a href="sub-wallet.html" title="Sub Wallet">
									<img src="assets/static/images/tree.png" /></a></div>
									
									<h6 className="amt-pdd give-amt-title mB-0 pB-0 fw-600 c-white">Give Amount</h6>
									<h3 className="give-amt pB-0 mB-0 fw-600 c-white">103 000</h3>
								</div>
								
								<div className="pos-r pL-5 pR-5">
								
									<a href="send_giv1.html">
									 <img className="mT-nv-30 pos-r r-10 t-2 fl-r send-giv-btn" src={fabimage} /></a>
							   
									<br/>
									
									<h5 className="pT-10 pL-15  lh-1 head-text fw-600">Donate GIV</h5>
								  
								</div>
								
								<div className="m-10 row pL-5 pR-5">
											
											 <div className="p-3 img-box2" >
											    <a className="link-style"href="donate_giv1.html">
													<img className="product-img2" src={charity2}></img>
												</a>
											  </div>
										      
										  
											  <div className="p-3 img-box2" >
											    <a className="link-style" href="#">
													<img className="product-img2" src={charity}></img>
												</a>
											  </div>
											  
											  
											  <div className="p-3 img-box2" >
											    <a className="link-style" href="#">
													<img className="product-img2" src={charity1}></img>
												</a>
												
											  </div>
										  
								</div>
								<a  className="link-style" href="#">
								   <h6 className="pL-20 fw-600 "><i className="ti-arrow-right"></i>&emsp;View More</h6></a>
								<hr/>
								<h5 className="pT-10 pL-15  lh-1 head-text fw-600">Earn GIV</h5>
								<div className="mT-20 form-group pL-5 pR-5">
													 <div className="box-shdw filter-box m-10 p-10">
													     <h5 className="sub-head-text fw-600">Tutor Classmate</h5>
														  <h6 className="simple-text">Lorem ipsum dolor sit amet,sit consectetur adipiscing elit... </h6>
														 <div className=" peers fxw-nw ai-c bdB bgc-gray cur-p">
															  

<div className="peer">
																

	<img src={userpic} alt="" className="w-2r h-2r bdrs-50p"/>
															   

</div>
															   

<div className="peer peer-greed pL-20">
																

<div className="row">
																

	<h6 className="simple-text p-10 half-width fw-600">Lisa Banks</h6>
																

	<h5 className="pR-20 pT-5 fc-rtl  half-width fw-600 green-text">5 GIV</h5>
																

 </div>
															   

</div>
														</div>
													</div>
													<div className="box-shdw filter-box m-10 p-10">
														 <h5 

className="sub-head-text fw-600">Car Washing</h5>
														  <h6 className="simple-text">Lorem ipsum dolor sit amet,sit consectetur adipiscing elit... </h6>
														 <div 

className=" peers fxw-nw ai-c bdB bgc-gray cur-p">
															  

<div className="peer">
																

	<img src="assets/static/images/userpic_4.jpg" alt="" className="w-2r h-2r bdrs-50p "/>
															   

</div>
															   

<div className="peer peer-greed pL-20">
															     

<div className="row">
																

	<h6 className="simple-text p-10 half-width fw-600  ">Aaron Adams</h6>
																

	<h5 className="pR-20 fc-rtl half-width fw-600 green-text pT-5">3 GIV</h5>
																

 </div>
															   

</div>
														</div>
													</div>
													<div 

className="box-shdw filter-box m-10 p-10">
														 <h5 className="sub-head-text fw-600">Sunday Cleaning</h5>
														 <h6 className="simple-text" >Lorem ipsum dolor sit amet,sit consectetur adipiscing elit... </h6>
														 <div 

className=" peers fxw-nw ai-c bdB bgc-gray cur-p">
															  

<div className="peer">
																

	<img src="assets/static/images/userpic_2.jpg" alt="" className="w-2r h-2r bdrs-50p"/>
															   

</div>
															   

<div className="peer peer-greed pL-20">
																

<div className="row">
																

	<h6 className="p-10 half-width fw-600 simple-text">Ashley Simmons</h6>
																

	<h5 className="pR-20 fc-rtl half-width fw-600 green-text pT-5">2 GIV</h5>
																

 </div>
															   

</div>
														</div>
													</div>
										<a  className="link-style" href="#">
											<h6 className="pL-20 fw-600 "><i className="ti-arrow-right"></i>&emsp;View More</h6></a>
									</div>
							</div>
						  </div>
					</div>
				   </div> 					 
	
				 </div>
				</main>
			
			<footer className="bdT ta-c p-10 lh-0 fsz-sm c-grey-600">
				    <a className="link-style" href="#" title="Community">
						<span ><img className="img-icon" src={communityimg}/></span>
					</a>
					<a className="link-style" href="store1.html" title="Store">
							<span ><img className="img-icon" src={istoreimg} /></span>
					</a>
					<a  className="link-style" href="mywallet.html" title="My Wallet">	
						<span ><img className="img-icon" src={iactivewalletimg} /></span>
						
					</a>
					<a className="link-style" href="charity_classified1.html" title="Charity">	
						<span ><img  className="img-icon" src={icharityimg}/></span>
					</a>
					<a id="sidebar-toggle" className="toggle-btn sidebar-toggle" href="javascript:void(0);" title="Main Menu">
						<span ><i className="ti-menu"><img  className="img-icon"  src={imenuimg} /></i></span>
					</a>
						
			</footer>
				</div>
</article>);
}
export default MyWalletPage;
