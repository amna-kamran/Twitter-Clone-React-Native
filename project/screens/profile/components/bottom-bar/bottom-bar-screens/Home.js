import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ForYou from './home-tab-screens/ForYou';
import Following from './home-tab-screens/Following';
import {colors} from '../../../../../themes/Colors';
import {inter} from '../../../../../utils/Fonts';

const Tab = createMaterialTopTabNavigator();

const TabLabel = ({label, isFocused}) => (
  <Text
    style={{
      fontSize: 15,
      fontFamily: isFocused ? inter.bold : inter.medium,
      color: colors.textColor,
      width: 100,
      textAlign: 'center',
    }}>
    {label}
  </Text>
);

const Home = () => {
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
          left: 68,
        },
      }}>
      <Tab.Screen
        name="For you"
        component={ForYou}
        options={{
          tabBarLabel: ({focused}) => (
            <TabLabel label="For you" isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{
          tabBarLabel: ({focused}) => (
            <TabLabel label="Following" isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
