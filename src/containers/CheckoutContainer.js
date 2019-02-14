import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import innClient from '@opplysningen1881/inn-js';

import { completeCheckout, getUserFromInn } from '../actions/checkout';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutContainer = ({
  completeCheckout,
  getUserFromInn,
  onCheckoutCompleted,
  usedINN
}) => {
  React.useEffect(() => {
    innClient.addCheckoutButtonTo(
      'inn-checkout-button-container',
      getUserFromInn
    );
  }, []);

  const onSubmit = formValues => {
    completeCheckout(formValues);
    onCheckoutCompleted();
  };

  return (
    <Card className="mt-5">
      <CardHeader>
        <strong>Checkout</strong>
      </CardHeader>

      <CardBody className="p-4">
        <Row className="justify-content-center">
          <Col md="7">
            <div id="inn-checkout-button-container" />
            {usedINN ? (
              <div>
                <hr />
                <CheckoutForm onSubmit={onSubmit} />
              </div>
            ) : null}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default connect(
  state => ({ usedINN: state.checkout.usedINN }),
  { getUserFromInn, completeCheckout }
)(CheckoutContainer);
