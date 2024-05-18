import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'
import { Audio } from 'expo-av';

export default CardComments = ({comment, idUser, navigation}) => {
    const [user, setUser] = useState()
    const [like, setLike] = useState(false)
    const [sound, setSound] = useState();

    const styleLike = [
        styles.textButton,
        like && styles.textLikeActive
    ]


    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        setUser(result)
    }, [idUser])

    const handleRedirectProfileUser = () => {
        navigation.push('profileUser', {
            idUser: idUser
        })
    }

    const handleOnLike = async() =>{
        if (!like) {
            const { sound } = await Audio.Sound.createAsync( require('../../../../assets/sounds/like-sound.mp3')
            );
            setSound(sound);
            await sound.playAsync();
        }
        setLike(!like)
    }
    
    return (
        <View>
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
            <View style={styles.contentOptions}>
            <TouchableHighlight underlayColor="transparent" style={styles.buttonLike} onPress={handleOnLike}>
                <Text style={styleLike}>Me gusta</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent">
                <Text style={styles.textButton}>Responder</Text>
            </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardComments:{
        marginVertical: 5,
        flexDirection: 'row',
    },
    imageUser:{
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    contentInfo:{
        marginLeft: 10,
        padding: 10,
        maxWidth: '90%',
        backgroundColor: '#f0f2f5',
        borderRadius: 15,
    },
    nameUser:{
        fontSize: 15,
        fontWeight:'700'
    },
    contentOptions:{
        minWidth: '70%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonLike:{
        marginRight: 10
    },
    textButton:{
        fontWeight: '700',
        color: '#65676B'
    },
    textLikeActive:{
        color: '#0866ff'
    }
})