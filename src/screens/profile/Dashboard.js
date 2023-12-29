import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import IconF from 'react-native-vector-icons/Feather';

// Import your screen components
import Home from './components/bottom-bar/bottom-bar-screens/Home';
import Search from './components/bottom-bar/bottom-bar-screens/Search';
import Community from './components/bottom-bar/bottom-bar-screens/Community';
import Notification from './components/bottom-bar/bottom-bar-screens/Notification';
import Message from './components/bottom-bar/bottom-bar-screens/Message';

import {colors} from '../../themes/Colors';
import FloatingActionButton from './components/floating-action-buttons/components/FloatingActionButton';
import FloatingMessageButton from './components/floating-action-buttons/components/FloatingMessageButton';
import OverlayMenu from './components/OverlayMenu';
import {
  handlePress,
  toggleOverlay,
} from './components/floating-action-buttons/components/utils/ButtonUtils';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  const [isMessage, setIsMessage] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isOverlayMode, setIsOverlayMode] = useState(true);

  const navigation = useNavigation();

  const handleTabPress = name => {
    setIsMessage(name === 'message');

    let headerTitle = '';
    switch (name) {
      case 'home':
        headerTitle = '';
        break;
      case 'search':
        headerTitle = () => (
          <TextInput
            style={styles.search}
            placeholder="Search Settings"
            placeholderTextColor="#565D6D"
          />
        );
        break;
      case 'communities':
        headerTitle = 'Communities';
        break;
      case 'notification':
        headerTitle = 'Notifications';
        break;
      case 'message':
        headerTitle = () => (
          <TextInput
            style={styles.search}
            placeholder="Search Messages"
            placeholderTextColor="#565D6D"
          />
        );
        break;
      default:
        headerTitle = '';
    }

    navigation.setOptions({headerTitle});
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          title: '',
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 60,
            paddingTop: 15,
            backgroundColor: colors.background,
          },
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconF name="home" size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              handleTabPress('home');
            },
          })}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconF name="search" size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              handleTabPress('search');
            },
          })}
        />
        <Tab.Screen
          name="communities"
          component={Community}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconF name="users" size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              handleTabPress('communities');
            },
          })}
        />
        <Tab.Screen
          name="notification"
          component={Notification}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconF name="bell" size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              handleTabPress('notification');
            },
          })}
        />
        <Tab.Screen
          name="message"
          component={Message}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconF name="mail" size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: e => {
              handleTabPress('message');
            },
          })}
        />
      </Tab.Navigator>
      <OverlayMenu
        isVisible={overlayVisible}
        onClose={() =>
          toggleOverlay(overlayVisible, setOverlayVisible, setIsOverlayMode)
        }
        options={[
          {label: 'Go Live', onPress: () => console.log('Go Live')},
          {label: 'Photos', onPress: () => console.log('Photos')},
          {label: 'Post', onPress: () => console.log('Post')},
        ]}
      />
      {isMessage ? (
        <FloatingMessageButton />
      ) : (
        <FloatingActionButton
          onPress={() =>
            handlePress(
              isOverlayMode,
              setOverlayVisible,
              setIsOverlayMode,
              navigation,
            )
          }
          bottom={80}
          right={20}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    right: 10,
  },
  search: {
    backgroundColor: '#202328',
    height: 40,
    borderRadius: 21,
    width: 250,
    paddingLeft: 20,
  },
});

export default Dashboard;
