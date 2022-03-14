import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ImageBackground,
  ToastAndroid,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Modal,
} from 'react-native';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const submitHandler = () => {
    if (phoneNumber.length == 10) setSubmitted(!submitted);
    else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png',
      }}>
      <Modal
        visible={showWarning}
        onRequestClose={() => setShowWarning(false)}
        transparent
        animationType="fade"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning!!!</Text>
            </View>

            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The phone number must at least 10 characters
              </Text>
            </View>

            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: 'white'}}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      <Button
        title={submitted ? 'clear' : 'submit'}
        onPress={submitHandler}
        disabled={submitted}
      />

      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>Your phone number: {phoneNumber}</Text>
          <Image
            style={styles.image}
            source={require('./assets/done.png')}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          style={styles.image}
          source={require('./assets/error.png')}
          resizeMode="stretch"
        />
      )}

      {/* {submitted && (
        <Text style={styles.text}>Your phone number: {phoneNumber}</Text>
      )} */}
    </ImageBackground>
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
    margin: 11,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 250,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_body: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning_button: {
    backgroundColor: 'green',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    height: 100,
    width: 100,
    margin: 10
  }
});

export default App;
