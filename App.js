import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import NavigateConfig from './src/navigate/NavigateConfig';
import store from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <NavigateConfig/>
      </NavigationContainer>
    </Provider>
  );
}
