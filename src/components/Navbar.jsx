import React from 'react';
import { StyledLink } from '../styled/A';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <HeaderContainer>
      <StyledLink margin="0 24 0 0" to="/login">
        Sign in
      </StyledLink>
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
export default Navbar;
