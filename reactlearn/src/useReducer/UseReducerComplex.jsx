import React, { useReducer } from 'react';

// Initial State
const initialState = {
  count: 0,
  name: '',
  isSubmitted: false
};

// Actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';
const UPDATE_NAME = 'update_name';
const SUBMIT_FORM = 'submit_form';

// Reducer function to handle different actions
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0, name: '', isSubmitted: false };
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case SUBMIT_FORM:
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

export default function UseReducerComplex() {
  // Use useReducer hook with the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle input change for the name field
  const handleNameChange = (e) => {
    dispatch({ type: UPDATE_NAME, payload: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SUBMIT_FORM });
  };

  return (
    <div>
      <h1>useReducer Complex Example</h1>
      
      <h2>Counter:</h2>
      <p>Current count: {state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>

      <h2>Form:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <button type="submit" disabled={state.isSubmitted}>
            {state.isSubmitted ? 'Form Submitted' : 'Submit Form'}
          </button>
        </div>
      </form>

      <h2>Actions:</h2>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>

      <div>
        <h3>Form Status:</h3>
        {state.isSubmitted ? (
          <p>Thank you for submitting, {state.name}!</p>
        ) : (
          <p>Form not yet submitted</p>
        )}
      </div>
    </div>
  );
}
