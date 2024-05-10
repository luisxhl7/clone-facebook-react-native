import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'
import { SimpleLineIcons } from '@expo/vector-icons';

export default CardNotification = ({idUser, notification, date}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        setUser(result)
    }, [idUser])

    return (
        <View style={styles.cardNotification}>
            <Image
                style={styles.image}
                source={user?.profilePicture}
            />
            <View style={styles.description}>
                <Text style={styles.TextName}>{user?.name}</Text>
                <Text style={styles.notificationText} numberOfLines={2} ellipsizeMode="tail">{notification}</Text>
                <Text style={styles.textDate}>{date.toLocaleDateString()}</Text>
            </View>
            <TouchableOpacity style={styles.contentButton}>
                <SimpleLineIcons name="options" size={15} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardNotification:{
        height: 70,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 7,
    },
    TextName:{
        fontWeight: '700',
    },
    textDate:{
        fontSize: 10,
        color: '#65676B'
    },
    description:{
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    notificationText: {
        fontSize: 12,
    },
    contentButton:{
    }
})