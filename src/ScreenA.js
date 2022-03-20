import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';


export default function ScreenA({navigation, route}) {
  const onPressHandler = () => {
    // navigation.toggleDrawer();
    navigation.navigate('Screen_B', {ItemName: 'Item from screen A', ItemId: 12})
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? 'yellow' : 'orange',
        })}>
        <Text style={styles.text}>Go To Screen B</Text>
      </Pressable>
      <Text style={styles.text}>{route.params?.Message}</Text>
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