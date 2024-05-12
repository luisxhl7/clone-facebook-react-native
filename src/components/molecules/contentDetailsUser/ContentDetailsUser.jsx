import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CardDetailsFriends from '../cardDetailsFriends/CardDetailsFriends'
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

export default ContentDetailsUser = ({ location, name, friendsList, navigation, idUser }) => {
  return (
    <View style={styles.contentDetails}>
      <Text style={styles.titleContentDetails}>Detalles</Text>
      
      <Text style={styles.textContentDEtails}>
        <FontAwesome name="home" size={18} color="black" /> Vive en 
        <Text style={styles.textBold}> {location} </Text>
      </Text>

      <TouchableOpacity style={{alignContent:'center', alignItems: 'center', flexDirection:'row'}}>
        <SimpleLineIcons name="options" size={18} color="black" style={{marginRight:5}}/>
        <Text >
          Ver la información de {name}
        </Text>
      </TouchableOpacity>

      <View style={styles.contentListFriends}>
        <Text style={styles.titleContentDetails}>Amigos</Text>
        <Text style={styles.titleContentDetails}>{friendsList?.length} (3 en común)</Text>
        
        <View style={styles.contentCardFriends}>
          {friendsList?.slice(0, 6).map(item => (
            <CardDetailsFriends
              key={item?.id} 
              {...item} 
              navigation={navigation}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.push('friends', {idUser: idUser})}>
        <Text style={styles.textButtonBack}>Ver todos los amigos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textBold:{
    fontWeight: 'bold'
  },
  contentButtons:{
    flexDirection: 'row',
    alignContent: 'space-between',
    gap: 10
  },

  contentDetails:{
    marginVertical: 5,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  titleContentDetails:{
    fontSize: 15,
    fontWeight: '600'
  },
  textContentDEtails:{
    paddingVertical: 15
  },

  contentListFriends:{
    marginTop: 20
  },
  contentCardFriends:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 10
  },
  buttonBack:{
    backgroundColor: '#E4E6EB',
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 5,
    marginBottom: 15
  },
  textButtonBack:{
    textAlign: 'center',
    fontWeight: '400'
  }
})