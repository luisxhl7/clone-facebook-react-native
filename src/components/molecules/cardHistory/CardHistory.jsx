import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { usuariosFacebook } from '../../../data/dataUsers'

export default CardHistory = ({idUser, histories, navigation}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const result = usuariosFacebook.filter((user) => user.id === idUser)[0];
    setUser(result)
  }, [idUser])

  const handleRedirect = () => {
    navigation.push('history', {
      idUser: idUser
    })
  }

  return (
    <TouchableHighlight onPress={handleRedirect}>
      <View style={styles.cardHistory}>
        <View style={styles.contentImageUser}>
          <Image
            style={styles.imageUser}
            source={user?.profilePicture}
          />
        </View>
        <Image
          style={styles.history}
          source={histories[0].history}
        />
        <Text style={styles.text}>{user?.name}</Text>
      </View>
    </TouchableHighlight >
  )
}

const styles = StyleSheet.create({
  cardHistory:{
    position: 'relative',
    height: 200,
    width: 100,
    margin: 3,
    marginTop: 17,
    borderRadius: 12,
    overflow: 'hidden'
  },
  contentImageUser:{
    zIndex: 99,
    position: 'absolute',
    top: 7,
    left: 7,
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#0866ff',
    borderRadius: 50,
    padding: 2
  },
  imageUser:{
    borderRadius: 50,
    width: 28, 
    height: 28,
  },
  history:{
    height: 200,
    width: 100,
  },
  text: {
    position: 'absolute',
    bottom: 3,
    left: 7,
    color: '#ffffff',
    fontWeight: 'bold'
  }
})