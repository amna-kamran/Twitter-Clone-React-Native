import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useState, useEffect} from 'react';

export const useAuth = () => {
  const user = auth().currentUser;
  return user;
};

export const useUserProfile = userId => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (!userId) {
          console.error('userId is not provided.');
          return;
        }

        const userDoc = await firestore()
          .collection('users')
          .where('userId', '==', userId)
          .get();

        if (!userDoc.empty) {
          const userData = userDoc.docs[0].data();
          setProfile(userData);
        } else {
          console.log(
            'User document not found in Firestore for userId:',
            userId,
          );
        }
      } catch (error) {
        console.error('Error getting user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return profile;
};

export async function storeUserInformation(username, email, uid) {
  try {
    const currentUser = auth().currentUser;

    if (!currentUser) {
      console.error('No user is currently authenticated.');
      return;
    }

    const usersCollection = firestore().collection('users');

    const epochTimestamp = new Date().getTime();
    const userDocRef = usersCollection.doc(epochTimestamp.toString());

    await userDocRef.set({
      username: username,
      email: email,
      userId: uid,
    });

    console.log('User data stored successfully!');
  } catch (error) {
    console.error('Error storing user data: ', error);
  }
}
