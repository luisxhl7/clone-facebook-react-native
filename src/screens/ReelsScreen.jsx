import React, { useCallback, useState } from 'react'
import { FlatList, RefreshControl} from 'react-native'
import { dataReels } from '../data/dataReels'
import CardPublicationReel from '../components/molecules/cardPublicationReel/CardPublicationReel'
import { useIsFocused } from '@react-navigation/native';

export default ReelsScreen = () => {
  const isFocused = useIsFocused();
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [refreshing, setRefreshing] = useState(false);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setVisibleIndex(viewableItems[0].index);
    }
  };
    
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (!isFocused) {
    return <>
    </>
  }
  
  return (
    <FlatList
      data={dataReels}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({item, index}) => (
        <CardPublicationReel {...item} position={index} visibleIndex={visibleIndex}/>
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}
