import React from 'react';
import { Linking, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import Routes from './Router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpenURL = this.handleOpenURL.bind(this);
  }

  componentDidMount() {
    Linking
      .getInitialURL()
      .then(url => this.handleOpenURL({ url }))
      .catch(console.error);

    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL(event) {
    if (_.isEmpty(event.url)) {
      return;
    }
    if (event.url.match(/^annict:\/\/callback\?code=(.+)/)) {
      const code = event.url.match(/^annict:\/\/callback\?code=(.+)/)[1];
      Actions.token({ code });
    }
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default connect()(App);
