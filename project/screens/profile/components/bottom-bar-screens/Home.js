import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../themes/Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ForYou from './home-tab-screens/ForYou';
import Following from './home-tab-screens/Following';

const Home = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          paddingTop: 20,
        },
      }}>
      <Tab.Screen name="For you" component={ForYou} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
