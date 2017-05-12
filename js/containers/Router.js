import { Scene, Router, ActionConst } from 'react-native-router-flux';
import React from 'react';
import { connect } from 'react-redux';
import { WebView, Text } from 'react-native';
import Login from './Login';
import Token from './Token';
import Dummy from './Dummy';
import TabIcon from './../components/TabIcon';

const RouterWithRedux = connect()(Router);

export default () => (
  <RouterWithRedux>
    <Scene key="root" hideNavBar>
      <Scene key="login" component={Login} initial />
      <Scene key="loginWeb" component={WebView} />
      <Scene key="token" component={Token} />

      <Scene key="mainTab" tabs tabBarStyle={{ backgroundColor: 'lightgray' }}>
        <Scene key="worksTab" title="works" icon={TabIcon}>
          <Scene key="works" title="works" component={Dummy} initial hideNavBar />
        </Scene>

        <Scene key="episodesTab" title="episodes" icon={TabIcon}>
          <Scene key="episodes" title="episodes" component={Dummy} hideNavBar />
        </Scene>

        <Scene key="profileTab" title="profile" icon={TabIcon}>
          <Scene key="me" title="profile" component={Dummy} hideNavBar />
        </Scene>
      </Scene>
    </Scene>
  </RouterWithRedux>
);
