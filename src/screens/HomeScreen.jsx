import React from 'react'
import Thoughts from '../components/organisms/thoughts/Thoughts'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import NavigateHistoriesAndReels from '../navigate/NavigateHistoriesAndReels'

export default HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.home}>
                <Thoughts/>
                <NavigateHistoriesAndReels/>
                <View>
                    <Text>Siguiente sección</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    home:{
        minHeight: 370,
        backgroundColor: '#f0f2f5'
    }
})