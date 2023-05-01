import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FidanDikStack from "../FidanDikStack/FidanDikStack";
import HomeStack from "../HomeStack/HomeStack";

const Tab = createBottomTabNavigator()

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='FidanDik' component={FidanDikStack} />
            <Tab.Screen name='Home' component={HomeStack} />

        </Tab.Navigator>
    )
}

