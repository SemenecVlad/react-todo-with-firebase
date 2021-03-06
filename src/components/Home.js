import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  renderLinks = () => {
    if (localStorage.getItem("token") !== null) {
      return (
        <Link className="btn btn-block btn-success" to="/todo">
          Create Your Todo Now
        </Link>
      );
    } else {
      return (
        <Link className="btn btn-block btn-success" to="/login">
          Create Your Todo Now
        </Link>
      );
    }
  };
  render() {
    return (
      <div className="home">
        <h1 style={styles.title}>Create Your Personal To-Do list</h1>
        <p style={styles.home}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          corrupti fuga nobis molestias, pariatur aut? Debitis voluptatem, vero
          et a sapiente vitae, reprehenderit sit nostrum modi, rerum quis soluta
          libero?
        </p>
        {this.renderLinks()}
      </div>
    );
  }
}

const styles = {
  title: {
    fontSize: 55,
    color: "blue"
  },
  home: {
    fontWeight: "bold"
  }
};

export default Home;
