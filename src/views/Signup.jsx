import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';

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
          console.log(props.user);
          console.log({ ...values, business_id: props.user.business.id });
          // try {
          //   const { data } = await axios.post('/api/signup', {...values, business_id: props.user.business.id});
          //   props.setUser({ ...props.user, ...data });
          //   props.history.push('/account');
          // } catch (err) {
          //   console.error(err);
          //   setSubmitting(false);
          // }
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

export default connect(
  state => {
    const { user } = state.user;
    return {
      user,
    };
  },
  { setUser }
)(Signup);
