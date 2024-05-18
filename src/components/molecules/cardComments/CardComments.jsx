import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'

export default CardComments = ({comment, idUser, navigation}) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        setUser(result)
    }, [idUser])

    const handleRedirectProfileUser = () => {
        navigation.push('profileUser', {
            idUser: idUser
        })
    }
    
    return (
        <View style={styles.cardComments}>
            <TouchableHighlight onPress={handleRedirectProfileUser} underlayColor="transparent">
                <Image
                    style={styles.imageUser}
                    source={user?.profilePicture}
                />
            </TouchableHighlight>
            <View style={styles.contentInfo}>
                <Text style={styles.nameUser}>{user?.name}</Text>
                <Text numberOfLines={3} ellipsizeMode="tail">{comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardComments:{
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        flex: 1
    },
    imageUser:{
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    contentInfo:{
        flex: 1, 
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#f0f2f5',
        borderRadius: 15,
    },
    nameUser:{
        fontSize: 15,
        fontWeight:'700'
    }
})