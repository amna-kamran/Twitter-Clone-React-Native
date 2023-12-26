import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

const onNextPressed = () => {
  console.log('Signing in');
};

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.main}>
      <View style={styles.second}>
        <Image
          source={require('C:UsersDELLDocumentsReactNativeSemesterProjectlogo-white.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading1}>Create your account</Text>
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
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          placeholderTextColor="#676767"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <TouchableOpacity style={styles.next} onPress={onNextPressed}>
        <Text style={styles.buttonText}>Next</Text>
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
    color: '#FFFFFF',
    marginTop: 50,
    marginRight: 120,
  },
  inputContainer: {
    marginTop: 30,
    marginRight: 30,
    width: 330,
  },
  inputField: {
    color: '#676767',
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderBottomColor: '#676767',
    fontFamily: 'Inter',
  },
  buttonText: {
    opacity: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontFamily: 'Inter',
  },
  next: {
    backgroundColor: '#DEE1E6',
    opacity: 0.5,
    borderRadius: 28,
    width: 71,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 350,
  },
});

export default SignUpScreen;
