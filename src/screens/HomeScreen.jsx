import React from 'react'
import Thoughts from '../components/organisms/thoughts/Thoughts'
import { ScrollView, StyleSheet, View } from 'react-native'
import NavigateHistoriesAndReels from '../navigate/NavigateHistoriesAndReels'
import { dataPublications } from '../data/dataPublications'
import CardPublication from '../components/molecules/cardPublication/CardPublication'

export default HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.home}>
                <Thoughts/>
                <NavigateHistoriesAndReels/>
            </View>
            <View>
                {dataPublications.map( item => (
                    <CardPublication {...item} key={item.idPublication}/>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    home:{
        minHeight: 350,
        backgroundColor: '#f0f2f5'
    }
})