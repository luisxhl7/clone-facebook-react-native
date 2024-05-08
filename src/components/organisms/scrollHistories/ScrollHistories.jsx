import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CardNewHistory from "../../molecules/cardNewHistory/CardNewHistory";
import CardHistory from '../../molecules/cardHistory/CardHistory';


export default ScrollHistories = () => {
    return (
        <ScrollView horizontal style={ styles.scroll } showsHorizontalScrollIndicator={false}>
            <View style={styles.content}>
                <CardNewHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff',
        height: 230,
        flexDirection: 'row',
        paddingLeft: 5
    },
})