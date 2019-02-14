import { Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const renderField = field => {
  const {
    meta: { touched, invalid, error }
  } = field;
  const touchedAndInvalid = touched && invalid;
  const inputClassName = `form-control ${
    touchedAndInvalid ? 'is-invalid' : ''
  }`;

  return (
    <FormGroup row>
      <Label for={field.name} sm={3}>
        {field.label}
      </Label>
      <Col sm={9}>
        <input
          className={inputClassName}
          placeholder={field.label}
          type={field.type}
          {...field.input}
        />
        <div className="invalid-feedback">{error}</div>
      </Col>
    </FormGroup>
  );
};

const validate = values => {
  const fields = [
    'fullName',
    'emailAddress',
    'phoneNumber',
    'addressLine1',
    'postalCode',
    'postalCity'
  ];

  return fields.reduce((errors, field) => {
    if (!values[field]) {
      errors[field] = 'Field is mandatory';
    }
    return errors;
  }, {});
};

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToForm();
  }

  componentDidUpdate(prevProps) {
    if (
      [
        prevProps.fullName !== this.props.fullName,
        prevProps.emailAddress !== this.props.emailAddress,
        prevProps.phoneNumber !== this.props.phoneNumber,
        prevProps.addressLine1 !== this.props.addressLine1,
        prevProps.addressLine2 !== this.props.addressLine2,
        prevProps.postalCode !== this.props.postalCode,
        prevProps.postalCity !== this.props.postalCity,
        prevProps.company !== this.props.company,
        prevProps.additionalAddressInfo !== this.props.additionalAddressInfo
      ].filter(result => result === true).length > 1
    ) {
      this.scrollToForm();
    }
  }

  scrollToForm = () => {
    this.formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <form
        ref={this.formRef}
        className="pt-4 text-left"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field
          name="fullName"
          label="Name"
          type="text"
          component={renderField}
        />

        <Field
          name="emailAddress"
          label="Email"
          type="email"
          component={renderField}
        />

        <Field
          name="phoneNumber"
          label="Phone"
          type="tel"
          component={renderField}
        />

        <Field
          name="company"
          label="Company"
          type="text"
          component={renderField}
        />

        <Field
          name="addressLine1"
          label="Address line 1"
          type="text"
          component={renderField}
        />

        <Field
          name="addressLine2"
          label="Address line 2"
          type="text"
          component={renderField}
        />

        <Field
          name="postalCode"
          label="Postal code"
          type="tel"
          component={renderField}
        />

        <Field
          name="postalCity"
          label="Postal city"
          type="text"
          component={renderField}
        />

        <Field
          name="additionalAddressInfo"
          label="Additional address information"
          type="text"
          component={renderField}
        />

        <div className="form-row p-3 justify-content-center">
          <button type="submit" className="btn btn-inn">
            Complete purchase
          </button>
        </div>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
};

CheckoutForm = reduxForm({
  form: 'checkout',
  validate
})(CheckoutForm);

const selector = formValueSelector('checkout');

CheckoutForm = connect(state => ({
  fullName: selector(state, 'fullName'),
  emailAddress: selector(state, 'emailAddress'),
  phoneNumber: selector(state, 'phoneNumber'),
  addressLine1: selector(state, 'addressLine1'),
  addressLine2: selector(state, 'addressLine2'),
  postalCode: selector(state, 'postalCode'),
  postalCity: selector(state, 'postalCity'),
  company: selector(state, 'company'),
  additionalAddressInfo: selector(state, 'additionalAddressInfo')
}))(CheckoutForm);

export default CheckoutForm;
