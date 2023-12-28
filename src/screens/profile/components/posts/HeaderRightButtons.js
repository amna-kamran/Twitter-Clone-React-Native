import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PostHeaderButton from '../buttons/PostHeaderButton';
import {SpacesW} from '../../../../utils/Spaces';
const HeaderRightButtons = () => {
  <View style={styles.container}>
    <TouchableOpacity onPress={() => console.log('posted')}>
      <PostHeaderButton name="Drafts" />
    </TouchableOpacity>
    <SpacesW width={15} />
    <TouchableOpacity onPress={() => console.log('posted')}>
      <PostHeaderButton name="Post" />
    </TouchableOpacity>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
export default HeaderRightButtons;
