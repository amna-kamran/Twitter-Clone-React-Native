import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../../Dashboard';
import Profile from '../../Profile';
import {colors} from '../../../../themes/Colors';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import {inter} from '../../../../utils/Fonts';

const Drawer = createDrawerNavigator();

const DrawerScreen = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: '',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('settings')}>
            <View style={styles.icon}>
              <IconF name="settings" size={22} color={'white'} />
            </View>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
        },
      }}>
      <Drawer.Screen name="dashboard" component={Dashboard} />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          drawerLabel: 'Profile',
          drawerLabelStyle: {
            fontSize: 20,
            fontFamily: inter.bold,
            color: colors.textColor,
          },
          drawerIcon: () => (
            <IconI name="person-outline" size={22} color={colors.textColor} />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  profilePicture: {
    backgroundColor: 'pink',
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  icon: {
    right: 10,
  },
});

export default DrawerScreen;
