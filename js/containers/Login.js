import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Config from 'react-native-config';
import { Actions } from 'react-native-router-flux';
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

class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.showLoginWeb && this.props.showLoginWeb) {
      Actions.loginWeb({ source: { html: this.props.loginHtml } });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please sign in</Text>
        <Button
          title="sign in"
          onPress={() => {
            this.props.authRequestAction({
              response_type: 'code',
              client_id: Config.CLIENT_ID,
              redirect_uri: 'annict://oauth',
            });
          }}
        />
      </View>
    );
  }
}

Login.propTypes = {
  authRequestAction: PropTypes.func.isRequired,
  loginHtml: PropTypes.string,
  showLoginWeb: PropTypes.bool,
};

export const mapStateToProps = state => ({
  loginHtml: state.auth.loginHtml,
  showLoginWeb: state.auth.showLoginWeb,
});

const mapDispatchToProps = dispatch => ({
  authRequestAction: bindActionCreators(authRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
