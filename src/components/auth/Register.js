import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import * as actions from "../../actions";
import { renderField } from "./renderField";

class Register extends Component {
  handleCreateAccount = ({ email, password, conf_password }) => {
    console.log("submited");
    // this.setState({ loading: true }, () => {
    this.props.registerUser({ email, password, conf_password });
    // this.forceUpdate();
    // });
  };
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="login-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(this.handleCreateAccount)}>
          <Field
            name="email"
            label="Email"
            placeholder="Enter your email..."
            component={renderField}
            type="text"
            className="form-control"
          />
          <Field
            name="password"
            label="Password"
            placeholder="Enter your password..."
            component={renderField}
            type="password"
            className="form-control"
          />
          <Field
            name="conf_password"
            label="Confirm password"
            placeholder="Confirm your password..."
            component={renderField}
            type="password"
            className="form-control"
          />
          {this.props.loading ? (
            <span className="btn btn-link">
              <BounceLoader
                color={"#039EFF"}
                size={40}
                loading={this.props.loading}
              />
            </span>
          ) : (
            <button
              className="btn btn-success btn-block"
              type="submit"
              disabled={pristine || submitting}
            >
              Create Account
            </button>
          )}
        </form>
        <p className="text-center">or</p>
        <Link className="btn btn-block btn-primary" to="/login">
          Log In
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

Register = reduxForm({
  form: "register"
})(Register);

Register = connect(null, actions)(Register);

export default Register;
