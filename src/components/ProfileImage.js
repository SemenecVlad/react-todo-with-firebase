import React, { Component } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import * as actions from "../actions";

class ProfileImage extends Component {
  componentWillMount() {
    // this.props.getImageURL();
  }
  uploadPicture = file => {
    this.props.uploadImage(file);
    this.forceUpdate();
  };
  getURL() {
    return this.props.getImageURL();
  }

  render() {
    // let image = this.getURL();
    return (
      <div>
        {this.props.token === "" || this.props.token === undefined ? (
          <span />
        ) : (
          <div>
            <img
              id="profile"
              src={this.getURL()}
              className="img-thumbnail"
              alt=""
            />
            <Dropzone onDrop={this.uploadPicture} />
            <h4>{localStorage.getItem("userName")}</h4>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, actions)(ProfileImage);
