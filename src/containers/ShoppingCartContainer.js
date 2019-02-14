import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';

import { removeProductFromCart } from '../actions/cart';
import CartList from '../components/CartList';

const ShoppingCartContainer = ({
  header = 'Your Shopping Cart',
  cart,
  removeProductFromCart
}) => {
  return (
    <Card className="mt-5">
      <CardHeader>
        <strong> {header} </strong>{' '}
      </CardHeader>{' '}
      <CardBody>
        <CartList cart={cart} removeProductFromCart={removeProductFromCart} />{' '}
      </CardBody>{' '}
    </Card>
  );
};

export default connect(
  state => ({
    cart: state.cart
  }),
  {
    removeProductFromCart
  }
)(ShoppingCartContainer);
