import React from 'react';
import {Button, StyleSheet, Text, View, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>React Native Tutorial</Text>
      <Button
        title="Youtube Channel"
        onPress={() => {
          Linking.openURL('https://reactnative.dev/docs/linking#openurl');
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
