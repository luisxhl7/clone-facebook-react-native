import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { dataHistories } from '../../../data/dataHistories';

export default ProfileCover = ({profilePicture, name, lastName, isFriend, isLoading, idUser, navigation }) => {
  const [history, setHistory] = useState(false)
  
  useEffect(() => {
    const haveHistory = dataHistories.some((history) => history.idUser === idUser);
    setHistory(haveHistory)
  }, [idUser])

  const handleRedirectHistoriesUser = () => {
    navigation.push('history', {
      idUser: idUser
    })
  } 

  return (
    <>
      <View>
        <Image
          style={styles.BackgroundImage}
          source={isLoading ? null : profilePicture}
          alt='Imagen de fondo de perfil del usuario'
        />
      </View>
      <View style={styles.contentInfoUser}>
        <TouchableHighlight style={styles.contentImageUser} onPress={handleRedirectHistoriesUser}>
          <View style={history && styles.contentImageUserCenter}>
            <Image
              style={styles.imageUser}
              source={isLoading ? null : profilePicture}
              alt='Imagen de perfil del usuario'
            />
          </View>
        </TouchableHighlight>
        <Text style={styles.textName}>{!isLoading && `${name} ${lastName}`}</Text>
        {!isLoading &&
          <>
            <View style={styles.contentInfoFriendsCommon}>
              <Text> <Text style={styles.textBold}>4</Text> amigos en común</Text>
            </View>
            <View style={styles.contentButtons}>
              <TouchableOpacity style={styles.buttonAdd}>
                {isFriend ?
                  <>
                    <Ionicons name="person" size={18} color="#ffffff" />
                    <Text style={styles.buttonTextAdd}>Amigo</Text>
                  </>
                  :
                  <>
                    <Ionicons name="person-add" size={18} color="#ffffff" />
                    <Text style={styles.buttonTextAdd}>Añadir amigo</Text>
                  </>
                }
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonMessage}>
                <MaterialCommunityIcons name="facebook-messenger" size={18} color="black" />
                <Text style={styles.buttonTextMessage}>Enviar mensaje</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  BackgroundImage:{
    height: 210,
    width: '100%',
    backgroundColor: '#8a8d92'
  },
  contentImageUserCenter:{
    borderRadius: 100,
    borderWidth: 3,
    borderColor:"#0866ff"
  },
  contentImageUser:{
    position: 'absolute',
    zIndex: 99,
    left: 20,
    top: -110,
    borderRadius: 100,
    borderWidth: 3,
    borderColor:"#ffffff"
  },
  historyActive:{
  },
  imageUser:{
    width: 150,
    height: 150,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#ffffff',
    backgroundColor: '#8a8d92'
  },
  contentInfoUser:{
    position: 'relative',
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    height: 175
  },
  textName:{
    fontWeight: 'bold',
    fontSize: 20
  },
  contentInfoFriendsCommon:{
    marginTop: 5,
    marginBottom: 20
  },
  textBold:{
    fontWeight: 'bold'
  },
  contentButtons:{
    flexDirection: 'row',
    alignContent: 'space-between',
    gap: 10
  },
  buttonAdd:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0866ff',
    paddingVertical: 8,
    borderRadius: 7
  },
  buttonMessage:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4E6EB',
    paddingVertical: 8,
    borderRadius: 7
  },
  buttonTextAdd:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 3
  },
  buttonTextMessage: {
    textAlign: 'center',
    fontWeight: '700',
    marginLeft: 3
  },
})