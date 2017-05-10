import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

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

const Token = props => (
  <View style={styles.container}>
    <Text style={styles.text}>code</Text>
    <Text style={styles.text}>{props.code}</Text>
  </View>
);

Token.propTypes = {
  code: PropTypes.string.isRequired,
};

export default connect()(Token);
