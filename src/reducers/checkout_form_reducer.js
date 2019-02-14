import { FETCH_USER } from '../actions/checkout';

const fetchUserReducer = (state, action) => ({
  ...state,
  values: {
    ...state.values,
    ...action.payload
  },
  registeredFields: {
    ...state.registeredFields
  }
});

const lookup = {
  [FETCH_USER]: fetchUserReducer
};

export default function reducer(state = {}, action) {
  const reducerFn = lookup[action.type];
  return reducerFn ? reducerFn(state, action) : state;
}
