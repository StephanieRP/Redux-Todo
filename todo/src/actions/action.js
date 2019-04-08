export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = () => {
  return {
    type: ADD_TODO,
    payload: "add"
  };
};
export const deleteTodo = () => {
  return {
    type: DELETE_TODO,
    payload: "delete"
  };
};
