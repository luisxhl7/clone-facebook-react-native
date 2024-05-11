import React, { useCallback, useEffect, useState } from 'react'
import Thoughts from '../components/organisms/thoughts/Thoughts'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import NavigateHistoriesAndReels from '../navigate/NavigateHistoriesAndReels'
import { dataPublications } from '../data/dataPublications'
import CardPublication from '../components/molecules/cardPublication/CardPublication'

export default HomeScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false);
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles.home}>
                <Thoughts/>
                <NavigateHistoriesAndReels/>
            </View>
            {dataPublications.map( item => (
                <CardPublication {...item} key={item.idPublication} navigation={navigation}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    home:{
        minHeight: 350,
        backgroundColor: '#f0f2f5'
    }
})