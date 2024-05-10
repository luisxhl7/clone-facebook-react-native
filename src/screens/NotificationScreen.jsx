import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default NotificationScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentSearch}>
        <Text style={styles.title}>Notificaciones</Text>
        <AntDesign name="search1" size={18} color="black" />
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
})
