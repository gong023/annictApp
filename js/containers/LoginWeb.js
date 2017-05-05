import React, { PropTypes } from 'react';
import { WebView, Modal } from 'react-native';
import { connect } from 'react-redux';

const LoginWeb = props =>
  <Modal animationType="slide">
    <WebView source={{ html: props.loginHtml }} />;
  </Modal>;

LoginWeb.propTypes = {
  loginHtml: PropTypes.string.isRequired,
};

export const mapStateToProps = state => ({
  loginHtml: state.auth.loginHtml,
  scene: state.routes.scene,
});

export default connect(mapStateToProps)(LoginWeb);
