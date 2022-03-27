import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Map from './screens/Map';
import Camera from './screens/Camera';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
