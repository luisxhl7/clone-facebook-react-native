import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default CardFriend = ({name, friendsInCommon}) => {
    return (
        <View style={styles.cardFriend}>
            <Image
                style={styles.image}
                source={require('../../../../assets/perfil-1.png')}
            />
            <View style={styles.contentInfo}>
                <View style={styles.contentName}>
                    <Text style={styles.textName}>{name}</Text>
                    <Text style={styles.textOpacity}>9 sem</Text>
                </View>
                <View style={styles.textFriend}>
                    <Text style={styles.textOpacity}>{friendsInCommon} amigos en común</Text>
                </View>
                <View style={styles.contentButtons}>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.textButton}>Confirmar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonDelete}>
                        <Text style={styles.textButtonBlack}>Eliminar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardFriend:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    contentInfo:{
        flex: 1,
    },
    image:{
        width: 85,
        height: 85,
        borderRadius: 50,
        marginRight: 15
    },
    contentName:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textName:{
        fontWeight: 'bold'
    },
    textOpacity:{
        color: '#65676B'
    },
    textFriend:{
        flexDirection: 'row',
        marginVertical: 3
    },
    contentButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    button:{
        flex: 1,
        backgroundColor: '#0866ff',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 7
    },
    textButton:{
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '600'
    },
    textButtonBlack:{
        textAlign: 'center',
        fontWeight: '600'
    },
    buttonDelete:{
        flex: 1,
        backgroundColor: '#E4E6EB',
        justifyContent: 'center',
        borderRadius: 7
    }
})
