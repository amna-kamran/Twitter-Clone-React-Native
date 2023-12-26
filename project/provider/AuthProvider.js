import auth from '@react-native-firebase/auth';
function emailPasswordSignin(email, password, navigation) {
  auth()
    .createUserWithEmailAndPassword(email, password)

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
    .then(() => console.log('User signed out!'));
}

export {emailPasswordSignin, signOut, loginEmailPass};
