import { ADD_TODO, DELETE_TODO } from "../actions/action";

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {};
    case DELETE_TODO:
      return {};

    default:
      return state;
  }
};

export default reducer;
