import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/bottom-bar-screens/Home';
import Search from './components/bottom-bar-screens/Search';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../themes/Colors';
const Tab = createBottomTabNavigator();
const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerLeft: () => {
            return (
              <View style={styles.container}>
                <View style={[styles.profilePicture]} />
              </View>
            );
          },
          title: '',
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
        }}
      />
      <Tab.Screen name="search" component={Search} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 30,
    width: 30,
    borderRadius: 20,
  },
});

export default Dashboard;
