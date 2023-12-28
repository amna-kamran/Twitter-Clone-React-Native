import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../../themes/Colors';
const LikesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Likes</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default LikesScreen;
