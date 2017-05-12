import React, { PropTypes } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Config from 'react-native-config';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { tokenRequest } from './../actions';

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
});

class Token extends React.Component {
  componentWillMount() {
    this.props.requestToken({
      code: this.props.code,
      client_id: Config.CLIENT_ID,
      client_secret: Config.CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'annict://callback',
    });
  }

  componentDidUpdate() {
    axios.defaults.headers.common.Authorization = `Bearer ${this.props.token}`;
    Actions.mainTab();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating />
      </View>
    );
  }
}

Token.propTypes = {
  token: PropTypes.string,
  code: PropTypes.string.isRequired,
  requestToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  requestToken: bindActionCreators(tokenRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Token);
