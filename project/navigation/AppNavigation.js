import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Profile from '../screens/profile/Profile';
import {colors} from '../themes/Colors';
import PostDisplay from '../screens/profile/components/posts/PostDisplayScreen';
const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
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
    </Stack.Navigator>
  );
};

export default AppNavigator;
