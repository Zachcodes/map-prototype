import React from 'react';
import routes from './routes';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { useAxios } from './customHooks/httpUtils';
import { setUser } from './redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';

function App({ setUser, history }) {
  function seedRedux(data) {
    setUser({
      ...data.user,
      business: data.business,
      loggedIn: data.loggedIn,
    });
    data.loggedIn && history.push('/account');
  }
  useAxios({ url: '/api/session' }, seedRedux);

  return (
    <MainContainer>
      <Navbar />
      {routes}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100%;
  ::after {
    content: '';
    background: url('https://video-images.vice.com/articles/5c61451b72f8f400077b3cdf/lede/1549878717939-Screen-Shot-2019-02-11-at-45130-PM.png?crop=0.9579735175590098xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*')
      no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export default withRouter(
  connect(
    null,
    { setUser }
  )(App)
);
