import React, { useEffect, useRef, useState } from 'react'
import { BackHandler, Image, PanResponder, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { dataHistories } from '../data/dataHistories';
import { getProfileUser_thunks } from '../store/thunks/profileUserThunks';
import { useDispatch, useSelector } from 'react-redux';

export default HistoryScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { idUser } = route.params;
    const { userProfileById } = useSelector(state => state.profileUsers)
    const [history, setHistory] = useState(null)

    const [gestureDetected, setGestureDetected] = useState(false);

    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => !gestureDetected,
        onPanResponderMove: (event, gestureState) => {
          if (!gestureDetected) {
            const { dx } = gestureState;
            const swipeThreshold = 50;
  
            if (dx > swipeThreshold) {
              handleBackRedirect();
              setGestureDetected(true);
            } else if (dx < -swipeThreshold) {
              handleNextRedirect();
              setGestureDetected(true);
            }
          }
        },
      })
    ).current;

    useEffect(() => {
        const backAction = () => {
          navigation.navigate('home');
          return true;
        };
        BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    useEffect(() => {
        const history = dataHistories.filter( item => item.idUser === idUser)[0]
        setHistory(history)
        dispatch(getProfileUser_thunks(idUser))
    }, [idUser])
    
    const handleNextRedirect = () => {
        const currentIndex = dataHistories.findIndex(item => item.idUser === idUser)

        if (currentIndex !== -1) {
            const nextIndex = currentIndex + 1;
          
            if (nextIndex < dataHistories.length) {
                const nextElement = dataHistories[nextIndex];
                navigation.push('history', {
                    idUser: nextElement.idUser
                })
            } else {
                navigation.navigate('home')
            }
          } else {
            console.log("El elemento actual no está presente en el array.");
        }
    }

    const handleBackRedirect = () => {
        const currentIndex = dataHistories.findIndex(item => item.idUser === idUser);
    
        if (currentIndex !== -1) {
            const nextIndex = currentIndex - 1;
    
            if (nextIndex >= 0) {
                const nextElement = dataHistories[nextIndex];
                navigation.push('history', {
                    idUser: nextElement.idUser
                });
            } else {
                navigation.navigate('home');
            }
        } else {
            console.log("El elemento actual no está presente en el array.");
        }
    };

    return (
        <View style={styles.historyScreen} {...panResponder.panHandlers}>
            <View style={styles.infoUser}>
                <View style={styles.contentImageUser}>
                    <Image
                        source={userProfileById?.profilePicture}
                        resizeMode="cover"
                        style={styles.imageUser}
                    />
                </View>
                <Text style={styles.text}>{userProfileById?.name}</Text>
            </View>
            <View style={styles.contentImage}>
                <Image
                    source={history?.histories[0]?.history}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View>
                <Text>{idUser}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    historyScreen:{
        paddingTop: Constants.statusBarHeight + 10,
        position: 'relative'
    },
    contentImage:{
        width: '100%',
        overflow: 'hidden',
        height: 700,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    text:{
        fontSize: 17,
        fontWeight: '500'
    },
    infoUser:{
        position: 'absolute',
        top: Constants.statusBarHeight + 10,
        zIndex: 99,
        flexDirection: 'row',
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    contentImageUser:{
        borderRadius: 50,
        marginRight: 10
    },
    imageUser:{
        width: 40,
        height: 40,
        borderRadius: 50,
    }
})