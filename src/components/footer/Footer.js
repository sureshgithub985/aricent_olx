import React from 'react';

class Footer extends React.Component{
	
	
  render(){
    return(
  
  <div className="container">
  <div className="row" style={{backgroundColor: '#EAECEE',height : '120px'}}>
  <br />
		<div className="col-md-4 text-center"><br/><br/>
		
		
			<a href="https://www.aricent.com/about/contact-us" className="" target="_blank"><font color="#00008B"><b>Contact Us </b></font></a> &nbsp;&nbsp;
				
			 <a href="https://www.aricent.com/" className="" target="_blank"><font color="#00008B"> <b>www.aricent.com</b></font> </a>
        </div>

     <div className="col-md-4 text-center">
	 <font color="#00008B"><b>SOCIAL</b></font> <br />
     
		<a href="https://www.facebook.com/aricent/" className="fa fa-facebook" target="_blank"></a>
<a href="https://twitter.com/aricent" className="fa fa-twitter" target="_blank"> </a>
<a href="https://www.google.com/?q=aricent" className="fa fa-google" target="_blank"></a>
<a href="https://www.youtube.com/user/aricentvideos" className="fa fa-youtube" target="_blank"></a>    
	</div>
	   
	   <div className="col-md-4 text-center"><br/><br/>
	    <font color="#00008B"><b>
		&#9400;2017 Aricent Inc. All rights reserved.</b></font>
		
		
	   </div>
     </div>
     
	   
	   
  

	
  
 </div>

);
}

}
export default Footer;

