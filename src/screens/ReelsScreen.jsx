import React, { useEffect, useState } from 'react'
import { FlatList} from 'react-native'
import { dataReels } from '../data/dataReels'
import CardPublicationReel from '../components/molecules/cardPublicationReel/CardPublicationReel'
import { useIsFocused } from '@react-navigation/native';

const ReelsScreen = () => {
  const isFocused = useIsFocused();
  const [visibleIndex, setVisibleIndex] = useState(-1);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setVisibleIndex(viewableItems[0].index);
    }
  };
  if (!isFocused) {
    return <>
    </>
  }
  
  return (
    <FlatList
      data={dataReels}
      renderItem={({item, index}) => (
        <CardPublicationReel {...item} position={index} visibleIndex={visibleIndex}/>
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default ReelsScreen