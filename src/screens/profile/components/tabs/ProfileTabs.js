import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostScreen from './tab-screens/PostScreen';
import RepliesScreen from './tab-screens/RepliesScreen';
import HighlightsScreen from './tab-screens/HighlightsScreen';
import MediaScreen from './tab-screens/MediaScreen';
import LikesScreen from './tab-screens/LikesScreen';
import {colors} from '../../../../themes/Colors';
import {inter} from '../../../../utils/Fonts';

// Create a function to render the label to avoid repetition
const renderTabBarLabel = (label, color) => (
  <Text
    style={{
      fontSize: 13,
      fontFamily: inter.bold,
      color,
    }}>
    {label}
  </Text>
);

const ProfileTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'transparent'},
        tabBarIndicatorStyle: {
          width: 60,
          borderWidth: 2,
          borderColor: colors.accentColor,
          borderRadius: 2,
          left: 14,
        },
        tabBarActiveTintColor: colors.accentColor,
        tabBarInactiveTintColor: colors.textColor,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: inter.semiBold,
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 90,
        },
      }}>
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          tabBarLabel: ({color}) => renderTabBarLabel('Posts', color),
        }}
      />
      <Tab.Screen
        name="Replies"
        component={RepliesScreen}
        options={{
          tabBarLabel: ({color}) => renderTabBarLabel('Replies', color),
        }}
      />
      <Tab.Screen
        name="Highlights"
        component={HighlightsScreen}
        options={{
          tabBarLabel: ({color}) => renderTabBarLabel('Highlights', color),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaScreen}
        options={{
          tabBarLabel: ({color}) => renderTabBarLabel('Media', color),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          tabBarLabel: ({color}) => renderTabBarLabel('Likes', color),
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfileTabs;
