import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTaskID, setTasks} from '../redux/actions';

export default function ToDo({navigation}) {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = () => {
    AsyncStorage.getItem('Tasks')
      .then(tasks => {
        const parsedTasks = JSON.parse(tasks);
        if (parsedTasks && typeof parsedTasks === 'object') {
          dispatch(setTasks(parsedTasks));
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => {
            dispatch(setTaskID(item.ID));
            navigation.navigate('Task')
          }}>
            <Text style={styles.title} numberOfLines={1}>
              {item.Title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={1}>
              {item.Desc}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(setTaskID(tasks.length + 1));
          navigation.navigate('Task');
        }}>
        <FontAwesome5 name={'plus'} size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    bottom: 16,
    elevation: 5,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5
  },
  title: {
    color: 'black',
    fontSize: 28,
    margin: 5
  },
  subtitle: {
    color: '#999999',
    fontSize: 20,
    margin: 5
  }
});
