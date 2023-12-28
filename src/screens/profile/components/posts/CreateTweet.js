import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {colors} from '../../../../themes/Colors';
import {useState, useEffect} from 'react';

const CreateTweet = ({navigation}) => {
  const [tweetText, setTweetText] = useState('');
  useEffect(() => {
    navigation.setParams({isTweetEmpty: tweetText === ''});
  }, [tweetText, navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What's happening?"
          placeholderTextColor="#888"
          multiline
          autoFocus={true}
          style={styles.input}
          onChangeText={text => setTweetText(text)}
        />
      </View>

      <View style={styles.bottomIcons}>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Everyone can reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  inputContainer: {
    padding: 12,
  },
  input: {
    color: '#fff',
    fontSize: 18,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 12,
  },
  footer: {
    padding: 12,
    borderTopColor: '#333',
    borderTopWidth: 1,
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
  },
});
export default CreateTweet;
