import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { getFriendsUser_thunks, getProfileUser_thunks } from '../store/thunks/profileUserThunks';
import CardFriend from '../components/molecules/cardFriend/CardFriend';

export default FriendsScreen = ({ route, navigation }) => {
    const { idUser } = route.params;
    const { userProfileById, isLoading, profileFriendsList } = useSelector( state => state.profileUsers)
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {
            dispatch(getProfileUser_thunks(idUser))
            .then(() => {
                dispatch(getFriendsUser_thunks());
            })
        }, [idUser])
    );
    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.friendsScreen}>
                <Text style={styles.title}>{userProfileById?.friendsList.length} amigos</Text>
                
                {profileFriendsList?.map( item =>(
                    <CardFriend 
                        key={item?.id} 
                        navigation={navigation}
                        {...item}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    friendsScreen:{
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    title:{
        fontSize: 24,
        fontWeight: '700'
    }
})
