import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../../../themes/Colors';
import PostCard from '../../posts/PostCard';
import firestore from '@react-native-firebase/firestore';
import {TweetModel} from '../../../../../models/TweetModel';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import TweetList from '../../posts/TweetList';

const PostScreen = () => {
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

  return <TweetList tweets={tweets} />;
};

export default PostScreen;
