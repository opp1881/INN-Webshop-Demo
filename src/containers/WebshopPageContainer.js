import React from 'react';

import CheckoutContainer from './CheckoutContainer';
import ProductListContainer from './ProductListContainer';
import ShoppingCartContainer from './ShoppingCartContainer';

const WebshopPageContainer = ({ history }) => {
  const onCheckoutCompleted = () => {
    history.push('/receipt');
  };

  return (
    <div>
      <ProductListContainer />
      <ShoppingCartContainer />
      <CheckoutContainer onCheckoutCompleted={onCheckoutCompleted} />
    </div>
  );

};



export default WebshopPageContainer;
