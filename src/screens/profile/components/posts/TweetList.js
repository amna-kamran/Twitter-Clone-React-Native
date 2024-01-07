import {View, Text} from 'react-native';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import PostCard from './PostCard';
import {colors} from '../../../../themes/Colors';
const TweetList = ({tweets, navigation}) => {
  const renderPostCard = ({item}) => {
    return (
      <>
        <Text testID="forTestText" style={{color: 'pink'}}>
          for test
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          delayPressIn={50}
          onPress={() => navigation.navigate('post', {tweet: item})}>
          <PostCard tweet={item} />
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: colors.textColor}} />
      </>
    );
  };
  return (
    <FlatList
      data={tweets}
      renderItem={renderPostCard}
      keyExtractor={item => item.tid}
      style={styles.container}
    />
  );
};

export default TweetList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
