import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';
import style from './../styles';

const Profile = props => (
  <View style={style.container}>
    <Text>てきとうなぷろふぃーる</Text>
    <Image
      style={{ width: 150, height: 150 }}
      source={{ uri: props.avatar_url }}
    />
    <Text>{props.username}</Text>
    <Text>{props.description}</Text>
  </View>
);

Profile.propTypes = {
  username: PropTypes.string,
  description: PropTypes.string,
  avatar_url: PropTypes.string,
};

export default Profile;
