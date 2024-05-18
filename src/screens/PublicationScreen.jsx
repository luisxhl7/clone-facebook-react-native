import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getPublicationById_thunks } from '../store/thunks/publicationsThunks';
import Constants from 'expo-constants'
import ContentButtonsPublication from '../components/molecules/contentButtonsPublication/ContentButtonsPublication';
import { getProfileUser_thunks } from '../store/thunks/profileUserThunks';
import { isLoading } from '../store/slices/publicationsSlice';

export default PublicationScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const { idPublication } = route.params;
    const { publicationById } = useSelector(state => state.publications)
    const { userProfileById } = useSelector(state => state.profileUsers)
    const [hiddenOptions, setHiddenOptions] = useState(true)

    useEffect(() => {
        dispatch(getPublicationById_thunks(idPublication))
    }, [idPublication])

    useEffect(() => {
        dispatch(getProfileUser_thunks(publicationById?.idUser))
    }, [publicationById?.idUser])

    const handleRedirectProfileUser = () => {
        dispatch(isLoading({state: true}))
        navigation.push('profileUser', {
            idUser: publicationById?.idUser
        })
    }

    return (
        <TouchableHighlight onPress={() => setHiddenOptions(!hiddenOptions)} style={styles.publicationScreen}>
            <>
                <Image
                    style={styles.image}
                    fadeDuration={300}
                    source={publicationById?.image}
                />
                {hiddenOptions &&
                    <TouchableWithoutFeedback>
                        <View style={styles.contentInfo}>
                            
                            <TouchableHighlight onPress={handleRedirectProfileUser}>
                                <Text style={styles.textNameUser}>
                                    {userProfileById?.name} {userProfileById?.lastName}
                                </Text>
                            </TouchableHighlight>

                            <Text style={styles.textDescription}>
                                {publicationById?.description}
                            </Text>

                            <ContentButtonsPublication 
                                navigation={navigation} 
                                idPublication={idPublication} 
                                reactions={publicationById?.reactions} 
                                comments={publicationById?.comments}
                            />
                    
                        </View>
                    </TouchableWithoutFeedback>
                }
            </>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    publicationScreen:{
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'center',
        position: "relative"
    },
    contentInfo:{
        position: 'absolute',
        bottom: 0,
        zIndex: 99,
        paddingTop: 15,
        paddingBottom: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    image:{
        width: '100%',
        resizeMode: 'contain'
    },
    textNameUser:{
        color: '#ffffff',
        fontWeight: '800',
        paddingHorizontal: 10,
    },
    textDescription:{
        color: '#ffffff',
        paddingBottom: 10,
        paddingHorizontal: 10
    }
})
