import React, { Component } from "react";
import { connect } from "react-redux";
// import { Field, reduxForm } from "redux-form";
import Dropzone from "react-dropzone";
import * as actions from "../actions";

class ProfileImage extends Component {
  uploadPicture = file => {
    this.props.uploadImage(file);
    console.log("uploaded");
  };
  render() {
    // const { handleSubmit } = this.props;

    return (
      <div>
        <img
          src={localStorage.getItem("imageURL")}
          className="img-thumbnail"
          alt=""
        />
        {/* <form action="" onSubmit={handleSubmit(this.uploadPicture)}>
          <Field
            name="file"
            component="input"
            className="form-control"
            type="file"
          />
          <button className="btn btn-success" type="submit">
            Change Image
          </button>
        </form> */}
        <Dropzone onDrop={this.uploadPicture} />
        <h4>{localStorage.getItem("userName")}</h4>
      </div>
    );
  }
}

// ProfileImage = reduxForm({
//   form: "profile_image"
// })(ProfileImage);

// ProfileImage =

export default connect(null, actions)(ProfileImage);
