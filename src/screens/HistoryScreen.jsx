import React, { useEffect, useRef, useState } from 'react'
import { BackHandler, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import Constants from 'expo-constants'
import { dataHistories } from '../data/dataHistories';
import { getProfileUser_thunks } from '../store/thunks/profileUserThunks';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { reactionsImage } from '../../assets/images/reactions';
import CountDownBar from '../components/atoms/countDownBar/CountDownBar';

export default HistoryScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { idUser } = route.params;
    const { userProfileById } = useSelector(state => state.profileUsers)
    const [ history, setHistory ] = useState(null)
    const [ progress, setProgress ] = useState(1);
    const timerRef = useRef(null);

    useEffect(() => {
        const backAction = () => {
          navigation.navigate('home');
          return true;
        };
        BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    useEffect(() => {
        stopCountdown();
        const history = dataHistories.filter( item => item.idUser === idUser)[0]
        setHistory(history)
        dispatch(getProfileUser_thunks(idUser))
        countdown()
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

    const handleInputFocus = () => {
        // Realiza la acción que desees al seleccionar el TextInput
        console.log('Mensaje', 'El input ha sido seleccionado');
    };

    const countdown = () => {
        const totalTime = 10000;
        let startTime = Date.now();

        timerRef.current = setInterval(() => {
            let elapsedTime = Date.now() - startTime;
            let newTime = totalTime - elapsedTime;
            console.log(timerRef.current);
            if (newTime <= 0) {
                clearInterval(timerRef.current);
                console.log('Timer finished!');
                handleNextRedirect();
            }

            const newProgress = newTime / totalTime;
            setProgress(newProgress >= 0 ? newProgress : 0);
        }, 100);
    };

    const stopCountdown = () => {
        if (timerRef.current) {
            console.log('limpiando');
            clearInterval(timerRef.current); // Limpiar el temporizador actual
            timerRef.current = null; // Reiniciar la referencia
        }
    };

    return (
        <View style={styles.historyScreen}>
            
            <View style={styles.infoUser}>
                <CountDownBar progress={progress}/>
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
            
            <View style={styles.contentImage}>
                <ImageBackground 
                    source={history?.histories[0]?.history}
                    blurRadius={100}
                >
                    <Image
                        source={history?.histories[0]?.history}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <TouchableHighlight style={styles.buttonGhostLeft} onPress={() => handleBackRedirect()} underlayColor="transparent">
                        <Text></Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonGhostRight} onPress={() => handleNextRedirect()} underlayColor="transparent">
                        <Text></Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>

            <View>
                <ScrollView 
                    horizontal 
                    contentContainerStyle={styles.contentReactions} 
                    showsHorizontalScrollIndicator={false}
                >
                    <TextInput 
                        underlayColor="transparent" 
                        style={styles.button}
                        placeholder='Envía un mensaje...'
                        placeholderTextColor='#ffffff'
                        onFocus={handleInputFocus}
                    />
                    <Image
                        source={reactionsImage.love}
                        style={styles.iconReaction}
                        resizeMode="cover"
                    />
                    <Image
                        source={reactionsImage.like}
                        style={styles.iconReaction}
                        resizeMode="cover"
                    />
                    <Image
                        source={reactionsImage.amuses}
                        style={styles.iconReaction}
                        resizeMode="cover"
                    />
                    <Image
                        source={reactionsImage.matters}
                        style={styles.iconReaction}
                        resizeMode="cover"
                    />
                    <Image
                        source={reactionsImage.surprise}
                        style={styles.iconReaction}
                        resizeMode="cover"
                    />
                    <Image
                        source={reactionsImage.sad}
                        style={styles.iconReaction}
                        resizeMode="cover"
                    />
                    <Image
                        source={reactionsImage.anger}
                        style={styles.iconReaction}
                        resizeMode="cover"
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    historyScreen:{
        paddingTop: Constants.statusBarHeight + 10,
        position: 'relative',
        flex: 1
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
    imageUser:{
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    contentName:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flex: 1
    },
    text:{
        fontSize: 17,
        fontWeight: '700',
        color: '#ffffff'
    },

    contentImage:{
        flex: 1,
        position: 'relative'
    },
    buttonGhostLeft:{
        position: 'absolute',
        height: '100%',
        width: '50%',
        left: 0
    },
    buttonGhostRight:{
        position: 'absolute',
        height: '100%',
        width: '50%',
        right: 0
    },
    image: {
        width: '100%',
        height: '100%',
    },

    contentReactions:{
        flexDirection:'row',
        backgroundColor: '#000000',
        alignItems: 'center',
        height: 75,
    },
    button:{
        height: 40,
        width: 230,
        borderRadius: 25,
        borderColor: '#2f3130',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#2f3130'

    },
    textButton:{
        color: '#595b5f',
    },
    iconReaction:{
        marginHorizontal: 4,
        height: 40,
        width: 40,
    }
})