import React, { useEffect, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'
import {Foundation, Feather } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import ContentButtonsPublication from '../contentButtonsPublication/ContentButtonsPublication';

export default CardPublicationReel = ({image, idUser, date, description, reactions, comments, position, visibleIndex}) => {
    const video = useRef(null);
    const [user, setUser] = useState(null);
    const [sound, setSound] = useState(true);

    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        setUser(result);
    }, [idUser]);

    useEffect(() => {
        if (position === visibleIndex) {
            video.current?.playAsync();
        } else {
            video.current?.pauseAsync();
        }
    }, [position, visibleIndex]);

    const handlePressSound = () => {
        setSound(!sound)
        video.current.setVolumeAsync(sound ? 0 : 1);
    }
    
    return (
        <View style={styles.cardPublication}>
            <View style={styles.info}>
                <Image
                    style={styles.imageUser}
                    source={user?.profilePicture}
                />
                <View>
                    <Text>{user?.name}</Text>
                    <Text style={styles.textDate}>{date.toLocaleDateString()}</Text>
                </View>
            </View>

            <View style={styles.contentDescription}>
                <Text style={styles.textDescription}>{description}</Text>
            </View>

            <View style={styles.contentVideo}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={image}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay={position === visibleIndex}
                />
                {sound ?
                    <Feather name="volume-2" size={24} color="#ffffff" style={styles.buttonSound} onPress={handlePressSound}/>
                    :
                    <Feather name="volume-x" size={24} color="#ffffff" style={styles.buttonSound} onPress={handlePressSound}/>            
                }
            </View>
            
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
    contentButtons:{
        flexDirection: 'row',
        borderTopWidth: .5,
        marginHorizontal: 10,
        borderColor: '#aeb3bd'
    },
    video:{
        height: 500,
        width: '100%',
    },
    button:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    textButton:{
        textAlign: 'center',
        color: '#65676B',
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
    },
    contentVideo:{
        position: 'relative',
        backgroundColor: '#000000'
    },
    buttonSound:{
        position: 'absolute',
        bottom: 15,
        right: 15
    }
})