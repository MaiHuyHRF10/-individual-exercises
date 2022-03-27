import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Done() {
  return (
    <View style={styles.body}>
        <Text>
            Done
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});