import firebase from 'firebase/app';
import 'firebase/firestore';
import {useAuth} from './User';

const firestore = firebase.firestore();

export const addTweet = async tweetText => {
  try {
    const currentUser = useAuth();
    const user = useUserProfile(currentUser ? currentUser.uid : null);
    const epochTimeStamp = new Date().getTime().toString();
    const tweetData = {
      uid: user.uid,
      username: user.username,
      name: user.name,
      text: tweetText,
      creationTime: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await firestore.collection('tweets').doc(epochTimeStamp).set(tweetData);
    console.log('Tweet added with ID:', epochTimeStamp);
  } catch (error) {
    console.error('Error adding tweet:', error);
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
