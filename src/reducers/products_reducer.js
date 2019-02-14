import { LOAD_PRODUCTS } from '../actions/products';

const loadProductsReducer = (state, action) => [...action.payload];

const lookup = {
  [LOAD_PRODUCTS]: loadProductsReducer
};

export default function reducer(state = [], action) {
  const reducerFn = lookup[action.type];
  return reducerFn ? reducerFn(state, action) : state;
}
