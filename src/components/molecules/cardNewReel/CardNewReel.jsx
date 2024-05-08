import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default CardNewHistory = () => {
  return (
    <View style={styles.cardNewHistory}>
      <AntDesign name="pluscircle" size={28} color="black" style={styles.circlePlus}/>
      <Text style={styles.textNewHistory}>Crear reel</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  newHistory:{
    height: 140,
    width: 100,
  },
  textNewHistory:{
    color: '#000000',
    marginBottom: 5
  },
  circlePlus:{
    color: '#0866ff',
    margin: 'auto',
    width: 33,
    paddingHorizontal: 1,
    paddingVertical: 2,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    marginBottom: 60,
    textAlign: 'center'
  }
})