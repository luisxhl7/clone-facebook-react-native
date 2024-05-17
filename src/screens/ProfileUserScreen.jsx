import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native'
import { getPostUser_thunks, getProfileUser_thunks } from '../store/thunks/profileUserThunks';
import CardPublication from '../components/molecules/cardPublication/CardPublication';
import TextEndPublications from '../components/atoms/textEndPublications/TextEndPublications';
import ContentDetailsUser from '../components/molecules/contentDetailsUser/ContentDetailsUser';
import ProfileCover from '../components/molecules/profileCover/ProfileCover';

export default ProfileUserScreen = ({ route, navigation }) => {
  const { userProfileById, userPosts, isLoading } = useSelector( state => state.profileUsers)
  const { idUser } = route.params;
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch( getProfileUser_thunks(idUser))
      dispatch( getPostUser_thunks(idUser))
    }, [idUser])
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProfileCover
        idUser={userProfileById?.id} 
        name={userProfileById?.name} 
        profilePicture={userProfileById?.profilePicture} 
        lastName={userProfileById?.lastName} 
        isFriend={userProfileById?.isFriend}
        isLoading={isLoading}
        navigation={navigation}
      />
      
      {!isLoading &&
        <>
          <ContentDetailsUser
            idUser={idUser}
            navigation={navigation}
            location={userProfileById?.location} 
            name={userProfileById?.name} 
            friendsList={userProfileById?.friendsList}
          />
          {userPosts?.map( item => (
            <CardPublication {...item} key={item.idPublication} navigation={navigation}/>
          ))}

          <TextEndPublications/>
        </>
      }

    </ScrollView>
  )
}
