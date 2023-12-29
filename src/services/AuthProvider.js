import auth from '@react-native-firebase/auth';
import {storeUserInformation} from './User';
import {clearDrafts} from './AsyncStorage';
function emailPasswordSignin(username, email, password) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      storeUserInformation(username, email, user.uid);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}

function loginEmailPass(email, password, navigation) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}

function signOut() {
  auth()
    .signOut()
    .then(async () => {
      console.log('User signed out!');
      await clearDrafts();
    })
    .catch(error => console.error('Error signing out:', error));
}

export {emailPasswordSignin, signOut, loginEmailPass};
