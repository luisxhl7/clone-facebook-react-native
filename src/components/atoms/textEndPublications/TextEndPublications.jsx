import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default TextEndPublications = () => {
    return (
        <Text style={styles.textEnd}>No hay publicaciones disponibles</Text>
    )
}
const styles = StyleSheet.create({
    textEnd:{
      paddingVertical: 20,
      textAlign: 'center',
      color: '#65676B'
    }
})