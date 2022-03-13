import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Linking, ScrollView, RefreshControl, FlatList, SectionList} from 'react-native';

const App = () => {
  const [items, setItem] = useState([
    { content: 'item 1'},
    { content: 'item 2'},
    { content: 'item 3'},
    { content: 'item 4'},
    { content: 'item 5'},
    { content: 'item 6'},
    { content: 'item 7'},
    { content: 'item 8'},
    { content: 'item 9'},
    {  content: 'item 10'},
  ]);

  const [refresh, setRefresh] = useState(false);

  const onFresh = () => {
    setRefresh(true);
    setItem([...items, {content: 'item add'}]);
    setRefresh(false);
  };

  const DATA = [
    {
      title: 'section 1',
      data: ['title 1.1', 'title 1.2', 'title 1.3']
    },
    {
      title: 'section 2',
      data: ['title 2.1', 'title 2.2', 'title 2.3']
    },
    {
      title: 'section 4',
      data: ['title 4.1', 'title 4.2', 'title 4.3', 'title 4.4']
    }
  ]
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />

    // FlatList usage
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   // horizontal
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.content}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl refreshing={refresh} onRefresh={onFresh} />
    //   }
    // />

    //ScrollView usage
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={<RefreshControl refreshing={refresh} onRefresh={onFresh}/>}>
    //   {items.map(object => {
    //     return (
    //       <View style={styles.item} key={object.key}>
    //         <Text style={styles.text}>{object.content}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
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
