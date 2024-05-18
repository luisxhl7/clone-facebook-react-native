import React, { useEffect, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'
import { Feather } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import ContentButtonsPublication from '../contentButtonsPublication/ContentButtonsPublication';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/slices/profileUsersSlice';
import { dataHistories } from '../../../data/dataHistories';

export default CardPublicationReel = ({image, idPublication, idUser, date, description, reactions, comments, position, visibleIndex, navigation}) => {
    const video = useRef(null);
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [sound, setSound] = useState(true);
    const [history, setHistory] = useState(false)

    const imageUserStyle = [
        styles.contentImageUser,
        history && styles.historyActive
    ]

    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        const haveHistory = dataHistories.some((history) => history.idUser === idUser);
        setHistory(haveHistory)
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
    const handleRedirectProfileUser = () => {
        dispatch(isLoading({state: true}))
        navigation.push('profileUser', {
            idUser: idUser
        })
    }
    const handleRedirectHistoriesUser = () => {
        dispatch(isLoading({state: true}))
        navigation.push('history', {
            idUser: idUser
        })
    }
    
    return (
        <View style={styles.cardPublication}>
            <View style={styles.info}>
            <TouchableHighlight 
                underlayColor="transparent"
                onPress={history ? handleRedirectHistoriesUser : handleRedirectProfileUser} 
                style={imageUserStyle}
            >
                <Image
                    style={styles.imageUser}
                    source={user?.profilePicture}
                />
            </TouchableHighlight>
                <View>
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={handleRedirectProfileUser} 
                    >
                        <Text>{user?.name}</Text>
                    </TouchableHighlight>
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

            <ContentButtonsPublication navigation={navigation} idPublication={idPublication} reactions={reactions} comments={comments}/>
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
    },
    contentImageUser:{
        borderRadius: 50,
        marginRight: 7,
        padding: 2
    },
    historyActive:{
        borderColor: '#0866ff',
        borderWidth: 3,
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