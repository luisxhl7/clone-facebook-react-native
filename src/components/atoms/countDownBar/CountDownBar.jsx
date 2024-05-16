import React from 'react';
import { StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default CountDownBar = ({ progress }) => {
    return (
        <ProgressBar 
        progress={progress} 
        color='#65676b'
        direction="rtl"
        width={null}
        style={styles.progressBar}
        borderWidth={0}
        unfilledColor='#ffffff'
        />
    );
};

const styles = StyleSheet.create({
    progressBar:{
        transform: [{ rotate: '180deg' }],
        width: '100%',
        marginBottom: 10,
        height: 2
    }
});
