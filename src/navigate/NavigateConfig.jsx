import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createNativeStackNavigator();

const NavigateConfig = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="notification" component={NotificationScreen} />
        </Stack.Navigator>
    )
}

export default NavigateConfig