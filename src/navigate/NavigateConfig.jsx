import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import TabsTopNavigator from './TabsTopNavigator';
import FriendsScreen from '../screens/FriendsScreen';
import ProfileUserScreen from '../screens/ProfileUserScreen';
import CommentsPublicationScreen from '../screens/CommentsPublicationScreen';
import { LoginScreen } from '../screens/LoginScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Stack = createNativeStackNavigator();

const NavigateConfig = () => {
    const {status} = useSelector( (state) => state.auth);

    const isLogin = status === 'authenticated'

    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'vertical',
            }}
        >
            {!isLogin ?
                <>
                    <Stack.Screen name="login" component={LoginScreen} />
                </>
                :
                <>
                    <Stack.Screen name="tabs" component={TabsTopNavigator} options={{ headerShown: false }}/>
                    <Stack.Screen name="history" component={HistoryScreen} options={{ headerShown: false }}/>
                    
                    <Stack.Screen name="friends" component={FriendsScreen} 
                        options={({ route }) => ({
                            title: route.params.name
                        })}
                    />
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
                            headerTitle: 'Comentarios',
                            gestureDirection: 'vertical-inverted'
                        }}
                    />
                </>
            }
        </Stack.Navigator>
    )
}

export default NavigateConfig;
