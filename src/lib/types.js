import PropTypes from 'prop-types';

const { shape, string, number } = PropTypes;

export const ProductType = shape({
  id: string,
  name: string,
  price: number,
  imgSrc: string,
  description: string
});

export const CartItemType = shape({
  product: ProductType,
  quantity: number
});
