export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export let idGenerator = 3;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: idGenerator++,
    completed: false,
    text
  };
};
export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const completeTodo = id => {
  console.log(id);
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};
