import React, { Component } from "react";
import * as actions from "../actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
class List extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.props.deleteItem.bind(this);
    this.completedTask = this.props.completedTask.bind(this);
  }

  renderList = todos => {
    return this.props.todos.reverse().map(item => {
      return (
        <div className="list-item" key={item.uid}>
          <li
            key={item.uid}
            data-id={item.uid}
            className={
              item.completed
                ? "alert alert-success task-completed"
                : "alert alert-secondary"
            }
            onClick={() => this.props.completedTask(item.uid, item.completed)}
          >
            <div>
              <p>{item.task}</p>
              <div style={{ color: "gray", fontSize: 12 }}>
                <span>
                  Created {item.date} at {item.time}
                </span>
              </div>
            </div>
          </li>
          <button
            onClick={() => this.deleteItem(item.uid)}
            className={
              item.completed
                ? "btn btn-sm btn-danger"
                : "btn btn-sm btn-outline-danger"
            }
          >
            Delete
          </button>
        </div>
      );
    });
  };
  render() {
    const { todos } = this.props;
    return (
      <ul className="list">
        <ReactCSSTransitionGroup
          transitionName="listItem"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionLeave={true}
        >
          {this.renderList()}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}

export default List;
