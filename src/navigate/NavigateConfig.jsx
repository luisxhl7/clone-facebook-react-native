import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsTopNavigator from './TabsTopNavigator';
import FriendsScreen from '../screens/FriendsScreen';
import ProfileUser from '../screens/ProfileUser';
import { Button } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const NavigateConfig = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="tabs" component={TabsTopNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="friends" component={FriendsScreen} />
            <Stack.Screen name="profileUser" component={ProfileUser} 
                options={{
                    headerTitle: '',
                    headerRight: () => (
                        <AntDesign name="search1" size={18} color="black" onPress={() => alert('Buscador')}/>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default NavigateConfig