import React from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormInput } from '../styled/Input';
import Div from '../styled/Div';
import Section from '../styled/Section';
import Button from '../styled/Button';
import StyledForm, { Label, Spacer } from '../styled/Form';

const BusinessSettings = () => {
  const user = useSelector(state => state.user);
  console.log('user in settings', user);
  return (
    <Formik
      initialValues={{
        business_name: '',
        email: '',
        phone: '',
        mailing_street: '',
        mailing_city: '',
        mailing_state: '',
        website_url: '',
        primary_industry: '',
        company_logo: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, handleChange, values }) => (
        <StyledForm>Hello</StyledForm>
      )}
    </Formik>
  );
};

export default BusinessSettings;
