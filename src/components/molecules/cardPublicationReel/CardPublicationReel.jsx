import React, { useEffect, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'
import { AntDesign, EvilIcons, Ionicons, Foundation } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';

export default CardPublicationReel = ({image, idUser, date, description, reactions ,comments}) => {
    const video = useRef(null);
    const [user, setUser] = useState(null)
    const [status, setStatus] = useState({});
    const position = 0
    useEffect(() => {
      if (position === 0 ) {
        setStatus({ shouldPlay: true });
      }else{
        setStatus({ shouldPlay: false });
      }
    }, []);

    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        setUser(result)
    }, [idUser])
    
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
            
            <Video
                ref={video}
                style={styles.image}
                source={image}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={status.shouldPlay}
                isLooping
                isMuted
                onPlaybackStatusUpdate={status => setStatus(() => status)}
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
            
            <View style={styles.contentButtons}>
                <TouchableHighlight style={styles.button}>
                    <>
                        <AntDesign name="like2" size={20} color="#65676B" style={styles.iconButton}/>
                        <Text style={styles.textButton}>
                            Me gusta
                        </Text>
                    </>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <>
                        <EvilIcons name="comment" size={24} color="#65676B" style={styles.iconButton}/>
                        <Text style={styles.textButton}>
                            Comentar
                        </Text>
                    </>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <>
                        <Ionicons name="arrow-redo-outline" size={20} color="#65676B" style={styles.iconButton}/>
                        <Text style={styles.textButton}>
                            Compartir
                        </Text>
                    </>
                </TouchableHighlight>
            </View>
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
        borderTopWidth: 1,
        marginHorizontal: 10,
        borderColor: '#aeb3bd'
    },
    image:{
        height: 690,
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
    }
})