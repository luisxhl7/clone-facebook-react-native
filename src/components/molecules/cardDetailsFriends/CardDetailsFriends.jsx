import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'

export default CardDetailsFriends = ({ id, navigation }) => {
    const [friend, setFriend] = useState(null)

    useEffect(() => {
      const result = usuariosFacebook.filter((user) => user.id === id)[0];
      setFriend(result)
    }, [id])

    const handleRedirect = () => {
        navigation.push('profileUser', {
            idUser: id
        })
    }

    return (
        <TouchableHighlight 
            style={styles.cardDetailsFriends} 
            underlayColor="transparent"
            onPress={handleRedirect}
        >
            <>
                <Image
                    style={styles.image}
                    source={friend?.profilePicture}
                />
                <Text 
                    style={styles.text} 
                    numberOfLines={2} 
                    ellipsizeMode="tail"
                >
                    {`${friend?.name} ${friend?.lastName}`}
                </Text>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    cardDetailsFriends:{
        width: '31%',
        marginVertical: 5
    },
    image:{
        borderRadius: 7,
        width: 'auto',
        height: 100,
    },
    text:{
        // margin
    }
})