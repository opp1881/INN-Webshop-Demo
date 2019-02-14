import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ProductsReducer from './products_reducer';
import CartReducer from './cart_reducer';
import checkoutFormReducer from './checkout_form_reducer';
import ReceiptReducer from './receipt_reducer';
import CheckoutReducer from './checkout_reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  checkout: CheckoutReducer,
  form: formReducer.plugin({ checkout: checkoutFormReducer }),
  receipt: ReceiptReducer
});

export default rootReducer;
