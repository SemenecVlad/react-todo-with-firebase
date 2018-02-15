import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

class Register extends Component {
  handleCreateAccount = ({ email, password }) => {
    console.log("submited");
    this.props.registerUser({ email, password });
    this.forceUpdate();
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(this.handleCreateAccount)}>
          <Field
            name="email"
            placeholder="Enter your email..."
            component="input"
            type="text"
            className="form-control"
          />
          <Field
            name="password"
            placeholder="Enter your password..."
            component="input"
            type="password"
            className="form-control"
          />
          <Field
            name="conf-password"
            placeholder="Confirm your password..."
            component="input"
            type="password"
            className="form-control"
          />
          <button className="btn btn-success btn-block" type="submit">
            Submit
          </button>
        </form>
        <p className="text-center">or</p>
        <Link className="btn btn-block btn-primary" to="/login">
          Log In
        </Link>
      </div>
    );
  }
}

Register = reduxForm({
  form: "register"
})(Register);

Register = connect(null, actions)(Register);

export default Register;
