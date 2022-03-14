import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const MashButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : props.color},
        styles.button,
        {...props.style},
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    width: 150,
    height: 50,
  },
});

export default MashButton;
