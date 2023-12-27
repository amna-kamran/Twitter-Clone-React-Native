import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/bottom-bar/bottom-bar-screens/Home';
import Search from './components/bottom-bar/bottom-bar-screens/Search';
import Community from './components/bottom-bar/bottom-bar-screens/Community';
import Notification from './components/bottom-bar/bottom-bar-screens/Notification';
import {colors} from '../../themes/Colors';
import FloatingActionButton from './components/bottom-bar/bottom-bar-screens/components/FloatingActionButton';
import FloatingMessageButton from './components/bottom-bar/bottom-bar-screens/components/FloatingMessageButton';
import Message from './components/bottom-bar/bottom-bar-screens/Message';
import IconF from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  const [isMessage, setIsMessage] = useState('');
  const handleTabPress = name => {
    name == 'message' ? setIsMessage(true) : setIsMessage(false);
  };
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
      {isMessage ? (
        <FloatingMessageButton />
      ) : (
        <FloatingActionButton bottom={80} right={20} />
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
