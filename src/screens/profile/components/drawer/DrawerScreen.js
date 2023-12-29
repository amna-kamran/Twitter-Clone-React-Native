import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../Dashboard';
import Profile from '../../Profile';
import {colors} from '../../../../themes/Colors';
import {inter} from '../../../../utils/Fonts';
import {SpacesH, SpacesW} from '../../../../utils/Spaces';

const Drawer = createDrawerNavigator();
const drawerItems = [
  {label: 'Profile', icon: 'person-outline', screen: 'profile'},
  {label: 'Premium', icon: 'award-outline', screen: 'profile'},
  {label: 'Bookmarks', icon: 'bookmark-outline', screen: 'profile'},
  {label: 'Monetisation', icon: 'cash-outline', screen: 'profile'},
];

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture} />
        <Text style={styles.profileName}>Amna Kamran</Text>
        <Text style={styles.profileHandle}>@amnakamran</Text>

        <View style={styles.statsContainer}>
          <Text style={styles.stats}>
            <Text style={{fontFamily: inter.bold, color: colors.textColor}}>
              {' '}
              37{' '}
            </Text>
            Following
          </Text>
          <SpacesW width={10} />
          <Text style={styles.stats}>
            <Text style={{fontFamily: inter.bold, color: colors.textColor}}>
              {' '}
              4{' '}
            </Text>
            Followers
          </Text>
          <SpacesH height={40} />
        </View>
      </View>

      {drawerItems.map((item, index) => (
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            key={index}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate(item.screen)}>
            <IconI name={item.icon} size={22} color={colors.textColor} />
            <Text style={styles.drawerLabel}>{item.label}</Text>
          </TouchableOpacity>
          <SpacesH height={30} />
        </View>
      ))}

      {/* Add other drawer items here */}

      <View style={styles.footerContainer}>
        {/* Your footer content here */}
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerScreen = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
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
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profileContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    marginLeft: 10,
  },
  profilePicture: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#ccc', // Temporary background color
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontFamily: inter.bold,
    color: colors.textColor,
  },
  profileHandle: {
    fontSize: 14,
    fontFamily: inter.regular,
    color: colors.grey,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  stats: {
    fontSize: 14,
    fontFamily: inter.regular,
    color: colors.grey,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 20,
  },
  drawerLabel: {
    fontSize: 20,
    fontFamily: inter.bold,
    color: colors.textColor,
    marginLeft: 10,
  },
  footerContainer: {
    // Your footer styles
  },
  icon: {
    marginRight: 10,
  },
  optionsContainer: {
    marginLeft: 10,
  },
});

export default DrawerScreen;
