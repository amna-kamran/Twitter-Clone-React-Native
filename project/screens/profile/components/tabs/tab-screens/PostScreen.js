import React from 'react';
import {FlatList, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import {colors} from '../../../../../themes/Colors';
import PostCard from '../../posts/PostCard';

const PostScreen = ({navigation}) => {
  // Dummy data array for demonstration
  const postData = [1, 2, 3, 4, 5, 6, 7, 8];

  // Render function for FlatList
  const renderPostCard = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('post')}>
        <PostCard />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={postData}
      renderItem={renderPostCard}
      keyExtractor={item => item.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default PostScreen;
