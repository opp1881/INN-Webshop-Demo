import { FETCH_USER } from '../actions/checkout';

const fetchUserReducer = (state, action) => ({
  ...state,
  usedINN: true
});

const lookup = {
  [FETCH_USER]: fetchUserReducer
};

export default function reducer(state = {}, action) {
  const reducerFn = lookup[action.type];
  return reducerFn ? reducerFn(state, action) : state;
}
