import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import {Foundation } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default ContentButtonsPublication = ({navigation, idPublication, reactions, comments}) => {
    const [isLike, setIsLike] = useState(false);
    const [sound, setSound] = useState();

    const handleLikePublication = async() => {
        if (!isLike) {
            const { sound } = await Audio.Sound.createAsync( require('../../../../assets/sounds/like-sound.mp3')
            );
            setSound(sound);
            await sound.playAsync();
        }
        setIsLike(!isLike)
    }

    const handleRedirect = () => {
        navigation.push('commentspublication',{
            idPublication: idPublication
        })
    }

    useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
            }
          : undefined;
    }, [isLike]);

    return (
        <View>
            <View style={styles.contentReactions}>
                <TouchableHighlight style={styles.buttonReaction}>
                    {reactions?.length > 0 ?
                        <>
                            <Foundation name="like" size={22} color="#0866ff" style={styles.buttonReactionIcon}/>
                            <Text style={styles.buttonReactionText}>{reactions.length}</Text>
                        </>
                        :
                        <>
                        </>
                    }
                </TouchableHighlight>
                <TouchableOpacity 
                    style={styles.buttonReaction} 
                    onPress={() => navigation.push('commentspublication',{idPublication: idPublication})}
                >
                    {comments?.length > 0 ?
                        <Text style={styles.buttonReactionText}>{comments.length} comentarios</Text>
                        :
                        <></>
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.contentButtons}>
                <TouchableOpacity style={styles.button} onPress={handleLikePublication}>
                    <>
                        <AntDesign name="like2" size={20} color={isLike ? '#0866ff': "#65676B"} style={styles.iconButton}/>
                        <Text style={{...styles.textButton, color: isLike ? '#0866ff': "#65676B"}}>
                            Me gusta
                        </Text>
                    </> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleRedirect}>
                    <>
                        <EvilIcons name="comment" size={24} color="#65676B" style={styles.iconButton}/>
                        <Text style={styles.textButton}>
                            Comentar
                        </Text>
                    </>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <>
                        <Ionicons name="arrow-redo-outline" size={20} color="#65676B" style={styles.iconButton}/>
                        <Text style={styles.textButton}>
                            Compartir
                        </Text>
                    </>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentButtons:{
        flexDirection: 'row',
        borderTopWidth: .5,
        marginHorizontal: 10,
        borderColor: '#aeb3bd'
    },
    button:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    contentReactions:{
        marginHorizontal: 10,
        marginVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentReactions:{
        marginHorizontal: 10,
        marginVertical: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textButton:{
        textAlign: 'center',
        color: '#65676B',
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