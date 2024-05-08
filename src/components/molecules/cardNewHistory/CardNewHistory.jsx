import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default CardNewHistory = () => {
  return (
    <View style={styles.cardNewHistory}>
      <Image
        style={styles.newHistory}
        source={require('../../../../assets/perfil-1.png')}
      />
      <AntDesign name="pluscircle" size={28} color="black" style={styles.circlePlus}/>
      <Text style={styles.textNewHistory}>Crear historia</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardNewHistory:{
    position: 'relative',
    height: 200,
    width: 100,
    margin: 3,
    marginTop: 17,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#f7f8fa',
    borderWidth: .5
  },
  newHistory:{
    height: 140,
    width: 100,
  },
  textNewHistory:{
    color: '#000000',
    position: 'absolute',
    bottom: 3,
    left: 7,
  },
  circlePlus:{
    color: '#0866ff',
    margin: 'auto',
    width: 33,
    paddingHorizontal: 1,
    paddingVertical: 2,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    marginTop: -17,
    textAlign: 'center'
  }
})