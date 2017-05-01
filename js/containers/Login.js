import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Config from 'react-native-config';
import { authRequest } from './../actions';

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

const Login = props =>
  <View style={styles.container}>
    <Text style={styles.text}>Please sign in</Text>
    <Button
      title="sign in"
      onPress={() => {
        props.authRequestAction({
          response_type: 'code',
          client_id: Config.CLIENT_ID,
          redirect_uri: 'annict://oauth',
        });
      }}
    />
  </View>;

Login.propTypes = {
  authRequestAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  authRequestAction: bindActionCreators(authRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
