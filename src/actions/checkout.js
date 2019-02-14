import innClient from '@opplysningen1881/inn-js';

export const COMPLETE_CHECKOUT = 'COMPLETE_CHECKOUT';
export const FETCH_USER = 'FETCH_USER';

export function completeCheckout(customerInfo) {
  return {
    type: COMPLETE_CHECKOUT,
    payload: customerInfo
  };
}

export async function getUserFromInn() {
  const crmData = await innClient.getDeliveryInfo();

  const { fullName, emailAddress, phoneNumber } = crmData.contactInfo;

  const {
    addressLine1,
    addressLine2,
    postalCode,
    postalCity,
    company,
    additionalAddressInfo
  } = crmData.deliveryAddress;

  return {
    type: FETCH_USER,
    payload: {
      fullName,
      emailAddress,
      phoneNumber,
      addressLine1,
      addressLine2,
      postalCode,
      postalCity,
      company,
      additionalAddressInfo
    }
  };
}
