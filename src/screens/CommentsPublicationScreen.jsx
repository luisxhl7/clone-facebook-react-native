import React from 'react'
import { Button, ScrollView, Text, View } from 'react-native'

export default CommentsPublicationScreen = ({ navigation, route }) => {
    const { idPublication } = route.params;

    const goToComments = () => {
        navigation.navigate('home');
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
                <Text>{idPublication}</Text>
            <Button title="Go to Comments" onPress={goToComments} />
            </View>
        </ScrollView>
    );
}
