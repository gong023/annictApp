import { Scene, Router, ActionConst } from 'react-native-router-flux';
import React from 'react';
import { connect } from 'react-redux';
import { WebView } from 'react-native';
import Login from './Login';

const RouterWithRedux = connect()(Router);

export default () => (
  <RouterWithRedux>
    <Scene key="root" hideNavbar>
      <Scene key="login" component={Login} initial />
      <Scene key="loginWeb" component={WebView} />
    </Scene>
  </RouterWithRedux>
);
