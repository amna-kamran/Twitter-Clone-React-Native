import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DraftsScreen = ({navigation}) => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      const draftsData = JSON.parse(await AsyncStorage.getItem('drafts')) || [];
      setDrafts(draftsData);
    };

    fetchDrafts();
  }, []);

  const handleDraftPress = (draftText, index) => {
    navigation.navigate('create-tweet', {draftText, index});
  };

  return (
    <View>
      <FlatList
        data={drafts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => handleDraftPress(item, index)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DraftsScreen;
