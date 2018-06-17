import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styles from '../App.css';
import grey from '../icons/grey.jpg';
import MyWalletPage from './MyWallet';
import axios from 'axios';

export default class SignInPage extends React.Component {
	state = {
	  name: '',
	  Id:0,
	  PrimaryId: ''
	}
  
	handleChange = event => {
	  this.setState({ name: event.target.value });
	}
  
	handleSubmit = event => {
	  event.preventDefault();
  
  const divStyle = {
    color: 'green'
  };
	  const Kids = {
		  // Id:this.state.Id,
		  // name: this.state.name,
		  PrimaryId : this.state.PrimaryId
	  };
  
	  axios.get('https://giveapi.azurewebsites.net/api/Give', { Kids })
		.then(res => {
			alert(res.statusText);
			if(res.statusText=="OK")
			{
				return <Link to='/MyWallet' />
			}
		})
	}
  
	render() {
	  return (
			<article>
			   <Header title="SignIn Page"/>
			   <div id="mainContent">
									
										<div className="masonry-item col-md-12">
											<div align="center" className="bgc-white p-20 bd">
												
											<form  onSubmit={this.handleSubmit}>
														<div align="center" className="form-group">
															<h5 htmlFor="giv">Sign IN</h5>
														</div>
													<div align="center" className="p-20">
													<label>
			  Kid Address:
			  <input type="text" name="PrimaryId" onChange={this.handleChange} />
			</label>
													</div>
													{/* <div align="center" className="form-group">
														<h6 htmlFor="giv">Put Your QR code/RFID Tag<br/> inside the frame</h6>
													</div> */}
			 											<div  align="center" className="form-group">
														<h5>NOT A KID ? PRESS HERE</h5>
													</div>
													<button type="submit">Sign IN</button>
												</form>
											</div>
											
									</div>
							</div>
			
			 </article>); 
	}
  }



// const divStyle = {
//     color: 'green',
//   };
 
// const SignInPage= (props) => {
  
// return (
/*  
// <article>
//   <Header title="SignIn Page"/>
//   <div id="mainContent">
						
// 							<div className="masonry-item col-md-12">
// 								<div align="center" className="bgc-white p-20 bd">
									
// 										<form action="">
// 											<div align="center" className="form-group">
// 												<h5 htmlFor="giv">Sign IN</h5>
// 											</div>
// 											<div align="center" className="p-20">
//                                             <Link to={'/MyWallet'} className="db link dim tc">
// 													   <img className="qr-img" src={grey}/>
//                                                        </Link>
													
// 											</div>
// 											<div align="center" className="form-group">
// 												<h6 htmlFor="giv">Put Your QR code/RFID Tag<br/> inside the frame</h6>
// 											</div>
// 											<div  align="center" className="form-group">
// 												<h5  style={divStyle}>NOT A KID ? PRESS HERE</h5>
// 											</div>
// 										</form>
// 									</div>
								
// 						</div>
// 					</div>

// </article>); */
// }
// export default SignInPage;
