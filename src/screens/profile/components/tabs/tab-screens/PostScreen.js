import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../../../themes/Colors';
import PostCard from '../../posts/PostCard';
import firestore from '@react-native-firebase/firestore';
import {TweetModel} from '../../../../../models/TweetModel';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

const PostScreen = ({navigation}) => {
  const [tweets, setTweets] = useState([]);
  const userProfile = useSelector(state => state.user.userProfile);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('tweets')
      .where('uid', '==', userProfile.userId)
      .onSnapshot(
        querySnapshot => {
          const fetchedTweets = querySnapshot.docs.map(doc => {
            const tweetData = {
              ...doc.data(),
              tid: doc.id,
            };
            return TweetModel.fromJson(tweetData);
          });
          setTweets(fetchedTweets.reverse());
        },
        error => {
          console.error('Error fetching real-time tweets:', error);
        },
      );

    return () => unsubscribe();
  }, []);

  const renderPostCard = ({item}) => {
    return (
      <>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default PostScreen;
