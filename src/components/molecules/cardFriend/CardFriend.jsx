import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector,  } from 'react-redux'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { isLoading } from '../../../store/slices/profileUsersSlice'

export default CardFriend = ({ id, navigation, profilePicture, name, isFriend, friendsList }) => {
    const { user } = useSelector( (state) => state.auth);
    const [commonFriends, setCommonFriends] = useState(null)
    const dispatch = useDispatch()

    const redirectProfileUser = () => {
        dispatch(isLoading({state: true}))
        navigation.push('profileUser', {idUser: id})
    }

    useEffect(() => {
        const friendsList1 = friendsList.map(friend => friend.id);
        const friendsList2 = user.friendsList.map(friend => friend.id);

        const commonFriendsCount = friendsList1.filter(friendId => friendsList2.includes(friendId)).length;

        setCommonFriends(commonFriendsCount)
    }, [id])
    

    return (
        <View style={styles.cardFriend} >
            <TouchableHighlight onPress={redirectProfileUser} underlayColor="transparent">
                <Image
                    style={styles.image}
                    source={profilePicture}
                />
            </TouchableHighlight>
            <View style={styles.contentInfo}>
                <TouchableHighlight style={styles.contentName} underlayColor="transparent" onPress={redirectProfileUser}>
                    <>
                        <Text style={styles.textName}>{name}</Text>
                        <Text style={styles.textOpacity}>{commonFriends} amigos en común</Text>
                    </>
                </TouchableHighlight>
                {!isFriend &&
                    <View style={styles.contentButtons}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Añadir</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardFriend:{
        flexDirection: 'row',
        paddingVertical: 7,
    },
    contentInfo:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    image:{
        width: 85,
        height: 85,
        borderRadius: 50,
        marginRight: 15
    },
    textName:{
        fontWeight: 'bold'
    },
    textOpacity:{
        color: '#65676B'
    },
    contentButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    button:{
        backgroundColor: '#0866ff',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7
    },
    textButton:{
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '600'
    },
})
