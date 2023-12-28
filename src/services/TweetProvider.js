import firestore from '@react-native-firebase/firestore';
import {TweetModel} from '../models/TweetModel';
export const addTweet = async (tweetText, user) => {
  try {
    const epochTimeStamp = new Date().getTime().toString();
    console.log(user);
    const tweetData = {
      uid: user.userId,
      username: user.username,
      name: user.username,
      text: tweetText,
      creationTime: firestore.FieldValue.serverTimestamp(),
    };
    await firestore().collection('tweets').doc(epochTimeStamp).set(tweetData);
    console.log('Tweet added with ID:', epochTimeStamp);
  } catch (error) {
    console.error('Error adding tweet:', error);
    throw error;
  }
};

export const getTweets = async () => {
  try {
    const querySnapshot = await firestore().collection('tweets').get();
    const tweets = querySnapshot.docs.map(doc => {
      const tweetData = {
        ...doc.data(),
        tid: doc.id,
      };
      return TweetModel.fromJson(tweetData);
    });
    return tweets.reverse();
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
};

export const deleteTweet = async tweetId => {
  try {
    await firestore.collection('tweets').doc(tweetId).delete();
    console.log('Tweet deleted with ID:', tweetId);
  } catch (error) {
    console.error('Error deleting tweet:', error);
    throw error;
  }
};
