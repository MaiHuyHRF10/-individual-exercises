import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = () => {
    setSubmitted(!submitted);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please enter your phone number:</Text>
      <TextInput
        style={styles.input}
        placeholder=" e.g. 0942xxx1xx"
        onChangeText={value => setPhoneNumber(value)}
        keyboardType="numeric"
        maxLength={10}
        //secureTextEntry
        //editable={false}
      />
      {/* button usage
      <Button
        title={submitted ? 'clear' : 'submit'}
        onPress={submitHandler}
        disabled={submitted}
      /> */}

      {/* TouchableOpacity usage
      <TouchableOpacity
        style={styles.button}
        onPress={submitHandler}
        activeOpacity={0.5}>
        <Text style={styles.text}>{submitted ? 'clear' : 'submit'}</Text>
      </TouchableOpacity> */}

      {/* TouchableHighlight usage
      <TouchableHighlight
        style={styles.button}
        onPress={submitHandler}
        activeOpacity={0.9}
        underlayColor="yellow">
        <Text style={styles.text}>{submitted ? 'clear' : 'submit'}</Text>
      </TouchableHighlight> */}

      <Pressable
        onPress={submitHandler}
        android_ripple={{color: '#00f'}}
        hitSlop={{
          top: 10,
          bottom: 10,
          right: 10,
          left: 10,
        }}
        style={({pressed}) => [
          {backgroundColor: pressed ? 'orange' : 'yellow'},
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'clear' : 'submit'}</Text>
      </Pressable>

      {submitted && (
        <Text style={styles.text}>Your phone number: {phoneNumber}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    borderRadius: 4,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    borderWidth: 1,
    width: 250,
    borderRadius: 4,
    borderColor: '#555',
    fontSize: 15,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
});

export default App;
