import React, { PropTypes } from 'react';
import { Webview } from 'react-native';
import { connect } from 'react-redux';

const LoginWeb = props =>
  <Webview source={{ url: props.loginUrl }} />;

LoginWeb.propTypes = {
  loginUrl: PropTypes.string.isRequired,
};

export const mapStateToProps = state => ({
  loginUrl: state.auth.loginUrl,
});

export default connect(mapStateToProps)(LoginWeb);
