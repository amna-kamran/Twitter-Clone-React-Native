import {View, Text, StyleSheet} from 'react-native';
import {SpacesW, width} from '../../../../utils/Spaces';
import IconE from 'react-native-vector-icons/Entypo';
import {colors} from '../../../../themes/Colors';
const PostCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture} />
      <View style={styles.textBox}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Amna Kamran</Text>
          <SpacesW width={width.w10} />
          <Text style={styles.username}>@amnakamran</Text>
          <Text>. 2d</Text>
          <IconE name="dots-three-vertical" size={18} color={'grey'} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    height: 150,
    padding: 10,
    flexDirection: 'row',
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 60,
    width: 60,
    borderRadius: 37.5,
  },
  nameContainer: {
    flexDirection: 'row',
  },
});
export default PostCard;
