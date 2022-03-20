import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';


export default function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'yellow' : 'orange',
        })}>
        <Text style={styles.text}>Toggle Drawer</Text>
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