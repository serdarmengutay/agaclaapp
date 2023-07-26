import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './screens/Map';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import Login from './screens/auth/Login/Login';
import Sign from './screens/auth/Sign/Sign';
import Home from './screens/Home';
import Sosyal from './screens/Sosyal';
import FidanDik from './screens/FidanDik';
import Profil from './screens/Profil';
import Onboard from './screens/Onboarding/Onboard';

//  import { TabNavigator } from './component/TabNavigator/TabNavigator';


//import MaterialCommunityIcons from 'react-native-vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>

    )
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarInactiveBackgroundColor: '#729D39',
          tabBarActiveBackgroundColor: '#729D39',
          headerShown: false,
        }}>
        <Tab.Screen name='Onboarding' component={Onboard} options={{ tabBarStyle: { display: 'none'}}}/>
        <Tab.Screen options={{ headerShown: false }} name='AuthStackPages' component={AuthStack} />
        <Tab.Screen name='AnaSayfa' component={Home} />
        <Tab.Screen name='Sosyal' component={Sosyal} />
        <Tab.Screen name='Fidan Dik' component={FidanDik} />
        <Tab.Screen name='Profil' component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>


  );
}

export default App;


