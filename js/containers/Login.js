import React from 'react';
import { StyleSheet, StatusBar, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Config from 'react-native-config';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const authParam = {
  response_type: 'code',
  client_id: Config.CLIENT_ID,
  redirect_uri: 'annict://callback',
};

const objectToQuery = obj => (
  _.reduce(obj, (result, value, key) => {
    result += `${key}=${encodeURIComponent(value)}&`;
    return result;
  }, '').slice(0, -1)
);

const Login = props => (
  <View style={styles.container}>
    <StatusBar hidden />
    <Button
      title="sign in"
      onPress={() => {
        const url = `https://api.annict.com/oauth/authorize?${objectToQuery(authParam)}`;
        Actions.loginWeb({ source: { url } });
      }}
    />
  </View>
);

export default connect()(Login);
