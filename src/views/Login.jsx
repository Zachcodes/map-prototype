import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { FormInput } from '../styled/Input';
import Div from '../styled/Div';
import Section from '../styled/Section';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import Button from '../styled/Button';
import { LinkButton } from '../styled/A';
import StyledForm, { Label, Spacer } from '../styled/Form';

const initialValues = {
  username: '',
  password: '',
};

const Login = props => {
  return (
    <Section
      flexed
      direction="column"
      align="center"
      justify="center"
      height="calc(100% - 60px)"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { data } = await axios.post('/api/login', values);
            props.setUser({ ...props.user, ...data });
            props.history.push('/account');
          } catch (err) {
            console.error(err);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, handleChange }) => (
          <StyledForm width="100%" maxWidth="900px">
            <Div flexed direction="column">
              <Spacer>
                <Label>Username</Label>
                <FormInput
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </Spacer>
              <Spacer>
                <Label>Password</Label>
                <FormInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </Spacer>
            </Div>
            <Div flexed justify="space-around">
              <LinkButton to="/create-account">Make an account</LinkButton>
              <Button type="submit" disabled={isSubmitting}>
                Sign in
              </Button>
            </Div>
          </StyledForm>
        )}
      </Formik>
    </Section>
  );
};

export default connect(
  ({ user }) => user,
  { setUser }
)(Login);
