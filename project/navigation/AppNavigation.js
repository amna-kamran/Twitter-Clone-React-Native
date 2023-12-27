import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Profile from '../screens/profile/Profile';
import {colors} from '../themes/Colors';
import PostDisplay from '../screens/profile/components/posts/PostDisplayScreen';
import SignInScreen from '../screens/profile/SignInScreen';
import SignUpScreen from '../screens/profile/SignUpScreen';
import auth from '@react-native-firebase/auth';
import DrawerScreen from '../screens/profile/components/drawer/DrawerScreen';
import Settings from '../screens/profile/Settings';
import CreateTweet from '../screens/profile/components/posts/CreateTweet';
import {TouchableOpacity} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

const AppNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(newUser => {
      setUser(newUser);
      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, [initializing]);

  if (initializing) return null;

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {user ? (
        // User is logged in
        <>
          <Stack.Screen
            name="drawer"
            component={DrawerScreen}
            options={{
              headerShown: false,
              statusBarColor: colors.background,
            }}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: false,
              statusBarColor: colors.background,
            }}
          />
          <Stack.Screen
            name="post"
            component={PostDisplay}
            options={{
              title: 'Post',
              statusBarColor: colors.background,
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTitleStyle: {
                color: colors.textColor,
              },
              headerTintColor: colors.textColor,
            }}
          />
          <Stack.Screen
            name="settings"
            component={Settings}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="create-tweet"
            component={CreateTweet}
            options={({navigation}) => ({
              statusBarColor: colors.background,
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTitleStyle: {
                color: colors.textColor,
              },
              headerTintColor: colors.textColor,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <IconI
                    name="close"
                    size={25}
                    color={colors.textColor}
                    style={{marginLeft: 15}}
                  />
                </TouchableOpacity>
              ),
              cardStyleInterpolator: ({current, layouts}) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateY: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.height, 0],
                        }),
                      },
                    ],
                  },
                };
              },
            })}
          />
        </>
      ) : (
        // No user is logged in
        <>
          <Stack.Screen
            name="signin"
            component={SignInScreen}
            options={{
              statusBarColor: colors.background,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignUpScreen}
            options={{
              statusBarColor: colors.background,
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
