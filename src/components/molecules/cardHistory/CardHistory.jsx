import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default CardHistory = () => {
  return (
    <View style={styles.cardHistory}>
      <Image
        style={styles.imageUser}
        source={require('../../../../assets/perfil-1.png')}
      />
      <Image
        style={styles.history}
        source={require('../../../../assets/perfil-1.png')}
      />
      <Text style={styles.text}>Juan</Text>
    </View>
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
  imageUser:{
    width: 30, 
    height: 30,
    zIndex: 99,
    position: 'absolute',
    top: 5,
    borderRadius: 50,
    left: 5,
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