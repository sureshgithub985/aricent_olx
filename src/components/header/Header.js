import React from 'react';
import ToggleDisplay from 'react-toggle-display';

class Header extends React.Component{


	constructor(props) {
		super(props);
		this.register = { show: true };
		this.home 	  = { show: true };
		this.postAd   = { show: true };

		if(this.props.pageInfo=="REG")
		{
			this.register = { show: false };
		}

			if(this.props.pageInfo=="HOME")
		{
			this.home = { show: false };
		}

			if(this.props.pageInfo=="POSTAD")
		{
			this.postAd = { show: false };
		}


  }

  render(){
    return(

  <div className="container">


	<div className="row" style={{backgroundColor: '#EAECEE'}}>

		<div className="col-md-1">

			<a href="/">
				<font size="6"><span className="glyphicon glyphicon-home"></span></font>
			</a>
		</div>
		<div className="col-md-4 col-md-offset-7 text-right">
			<ToggleDisplay show={this.register.show}>

				<a href="/users/Register" className="btn btn-link">Register</a> |

			</ToggleDisplay>


			<a href="/users/Register" className="btn btn-link">Sign in to My Account</a>

		</div>
	</div>


	<div className="row" style={{backgroundColor: '#EAECEE'}}>
		<div className="col-md-8">
			<br />
			<font color="#FFA500" size="10">Aricent&nbsp;</font>
			<img src="/images/olx.jpg" className="img-rounded" alt="Cinque Terre" width="80" height="80" />

		</div>
		<div className="col-md-4 text-right">
			<br/>
			<ToggleDisplay show={this.postAd.show}>
	        <a href="/users/Posting" className="btn btn-primary btn-md"><b>Post a Free Ad!</b></a>

			</ToggleDisplay>
		</div>
	</div>


	<div className="row" style={{backgroundColor: '#EAECEE'}}>
		<div className="col-md-12">
		<br/>
		</div>
	</div>

	<div className="row" style={{backgroundColor: '#D3D3D3'}}>
	<br/>
	    <form method="get" action="/" >
				<div className="col-md-2 col-md-offset-1">

					<div className = "form-group">

						<select className="selectpicker show-tick form-control">
							  <option>All</option>
							  <option>Vehicles</option>
							  <option>Gadgets</option>
							  <option>Miscllaneous</option>


						</select>
					</div>

				</div>

				<div className="col-md-6">
						  <div className = "input-group">
							  <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
							  <input type = "text" className = "form-control" id = "searchInfo" placeholder = "Search Posts"/>

						  </div>
				</div>

				<div className="col-md-2 text-left">

						   <div className = "form-group">
								    <div>
										 <button type = "submit" className = "btn btn-primary btn-md">
										 <span className = "glyphicon glyphicon-search"></span><b> Search</b>
										 </button>
								    </div>
							</div>

				</div>
			</form>
	<br/>&nbsp;
	</div>


 </div>

);
}

}
export default Header;
