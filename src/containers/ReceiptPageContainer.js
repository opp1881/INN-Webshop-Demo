import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import innLogo from '../assets/images/inn-logo.png';
import ShoppingCart from './ShoppingCartContainer';

const ReceiptPageContainer = ({ customerInfo, cart, usedINN }) => {
  const renderINNLogo = () => {
    if (!usedINN) {
      return '';
    }

    return (
      <div>
        <dt>Powered by:</dt>
        <dd>
          <img src={innLogo} alt="INN" width="25%" />
        </dd>
      </div>
    );
  };

  if (!customerInfo || !cart) {
    return (
      <div>
        <h3>No receipt found</h3>
        <Link to="/">Back to store</Link>
      </div>
    );
  }

  const {
    fullName,
    emailAddress,
    phoneNumber,
    addressLine1,
    addressLine2,
    postalCode,
    postalCity
  } = customerInfo;

  return (
    <div>
      <h2>Thanks for your purchase {fullName}</h2>
      <hr />

      <h4>Order summary:</h4>
      <Row className="justify-content-center">
        <Col md="7">
          <dl>
            <dt>Order date: </dt>
            <dd>{new Date().toDateString()}</dd>
            <dt>Name:</dt>
            <dd>{fullName}</dd>
            <dt>E-mail address:</dt>
            <dd>{emailAddress}</dd>
            <dt>Phone number:</dt>
            <dd>{phoneNumber}</dd>
            <dt>Delivery address:</dt>
            <dd>
              {addressLine1}, {addressLine2 ? addressLine2 + ',' : ''}{' '}
              {postalCode} {postalCity}
            </dd>
            {renderINNLogo()}
          </dl>
        </Col>
      </Row>

      <div>
        <ShoppingCart
          header="Your purchased items"
          hideImage={true}
          noDeleteColumn={true}
        />
      </div>
    </div>
  );
};

export default connect(state => ({
  customerInfo: state.receipt.customerInfo,
  cart: state.cart,
  usedINN: state.checkout.usedINN
}))(ReceiptPageContainer);
