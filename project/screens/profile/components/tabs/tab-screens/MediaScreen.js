import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../../themes/Colors';
const MediaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Media</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default MediaScreen;
