import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../../../themes/Colors';
import {SpacesH} from '../../../../utils/Spaces';

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
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <TouchableOpacity onPress={() => handleDraftPress(item, index)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cardContainer: {
    height: 70,
  },
  divider: {
    height: 1,
    color: 'white',
  },
});
export default DraftsScreen;
