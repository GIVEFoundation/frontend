import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styles from '../App.css';
import grey from '../icons/grey.jpg';
import MyWalletPage from './MyWallet';

const divStyle = {
    color: 'green',
  };
 
const SignInPage= (props) => {
  
return (
 
<article>
  <Header title="SignIn Page"/>
  <div id="mainContent">
						
							<div className="masonry-item col-md-12">
								<div align="center" className="bgc-white p-20 bd">
									
										<form action="">
											<div align="center" className="form-group">
												<h5 htmlFor="giv">Sign IN</h5>
											</div>
											<div align="center" className="p-20">
                                            <Link to={'/MyWallet'} className="db link dim tc">
													   <img className="qr-img" src={grey}/>
                                                       </Link>
													
											</div>
											<div align="center" className="form-group">
												<h6 htmlFor="giv">Put Your QR code/RFID Tag<br/> inside the frame</h6>
											</div>
											<div  align="center" className="form-group">
												<h5  style={divStyle}>NOT A KID ? PRESS HERE</h5>
											</div>
										</form>
									</div>
								
						</div>
					</div>

</article>);
}
export default SignInPage;
