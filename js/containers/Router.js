import { Scene, Router } from 'react-native-router-flux';
import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import LoginWeb from './LoginWeb';

const RouterWithRedux = connect()(Router);

export default () => (
  <RouterWithRedux>
    <Scene key="root" hideNavbar>
      <Scene key="login" component={Login} />
      <Scene key="loginWeb" component={LoginWeb} />
    </Scene>
  </RouterWithRedux>
);
