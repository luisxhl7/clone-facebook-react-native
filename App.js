import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import TabsTopNavigator from './src/navigate/TabsTopNavigator';

export default function App() {
  
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <View style={styles.header} >
          <Text>facebook</Text>
        </View>
        <TabsTopNavigator/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0866ff',
    paddingTop: Constants.statusBarHeight
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
