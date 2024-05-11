import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'
import {Foundation } from '@expo/vector-icons';
import ContentButtonsPublication from '../contentButtonsPublication/ContentButtonsPublication';

export default CardPublication = ({image, idUser, date, description, reactions ,comments, navigation}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        setUser(result)
    }, [idUser])
    
    const handleRedirect = () => {
        navigation.push('profileUser', {
            idUser: idUser
        })
    }

    return (
        <View style={styles.cardPublication}>
            <TouchableHighlight 
                style={styles.info} 
                underlayColor="transparent"
                onPress={handleRedirect}
            >
                <>
                    <Image
                        style={styles.imageUser}
                        source={user?.profilePicture}
                    />
                    <View>
                        <Text>{user?.name}</Text>
                        <Text style={styles.textDate}>{date.toLocaleDateString()}</Text>
                    </View>
                </>
            </TouchableHighlight>

            <View style={styles.contentDescription}>
                <Text style={styles.textDescription}>{description}</Text>
            </View>
            
            <Image
                style={styles.image}
                fadeDuration={300}
                source={image}
            />
            
            <View style={styles.contentReactions}>
                <TouchableHighlight style={styles.buttonReaction}>
                    {reactions.length > 0 ?
                        <>
                            <Foundation name="like" size={22} color="#0866ff" style={styles.buttonReactionIcon}/>
                            <Text style={styles.buttonReactionText}>{reactions.length}</Text>
                        </>
                        :
                        <>
                        </>
                    }
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonReaction}>
                    {comments.length > 0 ?
                        <Text style={styles.buttonReactionText}>{comments.length} comentarios</Text>
                        :
                        <></>
                    }
                </TouchableHighlight>
            </View>

            <ContentButtonsPublication/>
        </View>
    )
}

const styles = StyleSheet.create({
    cardPublication:{
        backgroundColor: '#ffffff',
        marginTop: 7
    },
    imageUser:{
        width: 35,
        height: 35,
        borderRadius: 50,
        marginRight: 7
    },
    textDate:{
        fontSize: 11,
        color: '#65676B'
    },
    info:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center'
    },
    contentDescription:{
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textDescription:{
        fontSize: 13
    },
    image:{
        height: 350,
        width: '100%',
        resizeMode: 'cover'
    },
    contentReactions:{
        marginHorizontal: 10,
        marginVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonReaction:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton:{
        marginRight: 5
    },
    buttonReactionText:{
        color:'#65676B'
    },
    buttonReactionIcon:{
        marginRight: 2,
    }
})