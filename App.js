import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  view2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  view3: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  row2: {
    flex: 2,
    flexDirection: 'column',
  },
  view4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  view5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  row3: {
    flex: 7,
    flexDirection: 'row',
  },
  view6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
});

export default App;
