import { Scene, Router, ActionConst } from 'react-native-router-flux';
import React from 'react';
import { connect } from 'react-redux';
import { WebView } from 'react-native';
import Login from './Login';
import Token from './Token';
import Dummy from './Dummy';
import ActivityList from './ActivityList';
import Profile from './Profile';
import TabIcon from './../components/TabIcon';

const RouterWithRedux = connect()(Router);

export default () => (
  <RouterWithRedux>
    <Scene key="root" hideNavBar>
      <Scene key="login" component={Login} initial />
      <Scene key="loginWeb" component={WebView} />
      <Scene key="token" component={Token} />

      <Scene key="mainTab" tabs tabBarStyle={{ backgroundColor: 'lightgray' }} hideNavBar >
        <Scene key="profileTab" title="profile" icon={TabIcon}>
          <Scene key="me" title="profile" component={Profile} initial hideNavBar />
        </Scene>

        <Scene key="activitiesTab" title="activities" icon={TabIcon}>
          <Scene key="activities" title="activities" component={ActivityList} hideNavBar />
        </Scene>

        <Scene key="episodesTab" title="episodes" icon={TabIcon}>
          <Scene key="episodes" title="episodes" component={Dummy} hideNavBar />
        </Scene>
      </Scene>
    </Scene>
  </RouterWithRedux>
);
