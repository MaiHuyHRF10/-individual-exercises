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
    color: 'white',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
});

export default MashButton;
