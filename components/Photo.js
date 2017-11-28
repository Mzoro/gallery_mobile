import React from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Photo = (props) => {
  return (
    <View>
      <Image style={{width: screenWidth, height: screenWidth}} source={{uri: props.navigation.state.params.url}}/>
    </View>
  );
}

export default Photo;
