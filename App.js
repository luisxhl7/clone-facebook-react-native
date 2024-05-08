import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabsTopNavigator from './src/navigate/TabsTopNavigator';
import Header from './src/components/organisms/header/Header';

export default function App() {
  
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Header/>
        <TabsTopNavigator/>
      </NavigationContainer>
    </>
  );
}
