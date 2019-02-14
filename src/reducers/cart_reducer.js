import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/cart';

const addProductReducer = (state, action) => {
  const product = action.payload;
  const existingCartItem = state.find(item => item.product.id === product.id);

  if (existingCartItem) {
    existingCartItem.quantity++;
    return [...state];
  }
  return [...state, { product, quantity: 1 }];
};

const removeProductReducer = (state, action) => [
  ...state.filter(item => item.product.id !== action.payload)
];

const lookup = {
  [ADD_PRODUCT]: addProductReducer,
  [REMOVE_PRODUCT]: removeProductReducer
};

export default function reducer(state = [], action) {
  const reducerFn = lookup[action.type];
  return reducerFn ? reducerFn(state, action) : state;
}
