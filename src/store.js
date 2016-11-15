import { createStore } from 'redux';

/* Applying the pattern reducing composition */
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
     case 'TOGGLE_TODO':
       if(state.id !== action.id) {
         return state;
       }

       return {
         ...state,
         completed: !todo.completed
       };
    default:
      return state;

  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('here todo');
      return [
        ...state,
        todo(undefined, action)
      ];
      case 'TOGGLE_TODO':
        return state.map(t => todo(t, action));
    default:
      return state;

    }
};

export default function store() {
  return createStore(todos);
};
