import React, { useEffect, useRef, useState } from 'react'
import { BackHandler, Image, ImageBackground, PanResponder, StyleSheet, Text, TextInput, View } from 'react-native'
import Constants from 'expo-constants'
import { dataHistories } from '../data/dataHistories';
import { getProfileUser_thunks } from '../store/thunks/profileUserThunks';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

export default HistoryScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { idUser } = route.params;
    const { userProfileById } = useSelector(state => state.profileUsers)
    const [history, setHistory] = useState(null)
    const [text, setText] = useState('');

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
                <View style={styles.lineTime}></View>
                <View style={styles.contentImageUser}>
                    <Image
                        source={userProfileById?.profilePicture}
                        resizeMode="cover"
                        style={styles.imageUser}
                    />
                    <View style={styles.contentName}>
                        <Text style={styles.text}>{userProfileById?.name}</Text>
                        <AntDesign name="close" size={24} color="black" onPress={() => navigation.navigate('home')}/>
                    </View>
                </View>
            </View>
            
            <ImageBackground 
                style={styles.contentImage}
                source={history?.histories[0]?.history} 
            >
                <Image
                    source={history?.histories[0]?.history}
                    style={styles.image}
                    resizeMode="center"
                />
            </ImageBackground>

            <View style={styles.contentReactions}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, paddingHorizontal: 10 }}
                    onChangeText={text => setText(text)}
                    value={text}
                    placeholder="Escribe aquí"
                />
                <Image
                    source={userProfileById?.profilePicture}
                    resizeMode="cover"
                    style={styles.imageUser}
                />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    historyScreen:{
        paddingTop: Constants.statusBarHeight + 10,
        position: 'relative'
    },
    lineTime:{
        borderWidth: 1,
        marginBottom: 10
    },
    contentImage:{
        width: '100%',
        overflow: 'hidden',
        alignContent: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '90%',
    },
    text:{
        fontSize: 17,
        fontWeight: '700',
        color: '#ffffff'
    },
    infoUser:{
        position: 'absolute',
        top: Constants.statusBarHeight + 10,
        zIndex: 99,
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    contentImageUser:{
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentName:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flex: 1
    },
    imageUser:{
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    contentReactions:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})