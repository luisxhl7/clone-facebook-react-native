import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import CardNotification from '../components/molecules/cardNotification/CardNotification';

export default NotificationScreen = () => {
  const { user } = useSelector( (state) => state.auth);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    
      <View style={styles.contentSearch}>
        <Text style={styles.title}>Notificaciones</Text>
        <AntDesign name="search1" size={18} color="black" />
      </View>

      {user?.notifications?.map( item => (
        <CardNotification key={item.id} {...item}/>
      ))}
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentSearch:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 15,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  },
})
