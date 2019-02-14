import { COMPLETE_CHECKOUT } from '../actions/checkout';

const completeCheckoutReducer = (state, action) => ({
  ...state,
  customerInfo: action.payload
});

const lookup = {
  [COMPLETE_CHECKOUT]: completeCheckoutReducer
};

export default function reduce(state = {}, action) {
  const reducerFn = lookup[action.type];
  return reducerFn ? reducerFn(state, action) : state;
}
