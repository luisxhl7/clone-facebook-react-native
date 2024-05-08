import React from 'react'
import Thoughts from '../components/molecules/thoughts/Thoughts'
import { ScrollView, StyleSheet, View } from 'react-native'

export default HomeScreen = () => {
    return (
        <View style={styles.home}>
            <ScrollView>
                <Thoughts/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    home:{
        minHeight: 1700,
        backgroundColor: '#f0f2f5'
    }
})