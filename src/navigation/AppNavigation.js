import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Profile from '../screens/profile/Profile';
import {colors} from '../themes/Colors';
import PostDisplay from '../screens/profile/PostDisplayScreen';
import SignInScreen from '../screens/profile/SignInScreen';
import SignUpScreen from '../screens/profile/SignUpScreen';
import auth from '@react-native-firebase/auth';
import DrawerScreen from '../screens/profile/components/drawer/DrawerScreen';
import Settings from '../screens/profile/Settings';
import CreateTweet from '../screens/profile/components/posts/CreateTweet';
import {TouchableOpacity, Keyboard} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import HeaderRightButtons from '../screens/profile/components/posts/HeaderRightButtons';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {ClearUser, setUserProfile} from '../redux/actions/userActions';
import {addTweet} from '../services/TweetProvider';
import {useSelector} from 'react-redux';
import {UserModel} from '../models/UserModel';
import DraftsScreen from '../screens/profile/components/posts/DraftScreen';
import ChatScreen from '../screens/profile/components/bottom-bar/ChatScreen';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const userProfile = useSelector(state => state.user.userProfile);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async currentUser => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDoc = await firestore()
            .collection('users')
            .where('userId', '==', currentUser.uid)
            .get();

          if (!userDoc.empty) {
            const userProfile = userDoc.docs[0].data();
            dispatch(setUserProfile(userProfile));
          } else {
            console.log('User document not found for userId:', currentUser.uid);
          }
        } catch (error) {
          console.error('Error getting user profile:', error);
        }
      }
      setInitializing(false);
    });

    return subscriber;
  }, [dispatch]);

  if (initializing) return null;

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.textColor,
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
            }}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="post"
            component={PostDisplay}
            options={{
              title: 'Post',
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTitleStyle: {
                color: colors.textColor,
              },
            }}
          />
          <Stack.Screen
            name="settings"
            component={Settings}
            options={({navigation}) => ({
              headerStyle: {
                backgroundColor: colors.background,
              },

              elevation: 0,
              title: 'Settings',
            })}
          />

          <Stack.Screen
            name="create-tweet"
            component={CreateTweet}
            options={({navigation, route}) => ({
              title: '',
              headerStyle: {
                backgroundColor: colors.background,
                elevation: 0,
              },
              headerTitleStyle: {
                color: colors.textColor,
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    Keyboard.dismiss();
                    navigation.goBack();
                  }}>
                  <IconI
                    name="close"
                    size={28}
                    color={colors.textColor}
                    style={{marginLeft: 15}}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <HeaderRightButtons
                  isPostDisabled={route.params?.isTweetEmpty ?? true}
                  navigation={navigation}
                  onPress={() => {
                    console.log(route.params.tweetText);
                    Keyboard.dismiss();
                    addTweet(
                      route.params.tweetText,
                      UserModel.fromJson(userProfile),
                    );
                    navigation.goBack();
                  }}
                />
              ),
              cardStyleInterpolator: ({current, layouts}) => ({
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
              }),
            })}
          />
          <Stack.Screen
            name="drafts"
            component={DraftsScreen}
            options={{
              title: 'Drafts',
            }}
          />
          <Stack.Screen
            name="chat-screen"
            component={ChatScreen}
            options={{
              title: 'Messages',
              headerStyle: {
                backgroundColor: colors.background,
              },
            }}
          />
        </>
      ) : (
        // No user is logged in
        <>
          <Stack.Screen
            name="signin"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
