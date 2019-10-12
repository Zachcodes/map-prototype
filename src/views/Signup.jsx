import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

const Signup = props => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await axios.post('/api/signup', {
              username: values.username,
              password: values.password,
            });
            props.history.push('/account');
          } catch (err) {
            console.error(err);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form>
            <Field
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            <Field
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <Field
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
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

export default Signup;
