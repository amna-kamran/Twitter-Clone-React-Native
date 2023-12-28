import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/bottom-bar/bottom-bar-screens/Home';
import Search from './components/bottom-bar/bottom-bar-screens/Search';
import Community from './components/bottom-bar/bottom-bar-screens/Community';
import Notification from './components/bottom-bar/bottom-bar-screens/Notification';
import {colors} from '../../themes/Colors';
import FloatingActionButton from './components/floating-action-buttons/components/FloatingActionButton';
import FloatingMessageButton from './components/floating-action-buttons/components/FloatingMessageButton';
import Message from './components/bottom-bar/bottom-bar-screens/Message';
import IconF from 'react-native-vector-icons/Feather';
import {
  handlePress,
  toggleOverlay,
} from './components/floating-action-buttons/components/utils/ButtonUtils';
import OverlayMenu from './components/OverlayMenu';
const Tab = createBottomTabNavigator();

const Dashboard = ({navigation}) => {
  const [isMessage, setIsMessage] = useState('');
  const handleTabPress = name => {
    name == 'message' ? setIsMessage(true) : setIsMessage(false);
  };
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isOverlayMode, setIsOverlayMode] = useState(true);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          title: '',
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',

          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
          },
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
          listeners={({route}) => ({
            tabPress: e => {
              handleTabPress(route.name);
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
          listeners={({route}) => ({
            tabPress: e => {
              handleTabPress(route.name);
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
          listeners={({route}) => ({
            tabPress: e => {
              handleTabPress(route.name);
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
          listeners={({route}) => ({
            tabPress: e => {
              handleTabPress(route.name);
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
          listeners={({route}) => ({
            tabPress: e => {
              handleTabPress(route.name);
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
});

export default Dashboard;
