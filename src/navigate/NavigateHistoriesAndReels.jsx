import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScrollReels from '../components/organisms/scrollReels/ScrollReels';
import ScrollHistories from '../components/organisms/scrollHistories/ScrollHistories';

const SecondTab = createMaterialTopTabNavigator();

export default NavigateHistoriesAndReels = () => {
    return (
        <SecondTab.Navigator 
            initialRouteName='sectionHistories'
            screenOptions={{
                tabBarActiveTintColor: '#0866ff',
                tabBarInactiveTintColor: '#65676b',
                tabBarLabelStyle: { textTransform: 'none', fontWeight: 'bold' },
                swipeEnabled: false
            }}
        >
            <SecondTab.Screen name="sectionHistories" component={ScrollHistories}
                options={{
                    tabBarLabel: 'Historias',
                    tabBarLabelStyle: { textTransform: 'none', fontWeight: 'bold' },
                }}
            />
            <SecondTab.Screen name="sectionReals" component={ScrollReels}
                options={{
                    tabBarLabel: 'Reels',
                    tabBarLabelStyle: { textTransform: 'none', fontWeight: 'bold' }
                }}
            />
        </SecondTab.Navigator>
    )
}
