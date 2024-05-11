import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, MaterialIcons, FontAwesome, Feather, MaterialCommunityIcons, FontAwesome6, Foundation  } from '@expo/vector-icons';
import { usuariosFacebook } from '../data/dataUsers';

export default MenuScreen = ({ navigation }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const result = usuariosFacebook[0];
    setUser(result)
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentSearch}>
        <Text style={styles.title}>Menú</Text>
        <AntDesign name="search1" size={18} color="black" />
      </View>
      <View style={styles.contentInfoUser}>
        <Image
          style={styles.imageUser}
          source={user?.profilePicture}
        />
        <Text style={styles.nameUser}>{user?.name} {user?.lastName}</Text>
      </View>
      <View style={styles.contentColumns}>
        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.cardLink}>
            <Foundation name="results-demographics" size={24} color="black" />
            <Text style={styles.text}>Panel para profesionales</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardLink}>
            <FontAwesome name="newspaper-o" size={22} color="black" />
            <Text style={styles.text}>Feeds</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardLink}>
            <MaterialIcons name="ondemand-video" size={22} color="black" />
            <Text style={styles.text}>Videos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardLink}>
            <Feather name="bookmark" size={22} color="black" />
            <Text style={styles.text}>Guardado</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentButtons}>

          <TouchableOpacity style={styles.cardLink} onPress={() => navigation.navigate('friends')}>
            <Feather name="users" size={22} color="black" />
            <Text style={styles.text}>Amigos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardLink}>
            <FontAwesome name="users" size={22} color="black" />
            <Text style={styles.text}>Grupos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardLink}>
            <MaterialCommunityIcons name="storefront-outline" size={22} color="black" />
            <Text style={styles.text}>Marketplace</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardLink}>
          <FontAwesome6 name="clock-rotate-left" size={22} color="black" />
          <Text style={styles.text}>Recuerdos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonBack}>
        <Text style={styles.textButtonBack}>Salir</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentColumns:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 10
  },
  contentButtons:{
    width: '48.5%',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  cardLink:{
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 10
  },
  text:{
  },
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
  nameUser:{
    fontSize: 15,
    fontWeight: '600'
  },
  imageUser:{
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 5
  },
  contentInfoUser:{
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  buttonBack:{
    backgroundColor: '#E4E6EB',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 15
  },
  textButtonBack:{
    textAlign: 'center',
    fontWeight: '700'
  }

})