import { Scene, Router, ActionConst } from 'react-native-router-flux';
import React from 'react';
import { connect } from 'react-redux';
import { WebView } from 'react-native';
import Login from './Login';
import Token from './Token';

const RouterWithRedux = connect()(Router);

export default () => (
  <RouterWithRedux>
    <Scene key="root" hideNavBar>
      <Scene key="login" component={Login} initial />
      <Scene key="loginWeb" component={WebView} />
      <Scene key="token" component={Token} />
    </Scene>
  </RouterWithRedux>
);
