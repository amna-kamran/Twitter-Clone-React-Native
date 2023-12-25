import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../../themes/Colors';
import PostCard from '../../posts/PostCard';

const PostScreen = () => {
  return <PostCard />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default PostScreen;
