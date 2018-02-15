import React, { Component } from "react";
import * as actions from "../actions";
class List extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.props.deleteItem.bind(this);
  }
  renderList = todos => {
    return this.props.todos.list.map(item => {
      return (
        <li key={item.key}>
          <span>{item.todo_text}</span>
          <button
            onClick={() => this.deleteItem(item.key)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </li>
      );
    });
  };
  render() {
    const { todos } = this.props;
    return <ul className="list">{this.renderList()}</ul>;
  }
}

export default List;
