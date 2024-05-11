import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabsTopNavigator from './src/navigate/TabsTopNavigator';
import PageLayout from './src/components/templates/pageLayout/PageLayout';
import NavigateConfig from './src/navigate/NavigateConfig';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <NavigateConfig/>
      {/* <PageLayout>
        <TabsTopNavigator/>
      </PageLayout> */}
    </NavigationContainer>
  );
}
