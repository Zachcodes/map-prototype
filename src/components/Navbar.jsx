import React from 'react';
import { StyledLink } from '../styled/A';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ user, history, setUser }) => {
  return (
    <HeaderContainer>
      {user.loggedIn ? (
        <StyledLink
          margin="0 24 0 0"
          onClick={async () => {
            await axios.delete('/api/logout');
            setUser({ business: {}, loggedIn: false });
            history.push('/login');
          }}
        >
          Logout
        </StyledLink>
      ) : (
        <StyledLink margin="0 24 0 0" to="/login">
          Sign in
        </StyledLink>
      )}

      <StyledLink to="/services">Find services</StyledLink>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 15px 30px;
  height: 60px;
`;
export default withRouter(
  connect(
    ({ user }) => user,
    { setUser }
  )(Navbar)
);
