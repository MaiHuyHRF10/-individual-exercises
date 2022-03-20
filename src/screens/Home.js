import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../utils/CustomButton';

export default function Home({navigation}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning !!!', 'Please enter your name.');
    } else {
      try {
        var user = {
          Name: name,
        }
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('Success !!!', 'Your date have been updated.');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
      try {
        await AsyncStorage.clear();
        navigation.navigate('Login')
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello {name}</Text>
      <Text style={styles.text}>Your age is {age}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <CustomButton
        title="Update"
        color="#ff7f00"
        onPressFunction={updateData}
      />
      <CustomButton
        title="Delete"
        color="#f40100"
        onPressFunction={removeData}
      />
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
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#555',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 120,
    marginBottom: 10,
  },
});
