import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import CardFriend from '../components/molecules/cardFriend/CardFriend';
import { usuariosFacebook } from '../data/dataUsers';


export default FriendsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentSearch}>
        <Text style={styles.title}>Amigos</Text>
        <AntDesign name="search1" size={18} color="black" />
      </View>
      <View style={styles.contentButtons}>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.textButton}>Sugerencias</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.textButton}>Tus amigos</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.textButton}>Mejores amigos</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.moreFriends}>
        <Text style={styles.caption}>Solicitudes de amistad</Text>
        <TouchableHighlight>
          <Text style={styles.textMore}>Ver todo</Text>
        </TouchableHighlight>
      </View>
      <View>
        {usuariosFacebook.map( item => (
          <CardFriend key={item.id} {...item}/>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentSearch:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 7,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  },
  contentButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 7,
  },
  moreFriends:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 7,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  button:{
    backgroundColor: '#E4E6EB',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  textButton:{
    fontWeight: '600',
    fontSize: 15
  },
  caption:{
    fontSize: 17,
    marginBottom: 7,
    fontWeight: '500'
  },
  textMore:{
    color: '#0866ff'
  }
})