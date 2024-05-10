import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


export default CardMarket = ({market, price, title}) => {
    return (
        <View style={styles.cardMarket}>
            <Image
                style={styles.image}
                source={market[0]}
            />
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                {price} $ {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardMarket:{
        width: '49.5%',
    },
    image:{
        width: '100%',
        height: 150
    },
    text:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight: '500'
    }

})
