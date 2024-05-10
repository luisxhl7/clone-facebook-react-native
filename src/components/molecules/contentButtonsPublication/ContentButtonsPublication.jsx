import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';

export default ContentButtonsPublication = () => {
    return (
        <View style={styles.contentButtons}>
        <TouchableOpacity style={styles.button}>
            <>
                <AntDesign name="like2" size={20} color="#65676B" style={styles.iconButton}/>
                <Text style={styles.textButton}>
                    Me gusta
                </Text>
            </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <>
                <EvilIcons name="comment" size={24} color="#65676B" style={styles.iconButton}/>
                <Text style={styles.textButton}>
                    Comentar
                </Text>
            </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <>
                <Ionicons name="arrow-redo-outline" size={20} color="#65676B" style={styles.iconButton}/>
                <Text style={styles.textButton}>
                    Compartir
                </Text>
            </>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    contentButtons:{
        flexDirection: 'row',
        borderTopWidth: .5,
        marginHorizontal: 10,
        borderColor: '#aeb3bd'
    },
    button:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    textButton:{
        textAlign: 'center',
        color: '#65676B',
    },
    iconButton:{
        marginRight: 5
    },
})