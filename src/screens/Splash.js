import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

export default function Splash({ navigation }) {
  useEffect(() => {
    createChannels();
    setTimeout(() => {
      navigation.replace('My Tasks')
    }, 2000)
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'task-channel',
      channelName: 'Task Channel',
    });
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../assets/checklist.png')}
      />
      <Text style={styles.text}>To-Do List By Huy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 36,
    color: 'white',
  },
});
