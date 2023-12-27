import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {loginEmailPass} from '../../services/AuthProvider';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    loginEmailPass(username, password);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.heading1}>See what’s happening in</Text>
      <Text style={styles.heading2}>the world right now.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          placeholderTextColor="#676767"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor="#676767"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <Text style={styles.or}>or</Text>
      <TouchableOpacity
        style={styles.createAccount}
        onPress={() => navigation.navigate('signup')}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signIn} onPress={onSignInPressed}>
        <Text style={styles.buttonText}>Sign-in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0D0D0D',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 22.38,
    width: 24.29,
    marginTop: 20,
  },
  heading1: {
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#FFFFFF',
    marginTop: 150,
  },
  heading2: {
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    marginTop: -5,
  },
  inputContainer: {
    marginTop: 120,
    marginRight: 5,
    width: 280,
  },
  inputField: {
    color: '#676767',
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderBottomColor: '#676767',
    fontFamily: 'Inter',
  },
  or: {
    fontFamily: 'Manrope',
    fontSize: 12,
    color: '#BDC1CA',
    marginTop: 20,
  },
  createAccount: {
    backgroundColor: '#DEE1E6',
    opacity: 0.5,
    width: 270,
    height: 31,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    opacity: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontFamily: 'Inter',
  },
  signIn: {
    backgroundColor: '#DEE1E6',
    opacity: 0.5,
    borderRadius: 28,
    width: 71,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default SignInScreen;
