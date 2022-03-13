import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Linking, ScrollView, RefreshControl} from 'react-native';

const App = () => {
  const [items, setItem] = useState([
    {key: 1, content: 1},
    {key: 2, content: 2},
    {key: 3, content: 3},
    {key: 4, content: 4},
    {key: 5, content: 5},
    {key: 6, content: 6},
    {key: 7, content: 7},
    {key: 8, content: 8},
    {key: 9, content: 9},
    {key: 10, content: 10},
  ]);

  const [refresh, setRefresh] = useState(false);

  const onFresh = () => {
    setRefresh(true);
    setItem([...items, {key: 11, content: 11}]);
    setRefresh(false);
  };

  return (
    <ScrollView
      style={styles.body}
      refreshControl={<RefreshControl refreshing={refresh} onRefresh={onFresh}/>}>
      {items.map(object => {
        return (
          <View style={styles.item} key={object.key}>
            <Text style={styles.text}>{object.content}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  item: {
    backgroundColor: 'orange',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 45,
    color: 'black',
    fontWeight: '700',
  },
});

export default App;
