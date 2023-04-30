import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './screens/Map';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profil from './screens/Profil';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import LogIn from './screens/LogIn';


//import MaterialCommunityIcons from 'react-native-vector-icons';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarInactiveBackgroundColor: '#729D39',
          tabBarActiveBackgroundColor: '#729D39',
        }}>
        <Tab.Screen name='Profil' component={Profil} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='FidanDik' component={Map} />
        <Tab.Screen name='SignIn' component={SignIn} />
        <Tab.Screen name='LogIn' component={LogIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


