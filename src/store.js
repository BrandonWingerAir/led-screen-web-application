import { createStore } from 'redux';

// Initial state from JSON file
import initialState from './data.json';

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
