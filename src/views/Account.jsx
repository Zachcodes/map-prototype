import React from 'react';
import { connect } from 'react-redux';
import FileUpload from '../components/FileUpload';
import BusinessData from '../components/BusinessData';
import BusinessSettings from '../components/BusinessSettings';
import SearchTerms from '../components/SearchTerms';
import AdminDashNav from '../components/AdminDashNav';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Account = ({ user, location }) => {
  let { url } = useRouteMatch();
  return (
    <div>
      <AdminDashNav />
      {/* <FileUpload /> */}
      <Switch>
        <Route path={`${url}/data`} component={BusinessData} />
        <Route path={`${url}/settings`} component={BusinessSettings} />
        <Route path={`${url}/search-terms`} component={SearchTerms} />
      </Switch>
    </div>
  );
};

export default connect(({ user }) => user)(Account);
