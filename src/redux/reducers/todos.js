import { ADD_TODO, REMOVE_TODO } from '../actionTypes';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return [...state, { id, text }];
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    }
    default:
      return state;
  }
};
export default todoReducer;
