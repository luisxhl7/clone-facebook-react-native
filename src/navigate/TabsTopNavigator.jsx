import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather, MaterialCommunityIcons, Ionicons,SimpleLineIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ReelsScreen from '../screens/ReelsScreen';
import MarketPlace from '../screens/MarketPlace';
import NotificationScreen from '../screens/NotificationScreen';
import MenuScreen from '../screens/MenuScreen';
import FriendsScreen from '../screens/FriendsScreen';

const FirstTab  = createMaterialTopTabNavigator();

const TabsTopNavigator = () => {
    return (
      <FirstTab.Navigator 
        initialRouteName='home'
        screenOptions={{
          tabBarActiveTintColor:'#0866ff'
        }}
      >
        <FirstTab.Screen name="home" component={HomeScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <Feather name="home" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <FirstTab.Screen name="reels" component={ReelsScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <MaterialCommunityIcons name="television-play" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <FirstTab.Screen name="friends" component={FriendsScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <Feather name="users" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <FirstTab.Screen name="marketPlace" component={MarketPlace} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <MaterialCommunityIcons name="storefront-outline" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <FirstTab.Screen name="notification" component={NotificationScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <Ionicons name="notifications-outline" size={24} color={focused ? color : "#65676b"} />
            ),
          }}
        />
        <FirstTab.Screen name="menu" component={MenuScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <SimpleLineIcons name="menu" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
      </FirstTab.Navigator>
    );
}

export default TabsTopNavigator