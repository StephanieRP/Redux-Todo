import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions/action";
export class TodoContainer extends Component {
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = () => {};

  render() {
    return (
      <div className="main-container">
        <div className="header">
          <h1>My Current Todos</h1>
        </div>
        <div className="todos">
          <input type="text" placeholder="New Todo" />
          <button className="add-btn">Add</button>
          <div>list of todo X</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo }
)(TodoContainer);
