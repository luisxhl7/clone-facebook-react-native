import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import CardReel from "../../molecules/cardReel/CardReel"
import {videos} from "../../../../assets/videos/index";
import CardNewReel from "../../molecules/cardNewReel/CardNewReel";


const dataReels = [
    {
        reel: videos.reel_1,
    },
    {
        reel: videos.reel_2,
    },
    {
        reel: videos.reel_3,
    },
    {
        reel: videos.reel_4,
    }
]

export default ScrollReels = () => {
    return (
        <ScrollView horizontal style={ styles.scroll } showsHorizontalScrollIndicator={false}>
            <View style={styles.content}>
                <CardNewReel/>
                {dataReels.map( (item, idx ) => (
                    <CardReel {...item} position={idx} key={idx}/>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff',
        height: 230,
        flexDirection: 'row',
        paddingLeft: 5
    },
})