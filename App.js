import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './project/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
