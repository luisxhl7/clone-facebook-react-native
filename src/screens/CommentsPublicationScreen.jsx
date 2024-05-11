import React from 'react'
import { Button, ScrollView, Text, View } from 'react-native'

export default CommentsPublicationScreen = ({ navigation }) => {

    const goToComments = () => {
        navigation.navigate('home');
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
            <Button title="Go to Comments" onPress={goToComments} />
            </View>
        </ScrollView>
    );
}
