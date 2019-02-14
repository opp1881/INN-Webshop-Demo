import productsSite1 from '../assets/data/products_site1.json';
import productsSite2 from '../assets/data/products_site2.json';

const products =
  process.env.REACT_APP_SITE === 'site2' ? productsSite2 : productsSite1;

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
    payload: products
  };
}
