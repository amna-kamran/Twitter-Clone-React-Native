import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../../../themes/Colors';
import PostCard from '../../posts/PostCard';
import firestore from '@react-native-firebase/firestore';
import {TweetModel} from '../../../../../models/TweetModel';

const PostScreen = ({navigation}) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('tweets')
      .orderBy('creationTime', 'desc')
      .onSnapshot(
        querySnapshot => {
          const fetchedTweets = querySnapshot.docs.map(doc => {
            const tweetData = {
              ...doc.data(),
              tid: doc.id,
            };
            return TweetModel.fromJson(tweetData);
          });
          setTweets(fetchedTweets);
        },
        error => {
          console.error('Error fetching real-time tweets:', error);
        },
      );

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  const renderPostCard = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        delayPressIn={50}
        onPress={() => navigation.navigate('post', {tweet: item})}>
        <PostCard tweet={item} />
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default PostScreen;
