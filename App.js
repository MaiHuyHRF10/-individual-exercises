import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Linking} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(1);
  const handleClickButton = () => {
    setNumber(number + 1);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{number}</Text>
      <Button
        title="Increase"
        onPress={handleClickButton}></Button>
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
    margin: 10,
  },
});

export default App;
