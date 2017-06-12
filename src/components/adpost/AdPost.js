import React from 'react';
import Dropzone from 'react-dropzone';
import superagent from 'superagent';

class AdPost extends React.Component{

constructor(){
  super()
  this.state={
    images: [],
    accepted: [],
      rejected: []
  }
}
  uploadFile(files){
    console.log('uploadFile: ')
    const image = files[0]
    let uploadRequest = superagent.post()
    uploadRequest.attach('file', image)
    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    })

    uploadRequest.end((err, resp) => {
      if(err){
        alert(err)
        return
      }
      console.log('')
    })
  }
  removeImage(event){
    event.preventDefault()
    console.log('removeImage: ')

  }

  render(){
    return(
      <div id="container">
    <br/><br/>

   <div  className="row">
   <div className="col-md-5" >
   <h2>Submit a Free Classified Ad </h2>
   </div>
   </div>
   <br/><br/>

     <form className = "form-horizontal" action="/users/" method="post">
       <fieldset>
     <div class="row">

     <div className = "form-group">
     <label for = "title" className = "col-sm-2 control-label" >Ad Title</label>
     <div className = "col-sm-6 input-group">
     <input type = "text" className = "form-control" id = "title"  name="title" required/>
     </div>
     </div>

     <div className = "form-group">
     <label for = "description" className = "col-sm-2 control-label" >Description</label>
     <div className = "col-sm-6 input-group">
     <textarea rows="4" cols="50" className = "form-control" id = "description"  name="description"></textarea>
     </div>
     </div>
     <hr/>

    <div className = "form-group">
    <label for = "images" className = "col-sm-2 control-label" >Upload Photos </label>
    <div className = "col-sm-6 input-group">
    <Dropzone onDrop={this.uploadFile.bind(this)}
          accept="image/jpeg, image/png"
          onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
        >
          <p>Try dropping some files here, or click to select files to upload.</p>
          <p>Only *.jpeg and *.png images will be accepted</p>
        </Dropzone>
     </div>
      </div>


   <div className = "form-group">
   <label for = "location" className = "col-sm-2 control-label" >Location</label>
   <div className = "col-sm-6 input-group">
   <input type = "text" className = "form-control" id = "location"  name="location"/>
   </div>
   </div>

   <div className = "form-group">
   <label for = "postedBy" className = "col-sm-2 control-label" >Phone Number </label>
   <div className = "col-sm-6 input-group">
   <input type = "text" className = "form-control" id = "postedBy"  name="postedBy"/>
   </div>
   </div>

   <div className = "form-group">
   <div className = "col-sm-offset-2 col-sm-10">
   <button type = "submit" className = "btn btn-success btn-md">
   <span class="pull-left"><b> Submit </b></span>
  </button>
  </div>
  </div>

     </div>
       </fieldset>
     </form>

      </div>
    );
  }

}
export default AdPost;
