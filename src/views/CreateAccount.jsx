import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const initialValues = {
  business_name: '',
  email: '',
  phone: '',
  mailing_street: '',
  mailing_city: '',
  mailing_state: '',
  website: '',
  primary_industry: '',
  company_logo_url: '',
};

const CreateAccount = props => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await axios.post('/api/createAccount', values);
            props.history.push('/signup');
          } catch (err) {
            setSubmitting(false);
            console.error(err);
          }
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form>
            <Field
              type="text"
              name="business_name"
              onChange={handleChange}
              value={values.business_name}
            />
            <Field
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <Field
              type="text"
              name="phone"
              onChange={handleChange}
              value={values.phone}
            />
            <Field
              type="text"
              name="mailing_street"
              onChange={handleChange}
              value={values.mailing_street}
            />
            <Field
              type="text"
              name="mailing_city"
              onChange={handleChange}
              value={values.mailing_city}
            />
            <Field
              type="text"
              name="mailing_state"
              onChange={handleChange}
              value={values.mailing_state}
            />
            <Field
              type="text"
              name="website"
              onChange={handleChange}
              value={values.website}
            />
            <Field
              type="text"
              name="primary_industry"
              onChange={handleChange}
              value={values.primary_industry}
            />
            <Field
              type="text"
              name="company_logo_url"
              onChange={handleChange}
              value={values.company_logo_url}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateAccount;
