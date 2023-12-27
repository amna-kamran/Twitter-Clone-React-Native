import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconF from 'react-native-vector-icons/Feather';
import Home from './components/bottom-bar/bottom-bar-screens/Home';
import Search from './components/bottom-bar/bottom-bar-screens/Search';
import Community from './components/bottom-bar/bottom-bar-screens/Community';
import Notification from './components/bottom-bar/bottom-bar-screens/Notification';
import {colors} from '../../themes/Colors';
import FloatingActionButton from './components/bottom-bar/bottom-bar-screens/components/FloatingActionButton';
import FloatingMessageButton from './components/bottom-bar/bottom-bar-screens/components/FloatingMessageButton';
import Message from './components/bottom-bar/bottom-bar-screens/Message';

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
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerLeft: () => (
            <TouchableOpacity>
              <View style={styles.container}>
                <View style={[styles.profilePicture]} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <View style={styles.icon}>
                <IconF name="settings" size={22} color={'white'} />
              </View>
            </TouchableOpacity>
          ),
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
      {isMessage ? <FloatingMessageButton /> : <FloatingActionButton />}
      {console.log(isMessage)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  icon: {
    right: 10,
  },
});

export default Dashboard;
