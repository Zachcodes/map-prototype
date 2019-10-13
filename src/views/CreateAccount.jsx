import React from 'react';
import { Formik, Field } from 'formik';
import axios from 'axios';
import { useAxios } from '../customHooks/httpUtils';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import { FormInput } from '../styled/Input';
import Div from '../styled/Div';
import Section from '../styled/Section';
import Button from '../styled/Button';
import StyledForm, { Label, Spacer } from '../styled/Form';

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
          <StyledForm width="100%" flexed direction="column" align="center">
            <Section flexed justify="space-between">
              <Div flexed direction="column" margin="0 24px 0 0">
                <Spacer>
                  <Label>Business name</Label>
                  <FormInput
                    type="text"
                    name="business_name"
                    onChange={handleChange}
                    value={values.business_name}
                  />
                </Spacer>
                <Spacer>
                  <Label>Email</Label>
                  <FormInput
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </Spacer>
                <Spacer>
                  <Label>Phone</Label>
                  <FormInput
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                  />
                </Spacer>
                <Spacer>
                  <Label>Mailing street</Label>
                  <FormInput
                    type="text"
                    name="mailing_street"
                    onChange={handleChange}
                    value={values.mailing_street}
                  />
                </Spacer>
                <Spacer>
                  <Label>Mailing city</Label>
                  <FormInput
                    type="text"
                    name="mailing_city"
                    onChange={handleChange}
                    value={values.mailing_city}
                  />
                </Spacer>
                <Spacer>
                  <Label>Mailing state</Label>
                  <FormInput
                    type="text"
                    name="mailing_state"
                    onChange={handleChange}
                    value={values.mailing_state}
                  />
                </Spacer>
              </Div>
              <Div flexed direction="column" margin="0 0 0 24px">
                <Spacer>
                  <Label>Website</Label>
                  <FormInput
                    type="text"
                    name="website"
                    onChange={handleChange}
                    value={values.website}
                  />
                </Spacer>
                <Spacer>
                  <Label>Primary industry</Label>
                  <FormInput component="select" name="primary_industry_id">
                    <option value=""></option>
                    {industries.map(i => {
                      return (
                        <option key={i.id} value={i.id}>
                          {i.industry_name}
                        </option>
                      );
                    })}
                  </FormInput>
                </Spacer>
                <Spacer>
                  <Label>Company logo</Label>
                  <FormInput
                    type="text"
                    name="company_logo_url"
                    onChange={handleChange}
                    value={values.company_logo_url}
                  />
                </Spacer>
              </Div>
            </Section>
            <Div flexed justify="space-between" minWidth="500px">
              <Button>Back</Button>
              <Button type="submit" disabled={isSubmitting}>
                Next
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
)(CreateAccount);
