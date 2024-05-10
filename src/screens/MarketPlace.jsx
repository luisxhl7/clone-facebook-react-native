import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CardMarket from '../components/molecules/cardMarket/CardMarket'
import { dataMarket } from '../data/dataMarkets'

export default MarketPlace = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentCards}>
        {dataMarket.map( item => (
          <CardMarket key={item.id} {...item}/>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentCards:{
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
})