import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getPublicationById_thunks } from '../store/thunks/publicationsThunks';
import Constants from 'expo-constants'
import ContentButtonsPublication from '../components/molecules/contentButtonsPublication/ContentButtonsPublication';

export default PublicationScreen = ({ navigation, route }) => {
    const { publicationById } = useSelector(state => state.publications)
    const dispatch = useDispatch()
    const { idPublication } = route.params;

    useEffect(() => {
        dispatch(getPublicationById_thunks(idPublication))
    }, [idPublication])

    return (
        <View style={styles.publicationScreen}>
            <Image
                style={styles.image}
                fadeDuration={300}
                source={publicationById?.image}
            />
            <View style={styles.contentInfo}>
                <Text style={styles.textDescription}>{publicationById?.description}</Text>
                <ContentButtonsPublication 
                    navigation={navigation} 
                    idPublication={idPublication} 
                    reactions={publicationById?.reactions} 
                    comments={publicationById?.comments}
                />
            </View>
        </View>
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
        width: '100%',
        bottom: 10,
        zIndex: 99
    },
    image:{
        height: 350,
        width: '100%',
        resizeMode: 'cover'
    },
    textDescription:{
        color: '#ffffff',
        paddingBottom: 10,
        paddingHorizontal: 10
    }
})
