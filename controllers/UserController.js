//Get the Users model
var Users = require('../models/Users');

//define the CRUD operations on Users model

module.exports = {

  registerUser: function(params, callback){
    console.log('UsersController: registerUser()');
	console.log(params.firstname);
	console.log(params.lastname);
	var newUser = new Users({
  firstname: params.firstname,
  lastname: params.lastname,
  username : params.username,
  password: params.password ,
  mobile_no : params.mobile_no,
  email : params.email,
  location : params.location
  });

  newUser.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
  
   /* Employee.create(params, function(err, employee){
      if(err){
        console.log("EmployeeController: saveEmployee(-): ERROR while saving employee");
        callback(err, null);
        return;
      }
      callback(null, employee);
      console.log("EmployeeController: saveEmployee(-): EMPLOYEE saved successfuly!! employee = "+employee);
    });
	*/
  }

 

}


