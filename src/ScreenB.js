import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';


export default function ScreenB({navigation, route}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_A', {Message: 'message from Screen B'});
    // navigation.goBack();
    // navigation.setParams({ItemId: 20})
  };

  const {ItemName, ItemId} = route.params;

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
      <Text style={styles.text}>{ItemName}</Text>
      <Text style={styles.text}>ID: {ItemId}</Text>
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