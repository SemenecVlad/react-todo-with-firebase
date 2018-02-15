import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
import { renderField } from "./renderField";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

class LogIn extends Component {
  handleLogin = ({ email, password }) => {
    console.log("submited");
    this.props.loginUser({ email, password });
    console.log(email, password);
  };

  handleSubmitGoogle = () => {
    this.props.signInWithGoogle();
  };

  renderError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger">{this.props.errorMessage}</div>
      );
    }
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(this.handleLogin)}>
          <Field
            name="email"
            placeholder="Enter your email..."
            component={renderField}
            type="text"
            label="Email"
          />
          <Field
            name="password"
            placeholder="Enter your password..."
            component={renderField}
            type="password"
            label="Password"
          />
          {this.renderError()}

          <button
            className="btn btn-success btn-block"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
        </form>
        <p className="text-center">or</p>
        <a href="#" onClick={this.handleSubmitGoogle}>
          Sign In with Google
        </a>
        <Link className="btn btn-block btn-primary" to="/register">
          Register
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.error
  };
};

LogIn = reduxForm({
  form: "login",
  validate
})(LogIn);

LogIn = connect(mapStateToProps, actions)(LogIn);

export default LogIn;
