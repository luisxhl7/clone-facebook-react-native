import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsTopNavigator from './TabsTopNavigator';
import FriendsScreen from '../screens/FriendsScreen';
import ProfileUserScreen from '../screens/ProfileUserScreen';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const NavigateConfig = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="tabs" component={TabsTopNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="friends" component={FriendsScreen} />
            <Stack.Screen name="profileUser" component={ProfileUserScreen} 
                options={{
                    animation: 'slide_from_right',
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