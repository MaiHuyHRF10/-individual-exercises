import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please enter your phone number:</Text>
      <TextInput
        style={styles.input}
        placeholder=" e.g. 0942xxx1xx"
        onChangeText={value => setPhoneNumber(value)}
        keyboardType="numeric"
        maxLength={10}
        //secureTextEntry
        //editable={false}
      />
      <Text style={styles.text}>Your phone number: {phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'orange',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    borderWidth: 1,
    width: 250,
    borderRadius: 4,
    borderColor: '#555',
    fontSize: 15,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
});

export default App;
