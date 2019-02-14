import React from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'reactstrap';

import { addProductToCart } from '../actions/cart';
import { loadProducts } from '../actions/products';
import ProductListItem from '../components/ProductListItem';

const ProductListContainer = ({ products, loadProducts, addProductToCart }) => {
  React.useEffect(() => {
    loadProducts();
  }, []);

  return (
    <CardDeck>
      {products.map(product => (
        <ProductListItem
          key={product.id}
          product={product}
          addProductToCart={addProductToCart}
        />
      ))}
    </CardDeck>
  );
};

export default connect(
  state => ({ products: state.products }),
  { loadProducts, addProductToCart }
)(ProductListContainer);
