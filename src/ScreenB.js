import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';


export default function ScreenB({navigation}) {
  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'yellow' : 'orange',
        })}>
        <Text style={styles.text}>Go back to ScreenA</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});