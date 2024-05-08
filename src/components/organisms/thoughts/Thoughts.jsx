import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default Thoughts = () => {
    return (
        <View style={styles.contentThoughts}>
            <Image
                source={require('../../../../assets/perfil-1.png')}
                style={styles.image}
            />
            <TouchableHighlight style={styles.buttonThoughts}>
                <Text style={styles.buttonText}>¿Qué estás pensando?</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <MaterialIcons name="photo-library" size={18} color="#45bd62" />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    contentThoughts: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#ffffff',
        marginBottom: 5
    },
    image:{
        width: 40, 
        height: 40,
        borderRadius: 100
    },
    buttonThoughts: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        paddingLeft: 20,
        borderColor: '#656764',
        borderRadius: 50,
    }
})