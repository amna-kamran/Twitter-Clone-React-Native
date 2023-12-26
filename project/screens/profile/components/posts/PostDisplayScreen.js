import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../../../../themes/Colors';
import {SpacesH, SpacesW, width} from '../../../../utils/Spaces';
import IconE from 'react-native-vector-icons/Entypo';
import {inter} from '../../../../utils/Fonts';

const PostDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() => console.log('pressed')}>
          <View style={styles.profilePicture} />
        </TouchableOpacity>
        <SpacesW width={15} />
        <View>
          <Text style={styles.name}>Amna Kamran</Text>
          <Text style={styles.username}>@amnakamran</Text>
        </View>
        <SpacesW width={190} />
        <IconE name="dots-three-vertical" size={16} color={'grey'} />
      </View>
      <SpacesH height={10} />
      <View style={styles.postInfo}>
        <Text style={styles.postText}>Heyyy tune in 23rd dec</Text>
        <SpacesH height={10} />
        <View style={styles.image}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 40,
    width: 40,
    borderRadius: 37.5,
  },
  name: {
    color: colors.textColor,
    fontFamily: inter.bold,
    fontSize: 16,
  },
  username: {
    color: colors.grey,
    fontSize: 16,
    lineHeight: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postText: {
    color: colors.textColor,
    fontFamily: inter.regular,
    fontSize: 16,
  },
  image: {
    backgroundColor: colors.grey,
    height: 400,
    borderRadius: 20,
  },
});
export default PostDisplay;
