import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';
import { scroller } from 'react-scroll';

import { ProductType } from '../lib/types';

const ProductListItem = ({ product, addProductToCart }) => {
  const { imgSrc, name, price, description } = product;

  const addToCart = product => {
      addProductToCart(product);
      scroller.scrollTo('inn-checkout-button-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
      });
  };

  return (
    <Card className="shadow p-2 col-md-3">
      <CardImg top width="100%" src={imgSrc} alt={name} />

      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{price},-</CardSubtitle>
        <CardText>{description}</CardText>
      </CardBody>

      <CardFooter className={'bg-white'}>
        <button
          className="btn btn-inn btn-block"
          onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </CardFooter>
    </Card>
  );
};

ProductListItem.propTypes = {
  product: ProductType.isRequired,
  addProductToCart: PropTypes.func
};

export default ProductListItem;
