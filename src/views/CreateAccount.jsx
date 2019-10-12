import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useAxios } from '../customHooks/httpUtils';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';

const initialValues = {
  business_name: '',
  email: '',
  phone: '',
  mailing_street: '',
  mailing_city: '',
  mailing_state: '',
  website: '',
  primary_industry_id: 0,
  company_logo_url: '',
};

const CreateAccount = props => {
  const [industries] = useAxios('/api/industries');
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { data } = await axios.post('/api/createAccount', values);
            props.setUser({ ...props.user, business: data });
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
            <Field component="select" name="primary_industry_id">
              <option value=""></option>
              {industries.map(i => {
                return (
                  <option key={i.id} value={i.id}>
                    {i.industry_name}
                  </option>
                );
              })}
            </Field>
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

export default connect(
  state => {
    const { user } = state.user;
    return {
      user: user,
    };
  },
  { setUser }
)(CreateAccount);
