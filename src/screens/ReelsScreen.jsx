import React from 'react'
import { ScrollView, View } from 'react-native'
import { dataReels } from '../data/dataReels'
import CardPublication from '../components/molecules/cardPublication/CardPublication'
import CardPublicationReel from '../components/molecules/cardPublicationReel/CardPublicationReel'

const ReelsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {dataReels.map( item => (
          <CardPublicationReel {...item} key={item.idPublication}/>
        ))}
      </View>
    </ScrollView>
  )
}

export default ReelsScreen