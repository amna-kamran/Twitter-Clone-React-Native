import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  Alert,
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {colors} from '../../../../themes/Colors';
import {inter} from '../../../../utils/Fonts';

const CreateTweet = ({navigation, route}) => {
  const [tweetText, setTweetText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to remove a specific draft
  const removeDraft = async index => {
    const drafts = JSON.parse(await AsyncStorage.getItem('drafts')) || [];
    drafts.splice(index, 1);
    await AsyncStorage.setItem('drafts', JSON.stringify(drafts));
  };

  useEffect(() => {
    navigation.setParams({tweetText, isTweetEmpty: tweetText === ''});
  }, [tweetText, navigation]);

  useEffect(() => {
    if (route.params?.draftText && typeof route.params.index === 'number') {
      setTweetText(route.params.draftText);
      navigation.setParams({draftText: ''});
      removeDraft(route.params.index);
    }
  }, [route.params]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (tweetText !== '') {
          setModalVisible(true);
          return true; // prevents the default back action
        }
        return false; // allows the default back action
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [tweetText]),
  );

  // Function to save the current text as a draft
  const handleSaveDraft = async () => {
    try {
      const existingDrafts =
        JSON.parse(await AsyncStorage.getItem('drafts')) || [];
      await AsyncStorage.setItem(
        'drafts',
        JSON.stringify([...existingDrafts, tweetText]),
      );

      setModalVisible(false);
      navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDiscardDraft = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What's happening?"
          placeholderTextColor="#888"
          multiline
          autoFocus={true}
          style={styles.input}
          onChangeText={text => {
            console.log(text);
            setTweetText(text);
            console.log(tweetText);
          }}
          value={tweetText}
        />
      </View>

      <View style={styles.bottomIcons}>
        <TouchableOpacity>
          {/* <Icon name="camera" size={24} color="#fff" /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Everyone can reply</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Save this tweet to drafts?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={handleSaveDraft}>
                <Text style={styles.textStyle}>Save Draft</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={handleDiscardDraft}>
                <Text style={styles.textStyle}>Discard</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: inter.semiBold,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: inter.semiBold,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default CreateTweet;
