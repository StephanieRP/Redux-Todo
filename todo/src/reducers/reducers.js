import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions/action";

const initialState = {
  todos: [
    {
      text: "Walk the dog",
      completed: false,
      id: 1
    },
    {
      text: "Wash the dishes",
      completed: false,
      id: 2
    }
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.text, completed: action.completed, id: action.id }
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    case COMPLETE_TODO:
      // const copy = [...state.todos].map(todo => {
      //   if (todo.id === action.payload) {
      //     todo.completed = !todo.completed;
      //   }
      //   return todo;
      // });
      // return {
      //   ...state,
      //   todos: copy
      // };

      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };

    default:
      return state;
  }
};

export default reducer;
