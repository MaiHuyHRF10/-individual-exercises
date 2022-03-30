import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTaskID, setTasks} from '../redux/actions';

export default function ToDo({navigation}) {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, []);

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

  const deleteTask = id => {
    const filteredTasks = tasks.filter(task => task.ID !== id);
    AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
      .then(() => {
        {
          dispatch(setTasks(filteredTasks));
          Alert.alert('Success', 'Task removed successfully.');
        }
      })
      .catch(err => console.log(err));
  };

  const checkTask = (id, newValue) => {
    const index = tasks.findIndex(task => task.ID == id);
    if (index > -1) {
      let newTasks = [...tasks];
      newTasks[index].Done = newValue;
      AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTasks(newTasks));
          Alert.alert('Success', 'Task state is changed!');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={tasks.filter(task => task.Done === false)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              dispatch(setTaskID(item.ID));
              navigation.navigate('Task');
            }}>
            <View style={styles.item_row}>
              <View
                style={[
                  {
                    backgroundColor:
                      item.Color === 'red'
                        ? '#f28b82'
                        : item.Color === 'blue'
                        ? '#aecbfa'
                        : item.Color === 'green'
                        ? '#ccff90'
                        : '#ffffff',
                  },
                  styles.color,
                ]}></View>
              <CheckBox
                value={item.Done}
                onValueChange={newValue => checkTask(item.ID, newValue)}
              />
              <View style={styles.item_body}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.Title}
                </Text>
                <Text style={styles.subtitle} numberOfLines={1}>
                  {item.Desc}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => {
                  deleteTask(item.ID);
                }}>
                <FontAwesome5 name={'trash'} size={25} color="red" />
              </TouchableOpacity>
            </View>
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
    paddingRight: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  item_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_body: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 28,
    margin: 5,
  },
  subtitle: {
    color: '#999999',
    fontSize: 20,
    margin: 5,
  },
  delete: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    width: 20,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
