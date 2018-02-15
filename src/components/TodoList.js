import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";

import List from "./List";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleTodos = this.handleTodos.bind(this);
  }
  handleTodos({ todo_text }) {
    console.log(todo_text);
    this.props.addTask({ todo_text });
  }

  deleteItem = key => {
    this.props.deleteTask(key);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="todo-list">
        <div className="todo-form">
          <form
            className="form-inline"
            onSubmit={handleSubmit(this.handleTodos)}
          >
            <div className="form-group add-todo-form">
              <Field
                className="form-control mb-2"
                name="todo_text"
                component="input"
                placeholder="Write your todo here..."
                type="text"
              />
              <button className="btn btn-success mb-2" type="submit">
                Add Todo
              </button>
            </div>
          </form>
          <List deleteItem={this.deleteItem} todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
    // form: state.form.todo.todo_text
  };
};

TodoList = reduxForm({
  form: "todo"
})(TodoList);

TodoList = connect(mapStateToProps, actions)(TodoList);

export default TodoList;
