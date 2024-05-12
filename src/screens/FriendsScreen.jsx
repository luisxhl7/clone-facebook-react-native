import React from 'react'
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native'

export default FriendsScreen = () => {
    const { user } = useSelector( (state) => state.auth);

    return (
        <View>
            {user?.friendsList.map( item =>(
            <Text key={item?.id}>
                {item?.name}
            </Text>
            ))}
        </View>
    )
}
