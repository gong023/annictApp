import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const Dummy = props => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>dummy</Text>
  </View>
);

export default connect()(Dummy);
