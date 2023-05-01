import React from "react";
import { } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from "../../screens/Map";

const Stack = createNativeStackNavigator();


function FidanDikStack() {
    <Stack.Navigator initialRoutName="Map">
        <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
}


export default FidanDikStack;