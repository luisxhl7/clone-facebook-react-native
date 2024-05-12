import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default ProfileCover = ({profilePicture, name, lastName, isFriend, isLoading }) => {
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
        <Image
          style={styles.imageUser}
          source={isLoading ? null : profilePicture}
          alt='Imagen de perfil del usuario'
        />
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
  imageUser:{
    width: 155,
    height: 155,
    left: 20,
    top: -110,
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 99,
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