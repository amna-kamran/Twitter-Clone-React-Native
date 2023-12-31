import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../../themes/Colors';
import PostCard from '../../posts/PostCard';
import PostCardMedia from '../../posts/PostMediaCard';
import PostMediaCard from '../../posts/PostMediaCard';
const MediaScreen = () => {
  return <PostMediaCard />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default MediaScreen;
