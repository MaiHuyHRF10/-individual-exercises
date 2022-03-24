import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions';



export default function Login({navigation}) {
  const {name, age} = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  

  const setData = async () => {
    if (name.length === 0 || age.length === 0) {
      Alert.alert('Warning !!!', 'Please write your data.');
    } else {
      try {
        dispatch(setName(name));
        dispatch(setAge(age));

        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getData = () => {
    try {
      var len = name.length;
      if (len > 0) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/redux.png')} />
      <Text style={styles.text}>Redux</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={value => dispatch(setName(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={value => dispatch(setAge(value))}
      />
      <CustomButton title="login" color="#1eb900" onPressFunction={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0080ff',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#555',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  
});
