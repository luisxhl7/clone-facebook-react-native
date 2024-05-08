import * as React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default CardNewReel = ({reel, position}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  React.useEffect(() => {
    if (position === 0 ) {
      setStatus({ shouldPlay: true });
    }else{
      setStatus({ shouldPlay: false });
    }
  }, []);

  return (
    <View style={styles.cardReel} >
      <TouchableWithoutFeedback >
        <Video
          ref={video}
          style={styles.reel}
          source={reel}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay={status.shouldPlay}
          isLooping
          isMuted
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  cardReel:{
    position: 'relative',
    height: 200,
    width: 100,
    margin: 3,
    marginTop: 17,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000000'
  },
  reel:{
    height: 200,
    width: 112,
  },
  
})