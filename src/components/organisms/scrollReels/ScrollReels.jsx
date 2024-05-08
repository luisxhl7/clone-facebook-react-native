import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default ScrollReels = () => {
    return (
        <View style={styles.content}>
            <Text>Reels</Text>
        </View>
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