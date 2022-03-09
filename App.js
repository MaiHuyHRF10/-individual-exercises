import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Linking} from 'react-native';

const App = () => {
  //style with StyleSheet
  return (
    <View style={styles.body}>
      <Text style={styles.text}>style and StyleSheet</Text>
    </View>
  );

  // style inline
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       backgroundColor: 'orange',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     }}>
  //     <Text style={styles.text}>style and StyleSheet</Text>
  //   </View>
  // );

};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  }
});

export default App;
