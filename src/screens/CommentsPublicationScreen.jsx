import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { dataPublications } from '../data/dataPublications';
import CardComments from '../components/molecules/cardComments/CardComments';
import { dataReels } from '../data/dataReels';

export default CommentsPublicationScreen = ({ navigation, route }) => {
    const { idPublication } = route.params;
    const [comments, setComments] = useState()

    useEffect(() => {
         resp = dataPublications.filter(item => item.idPublication === idPublication)[0]
        if (!resp) {
            resp = dataReels.filter(item => item.idPublication === idPublication)[0]
        }
        setComments(resp);
    }, [idPublication])

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 10, backgroundColor: '#ffffff', paddingBottom: 50, paddingHorizontal: 10}}>
            <View>
                {comments?.comments.map( item => (
                    <CardComments key={item?.idComment} {...item} navigation={navigation}/>
                ))}
            </View>
            <View style={styles.contentTextInput}>
                <TextInput 
                    underlayColor="transparent" 
                    style={styles.textInput}
                    placeholder='Escribe un comentario...'
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentTextInput:{
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        flex: 1,
        width: '100%',
        height: 50,
        borderColor: '#aeb3bd',
        justifyContent: 'center'
    },
    textInput:{
        height: 40,
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#f0f2f5'
    }
})