import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, completeTodo } from "../actions/action";
import Todos from "./Todos";
export class TodoContainer extends Component {
  state = {
    text: ""
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewTodo = e => {
    e.preventDefault();

    this.props.addTodo(this.state.text);
    this.setState({
      text: ""
    });
  };

  toggleTodo = id => {
    this.props.completeTodo(id);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    console.log(this.props);

    return (
      <div className="main-container">
        <div className="header">
          <h1>My Current Todos</h1>
        </div>
        <div className="todo">
          <input
            type="text"
            placeholder="New Todo"
            name="text"
            value={this.state.text}
            onChange={this.inputHandler}
          />
          <button className="add-btn" onClick={this.addNewTodo}>
            Add
          </button>
          <div className="todo-list">
            <Todos
              todos={this.props.todos}
              completeTodo={this.props.completeTodo}
              deleteTodo={this.props.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo, completeTodo }
)(TodoContainer);
