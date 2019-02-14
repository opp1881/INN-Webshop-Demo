import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import { CartItemType } from '../lib/types';

const renderCartItem = (
  { product, quantity },
  hideImage,
  noDeleteColumn,
  removeProductFromCart
) => (
  <tr key={product.id}>
    <td className="text-left">
      {hideImage ? null : renderProductImage(product)} {product.name}
    </td>
    <td>{quantity}</td>
    <td>{product.price},-</td>
    <td>{product.price * quantity},-</td>
    {noDeleteColumn ? null : (
      <td>
        <i
          onClick={() => removeProductFromCart(product.id)}
          className="fas fa-trash-alt"
          style={{ cursor: 'pointer' }}
          aria-label="Remove form cart"
        />
      </td>
    )}
  </tr>
);

const renderProductImage = ({ name, imgSrc }) => (
  <img
    src={imgSrc}
    alt={name}
    className="img-thumbnail"
    style={{ maxWidth: '100px', maxHeight: '100px' }}
  />
);

const renderTableFooter = (cart, noDeleteColumn) => {
  const numberOfItems = cart.reduce(
    (count, cartItem) => count + cartItem.quantity,
    0
  );

  const totalCartSum = cart.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

  return (
    <tfoot>
      <tr>
        <th className="text-right" colSpan="3">
          Subtotal ({numberOfItems} {numberOfItems === 1 ? 'item' : 'items'}):
        </th>
        <th>{totalCartSum},-</th>
        {noDeleteColumn ? null : <th />}
      </tr>
    </tfoot>
  );
};

const renderTableHeader = noDeleteColumn => (
  <thead>
    <tr>
      <th className="text-left">Product</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
      {noDeleteColumn ? null : <th />}
    </tr>
  </thead>
);

const CartList = ({
  cart,
  hideImage,
  noDeleteColumn,
  removeProductFromCart
}) => {
  if (cart.length === 0) {
    return 'The cart is empty';
  }

  return (
    <Table responsive>
      {renderTableHeader(noDeleteColumn)}
      <tbody>
        {cart.map(cartItem =>
          renderCartItem(
            cartItem,
            hideImage,
            noDeleteColumn,
            removeProductFromCart
          )
        )}
      </tbody>
      {renderTableFooter(cart, noDeleteColumn)}
    </Table>
  );
};

CartList.propTypes = {
  cart: PropTypes.arrayOf(CartItemType),
  hideImage: PropTypes.bool,
  noDeleteColumn: PropTypes.bool,
  removeProductFromCart: PropTypes.func
};

export default CartList;
