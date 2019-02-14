export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}

export function removeProductFromCart(productId) {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  };
}
