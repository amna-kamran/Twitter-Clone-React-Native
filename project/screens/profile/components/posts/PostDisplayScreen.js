import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../../../../themes/Colors';
import {SpacesW, width} from '../../../../utils/Spaces';

const PostDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() => console.log('pressed')}>
          <View style={styles.profilePicture} />
        </TouchableOpacity>
        <SpacesW width={20} />
        <View>
          <Text style={styles.name}>Amna Kamran</Text>
          <Text style={styles.username}>@amnakamran</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 55,
    width: 55,
    borderRadius: 37.5,
  },
  name: {
    color: colors.textColor,
  },
  username: {
    color: colors.grey,
  },
  infoContainer: {
    flexDirection: 'row',
  },
});
export default PostDisplay;
