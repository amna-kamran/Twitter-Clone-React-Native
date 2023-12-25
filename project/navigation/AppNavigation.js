import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';
import {colors} from '../themes/Colors';
const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          statusBarColor: colors.background,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
