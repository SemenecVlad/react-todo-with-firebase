import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";

class Header extends Component {
  renderButtons() {
    if (this.props.token !== "") {
      return (
        <a onClick={this.props.logOut} href="#" className="btn btn-danger">
          Sign Out
        </a>
      );
    } else if (this.props.token === "" || this.props.token === undefined) {
      return [
        <Link to="/login" key={1}>
          Sign In
        </Link>,
        <Link to="/register" key={2}>
          Register
        </Link>
      ];
    }
  }
  render() {
    return (
      <header>
        <Link to="/">LOGO</Link>
        <nav>{this.renderButtons()}</nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, actions)(Header);
