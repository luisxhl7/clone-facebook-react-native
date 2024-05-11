import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsTopNavigator from './TabsTopNavigator';
import FriendsScreen from '../screens/FriendsScreen';
import ProfileUserScreen from '../screens/ProfileUserScreen';
import { AntDesign } from '@expo/vector-icons';
import CommentsPublicationScreen from '../screens/CommentsPublicationScreen';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const NavigateConfig = () => {
    
    const isLogin = true

    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'vertical',
            }}
        >
            {isLogin ?
            <>
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
                <Stack.Screen name="commentspublication" component={CommentsPublicationScreen} 
                    options={{
                        animation: 'slide_from_bottom',
                        headerTitle: '',
                        headerRight: () => (
                            <AntDesign name="search1" size={18} color="black" onPress={() => alert('Buscador')}/>
                        ),
                        gestureDirection: 'vertical-inverted'
                    }}
                />
            </>
            :
            <>
                <Stack.Screen name="login" component={LoginScreen} />
            </>
        }
        </Stack.Navigator>
    )
}

export default NavigateConfig;
