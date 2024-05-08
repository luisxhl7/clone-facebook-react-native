import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default CardNewHistory = () => {
  return (
    <View>
      <LinearGradient
        colors={['#f0489b', '#fe9a4f']}
        style={styles.cardNewHistory}
        start={{x:0, y:0}}
        end={{x:0, y:1}}
      >
        <AntDesign name="pluscircle" size={28} color="black" style={styles.circlePlus}/>
        <Text style={styles.textNewHistory}>Crear reel</Text>
      </LinearGradient>
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
  },
  newHistory:{
    height: 140,
    width: 100,
  },
  textNewHistory:{
    color: '#ffffff',
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