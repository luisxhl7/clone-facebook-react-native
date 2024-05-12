import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { getPostUser_thunks, getProfileUser_thunks } from '../store/thunks/profileUserThunks';
import CardPublication from '../components/molecules/cardPublication/CardPublication';
import TextEndPublications from '../components/atoms/textEndPublications/TextEndPublications';
import CardDetailsFriends from '../components/molecules/cardDetailsFriends/CardDetailsFriends';
import { useFocusEffect } from '@react-navigation/native';

export default ProfileUserScreen = ({ route, navigation }) => {
  const { userProfileById, userPosts, isLoading } = useSelector( state => state.profileUsers)
  const {idUser} = route.params;
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch( getProfileUser_thunks(idUser))
      dispatch( getPostUser_thunks(idUser))
    }, [idUser])
  );


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {!isLoading ?
      <>
        <View style={styles.contentImages}>
          <Image
            style={styles.BackgroundImage}
            source={userProfileById?.profilePicture}
          />
          <Image
            style={styles.imageUser}
            source={userProfileById?.profilePicture}
          />
        </View>
        <View style={styles.contentInfoUser}>
          <Text style={styles.textName}>{`${userProfileById?.name} ${userProfileById?.lastName}`}</Text>
          <View style={styles.contentInfoFriendsCommon}>
            <Text> <Text style={styles.textBold}>4</Text> amigos en común</Text>
          </View>
          <View style={styles.contentButtons}>
            <TouchableOpacity style={styles.buttonAdd}>
              {userProfileById?.isFriend ?
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
        </View>
        <View style={styles.contentDetails}>
          <Text style={styles.titleContentDetails}>Detalles</Text>
          <Text style={styles.textContentDEtails}>
            <FontAwesome name="home" size={18} color="black" /> Vive en 
            <Text style={styles.textBold}> {userProfileById?.location} </Text>
          </Text>
          <TouchableOpacity style={{alignContent:'center', alignItems: 'center', flexDirection:'row'}}>
            <SimpleLineIcons name="options" size={18} color="black" style={{marginRight:5}}/>
            <Text >
              Ver la información de {userProfileById?.name}
            </Text>
          </TouchableOpacity>

          <View style={styles.contentListFriends}>
            <Text style={styles.titleContentDetails}>Amigos</Text>
            <Text style={styles.titleContentDetails}>{userProfileById?.friendsList.length} ( 3 en común)</Text>
            
            <View style={styles.contentCardFriends}>
              {userProfileById?.friendsList.slice(0, 6).map(item => (
                <CardDetailsFriends 
                  key={item?.id} 
                  {...item} 
                  navigation={navigation}
                />
              ))}
            </View>
          
          </View>

          <TouchableOpacity style={styles.buttonBack}>
          <Text style={styles.textButtonBack}>Ver todos los amigos</Text>
        </TouchableOpacity>
        </View>

        {userPosts?.map( item => (
          <CardPublication {...item} key={item.idPublication} navigation={navigation}/>
        ))}

        <TextEndPublications/>
      </>  
      :
      <>
      </>  
    }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentImages:{
    position: 'relative'
  },
  BackgroundImage:{
    height: 210,
    width: '100%'
  },
  imageUser:{
    width: 155,
    height: 155,
    left: 20,
    bottom: -40,
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 99
  },
  contentInfoUser:{
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