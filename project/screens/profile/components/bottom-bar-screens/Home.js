import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../themes/Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ForYou from './home-tab-screens/ForYou';
import Following from './home-tab-screens/Following';
import {inter} from '../../../../utils/Fonts';

const Home = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          paddingTop: 20,
        },
        tabBarIndicatorStyle: {
          width: 60,
          borderWidth: 2,
          borderColor: colors.accentColor,
          borderRadius: 2,
          left: 48,
        },

        tabBarInactiveTintColor: colors.textColor,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: inter.semiBold,
        },
        tabBarScrollEnabled: true,
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
