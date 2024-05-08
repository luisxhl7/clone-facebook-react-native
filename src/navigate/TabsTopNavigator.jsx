import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather, MaterialCommunityIcons, Ionicons,SimpleLineIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ReelsScreen from '../screens/ReelsScreen';
import MarketPlace from '../screens/MarketPlace';
import NotificationScreen from '../screens/NotificationScreen';
import MenuScreen from '../screens/MenuScreen';
import FriendsScreen from '../screens/FriendsScreen';

const Tab = createMaterialTopTabNavigator();

const TabsTopNavigator = () => {
    return (
      <Tab.Navigator 
        initialRouteName='home'
        screenOptions={{
          tabBarActiveTintColor:'#0866ff'
        }}
      >
        <Tab.Screen name="home" component={HomeScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <Feather name="home" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <Tab.Screen name="reels" component={ReelsScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <MaterialCommunityIcons name="television-play" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <Tab.Screen name="friends" component={FriendsScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <Feather name="users" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <Tab.Screen name="marketPlace" component={MarketPlace} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <MaterialCommunityIcons name="storefront-outline" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
        <Tab.Screen name="notification" component={NotificationScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <Ionicons name="notifications-outline" size={24} color={focused ? color : "#65676b"} />
            ),
          }}
        />
        <Tab.Screen name="menu" component={MenuScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused ,color}) => (
              <SimpleLineIcons name="menu" size={24} color={focused ? color : "#65676b"} />
            )
          }}
        />
      </Tab.Navigator>
    );
}

export default TabsTopNavigator