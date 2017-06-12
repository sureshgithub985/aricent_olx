import React from 'react';

class UserRegistration extends React.Component{
  render(){
    return(
		<div id="container">
		<br/><br/>
		
		
		<div  className="row">
		<div className="col-md-4" > 
		<h2> <font color="#4B0082">Sign Up for Aricent OLX </font> </h2> 
		</div>
		</div>
		<br/><br/>
		 
  <form className = "form-horizontal" action="/users/RegUser" method="post">
   
   <div className = "form-group">
      <label for = "firstname" className = "col-sm-2 control-label" >First Name</label>
		
      <div className = "col-sm-6 input-group">
	  
	     <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
         <input type = "text" className = "form-control" id = "firstname" placeholder = "Enter First Name" name="firstname"/>
      </div>
   </div>
   
   <div className = "form-group">
      <label for = "lastname" className = "col-sm-2 control-label">Last Name</label>
		
      <div className = "col-sm-6 input-group">
	     <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
         <input type = "text" className = "form-control" id = "lastname" placeholder = "Enter Last Name" name="lastname" />
      </div>
   </div>
   

   <div className = "form-group">
      <label for = "username" className = "col-sm-2 control-label">User Name</label>
		
      <div className = "col-sm-6 input-group">
	     <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
         <input type = "text" className = "form-control" id = "username" placeholder = "Enter User Name" name="username"/>
      </div>
   </div>
   
   
   <div className = "form-group">
      <label for = "password" className = "col-sm-2 control-label">Password</label>
		
      <div className = "col-sm-6 input-group">
	     <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
         <input type = "password" className = "form-control" id = "password" placeholder = "Enter Password" name="password"/>
      </div>
   </div>
   
   
   
    <div className = "form-group">
      <label for = "mobileno" className = "col-sm-2 control-label">Mobile No</label>
		
      <div className = "col-sm-6 input-group">
	     <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
         <input type = "text" className = "form-control" id = "mobileno" placeholder = "Enter Mobile No" name="mobile_no"/>
      </div>
   </div>
   
   
   
    <div className = "form-group">
      <label for = "email" className = "col-sm-2 control-label">Email</label>
		
      <div className = "col-sm-6 input-group">
	     <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
         <input type = "text" className = "form-control" id = "email" placeholder = "Enter Email" name="email"/>
      </div>
   </div>
   
   
   
    <div className = "form-group">
      <label for = "location" className = "col-sm-2 control-label">Location</label>
		
      <div className = "col-sm-6 input-group">
	     <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
         <input type = "text" className = "form-control" id = "location" placeholder = "Enter Location" name="location"/>
      </div>
   </div>
   
   
   
   <div className = "form-group">
      <div className = "col-sm-offset-2 col-sm-10">
         <button type = "submit" className = "btn btn-success btn-md">
		 <span className = "glyphicon glyphicon-ok-sign"></span><b> Create My Account</b>
		 </button>
      </div>
   </div>
   
	
</form>


<br/><br/><br/>

		
	</div>
);
}

}
export default UserRegistration;

