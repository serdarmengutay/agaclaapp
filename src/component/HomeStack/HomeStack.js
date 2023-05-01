import React from "react";
import { } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function HomeStack() {
    <Stack.Navigator initialRoutName="Home">
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
}


export default HomeStack;