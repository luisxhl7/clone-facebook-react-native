import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'
import ContentButtonsPublication from '../contentButtonsPublication/ContentButtonsPublication';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../../store/slices/profileUsersSlice';
import { dataHistories } from '../../../data/dataHistories';

export default CardPublication = ({image, idUser, datePublication, description, reactions ,comments, navigation, idPublication}) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    const [history, setHistory] = useState(false)

    const imageUserStyle = [
        styles.contentImageUser,
        history && styles.historyActive
    ]

    useEffect(() => {
        const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
        const haveHistory = dataHistories.some((history) => history.idUser === idUser);
        setHistory(haveHistory)
        setUser(result)
    }, [idUser])
    
    const handleRedirectProfileUser = () => {
        dispatch(isLoading({state: true}))
        navigation.push('profileUser', {
            idUser: idUser
        })
    }
    const handleRedirectPublication = () => {
        dispatch(isLoading({state: true}))
        navigation.push('publication', {
            idPublication: idPublication
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
                    <Text style={styles.textDate}>{datePublication}</Text>
                </View>
            </View>

            <View style={styles.contentDescription}>
                <Text style={styles.textDescription}>{description}</Text>
            </View>
            
            <TouchableHighlight
                underlayColor="transparent"
                onPress={handleRedirectPublication} 
            >
                <Image
                    style={styles.image}
                    fadeDuration={300}
                    source={image}
                />
            </TouchableHighlight>

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
    image:{
        height: 350,
        width: '100%',
        resizeMode: 'cover'
    },
})