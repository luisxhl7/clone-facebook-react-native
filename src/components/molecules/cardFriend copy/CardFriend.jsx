import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

export default CardFriend = ({ id, name }) => {
    const { user } = useSelector( state => state.auth)
    const { userProfileById, isLoading, profileUsers } = useSelector( state => state.profileUsers)
    const [friendsInCommon, setFriendsInCommon] = useState(null)
    const [profileUser, setProfileUser] = useState(null)
    const [useIsFriend, setUseIsFriend] = useState(false)

    const countFriendsInCommon = () => {

        const profile = profileUsers.filter( item => item.id === id)[0];
        setProfileUser(profile)

        // const isMyFriend = user?.friendsList.map(id => userProfileById?.includes(id));
        const isMyFriend = user?.friendsList.some(item => item.id === id);
        setUseIsFriend(isMyFriend);

        const userFriendsList = user.friendsList?.map(friend => friend.id);
        const friendsListOtherUser = profile?.friendsList?.map(friend => friend.id);

        const commonFriends = userFriendsList?.filter(id => friendsListOtherUser?.includes(id));
        setFriendsInCommon(commonFriends.length)
    }
    
    useEffect(() => {
        countFriendsInCommon()
    }, [id])
    
    return (
        <View style={styles.cardFriend}>
            <Image
                style={styles.image}
                source={profileUser?.profilePicture}
            />
            <View style={styles.contentInfo}>
                <View style={styles.contentName}>
                    <Text style={styles.textName}>{profileUser?.name}</Text>
                    <Text style={styles.textOpacity}>9 sem</Text>
                </View>
                <View style={styles.textFriend}>
                    <Text style={styles.textOpacity}>{friendsInCommon} amigos en común</Text>
                </View>
                {!useIsFriend &&
                    <View style={styles.contentButtons}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Agregar amigo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDelete}>
                            <Text style={styles.textButtonBlack}>Eliminar</Text>
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
    },
    image:{
        width: 85,
        height: 85,
        borderRadius: 50,
        marginRight: 15
    },
    contentName:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textName:{
        fontWeight: 'bold'
    },
    textOpacity:{
        color: '#65676B'
    },
    textFriend:{
        flexDirection: 'row',
        marginVertical: 3
    },
    contentButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    button:{
        flex: 1,
        backgroundColor: '#0866ff',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 7
    },
    textButton:{
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '600'
    },
    textButtonBlack:{
        textAlign: 'center',
        fontWeight: '600'
    },
    buttonDelete:{
        flex: 1,
        backgroundColor: '#E4E6EB',
        justifyContent: 'center',
        borderRadius: 7
    }
})
