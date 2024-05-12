import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';
import CardMarket from '../components/molecules/cardMarket/CardMarket'

export default MarketPlace = () => {
  const { markets } = useSelector( (state) => state.markets);

  const [refreshing, setRefreshing] = useState(false);
    
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
          colors={['#0866ff']}
        />
      }
    >
      <View style={styles.contentSearch}>
        <Text style={styles.title}>Marketplace</Text>
        <AntDesign name="search1" size={18} color="black" />
      </View>
      <View style={styles.contentButtons}>
        <TouchableOpacity style={styles.button}>
          <>
            <Feather name="edit" size={13} color="black" style={styles.iconButton}/>
            <Text style={styles.textButton}>Vender</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <>
            <Feather name="list" size={14} color="black" style={styles.iconButton}/>
            <Text style={styles.textButton}>Categorías</Text>
          </>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textCaption}>Destacados de hoy</Text>
      </View>
      <View style={styles.contentCards}>
        {markets?.map( item => (
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
  contentButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 7,
    gap: 10,
    borderBottomWidth: .5,
    marginHorizontal: 10,
    borderColor: '#aeb3bd'
  },
  button:{
    backgroundColor: '#E4E6EB',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textButton:{
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center'
  },
  iconButton:{
    marginRight: 3
  },
  textCaption:{
    fontWeight: 'bold',
    paddingVertical: 5,
    marginLeft: 10
  }
})