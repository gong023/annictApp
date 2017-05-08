import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Config from 'react-native-config';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
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

const authParam = {
  response_type: 'code',
  client_id: Config.CLIENT_ID,
  redirect_uri: 'annict://oauth',
  scope: 'read',
};

const objectToQueryString = (obj) => {
  return _.reduce(obj, (result, value, key) => {
    return (!_.isNull(value) && !_.isUndefined(value)) ? (result += key + '=' + value + '&') : result;
  }, '').slice(0, -1);
};

class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.showLoginWeb && this.props.showLoginWeb) {
      const url = `https://annict.com/sign_in?back=${encodeURIComponent(objectToQueryString(authParam))}`;
      console.log(url);
      Actions.loginWeb({ source: { url } });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please sign in</Text>
        <Button
          title="sign in"
          onPress={() => {
            this.props.authRequestAction(authParam);
          }}
        />
      </View>
    );
  }
}

Login.propTypes = {
  authRequestAction: PropTypes.func.isRequired,
  showLoginWeb: PropTypes.bool,
};

export const mapStateToProps = state => ({
  showLoginWeb: state.auth.showLoginWeb,
});

const mapDispatchToProps = dispatch => ({
  authRequestAction: bindActionCreators(authRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
