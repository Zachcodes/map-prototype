import React from 'react';
import { StyledLink } from '../styled/A';
import { withRouter } from 'react-router-dom';
import { VerticalSpacer } from '../styled/Span';
const dataPath = '/account/data';
const settingsPath = '/account/settings';
const searchPath = '/account/search-terms';

const AdminDashNav = ({ location }) => {
  const { pathname } = location;
  return (
    <section>
      <StyledLink active={pathname === dataPath} to={dataPath}>
        My Data
      </StyledLink>
      <VerticalSpacer />
      <StyledLink active={pathname === settingsPath} to={settingsPath}>
        My business
      </StyledLink>
      <VerticalSpacer />
      <StyledLink active={pathname === searchPath} to={searchPath}>
        My search terms
      </StyledLink>
    </section>
  );
};

export default withRouter(AdminDashNav);
