import React from "react";
import PropTypes from "prop-types";

function Todos(props) {
  console.log(props);
  return (
    <div className="todos">
      {props.todos.map(todo => {
        return (
          <div className="todo-info" key={todo.id}>
            <div className={`todo-text ${todo.completed ? "complete" : ""}`}>
              {" "}
              {todo.text}
            </div>
            <div className="todo-task">
              <p> Actions</p>
              <div>
                <input
                  type="checkbox"
                  name="completed"
                  value={todo.completed}
                  onChange={() => props.completeTodo(todo.id)}
                />
                <span onClick={() => props.deleteTodo(todo.id)}> X </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {};

export default Todos;
