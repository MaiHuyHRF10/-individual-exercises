import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

export default function Login({navigation}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'USERS ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      );
    });
  };

  const setData = async () => {
    if (name.length === 0 || age.length === 0) {
      Alert.alert('Warning !!!', 'Please write your data.');
    } else {
      try {
        await db.transaction(async (tx) => {
          // await tx.executeSql(
          //   "INSERT INTO Users (Name, Age) VALUES ('" + name + "'), " + age + "",
          // );
          await tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [name, age]);
        });
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getData = () => {
    try {
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age from Users', [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            navigation.navigate('Home');
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/sqlite.png')} />
      <Text style={styles.text}>SQLite</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={value => setAge(value)}
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
    height: 80,
    margin: 20,
  },
  text: {
    fontSize: 30,
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
