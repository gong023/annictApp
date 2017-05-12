import React from 'react';
import { View, Text, Image } from 'react-native';

export default props => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      style={{ width: 25, height: 25 }}
      source={{ uri: 'https://annict.com/images/og_image.png' }}
    />
    <Text style={{ color: props.selected ? 'blue' : 'black' }}>
      {props.title}
    </Text>
  </View>
);
