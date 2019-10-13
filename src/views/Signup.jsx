import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { FormInput } from '../styled/Input';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import Button from '../styled/Button';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

const Signup = props => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { data } = await axios.post('/api/signup', {
              ...values,
              business_id: props.user.business.id,
            });
            props.setUser({ ...props.user, ...data });
            props.history.push('/account');
          } catch (err) {
            console.error(err);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form>
            <FormInput
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <Button type="submit" disabled={isSubmitting}>
              Create Account
            </Button>
            <Button>Back</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default connect(
  ({ user }) => user,
  { setUser }
)(Signup);
