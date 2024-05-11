import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default Header = () => {
    return (
        <View style={styles.header} >
            <View>
                <Text style={styles.title}>facebook</Text>
            </View>
            <View style={styles.contentIcons}>
                <AntDesign name="pluscircle" size={18} color="black" />
                <AntDesign name="search1" size={18} color="black" />
                <MaterialCommunityIcons name="facebook-messenger" size={18} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 75,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    title:{
        fontSize: 27,
        color: '#0866ff',
        fontWeight: 'bold',
        marginLeft: 10
    },
    contentIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        marginRight: 10
    }
});
