import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge, increaseAge, getCities} from '../redux/actions';
import PushNotification from 'react-native-push-notification';

export default function Home({navigation}) {
  const {cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const handleNotification = (item, index) => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'You clicked on ' + item.country,
      message: item.city,
      bigText:
        item.city +
        ' is one of the largest and most beatiful cities in ' +
        item.country,
      color: 'red',
      id: index,
    });

  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello Redux</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={cities}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              handleNotification(item, index);
              navigation.navigate('Map', {
                city: item.city,
                lat: item.lat,
                lng: item.lng,
              });
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.country}</Text>
              <Text style={styles.subtitle}>{item.city}</Text>
            </View>
          </TouchableOpacity>
        )}
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
  item: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 8,

    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
  },
});
