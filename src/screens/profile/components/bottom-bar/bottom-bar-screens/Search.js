import React from 'react';
import {View, StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import {useState} from 'react';
import {colors} from '../../../../../themes/Colors';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = text => {
    setSearchText(text);
    console.log('Search text:', text);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Trends for you</Text>

      <ScrollView>
        <View style={styles.trends}>
          <View style={styles.trendItem}>
            <Text style={styles.content1}>Only on XTrending</Text>
            <Text style={styles.content2}>#viralvideo</Text>
            <Text style={styles.content3}>34.7K posts</Text>
          </View>

          <View style={styles.trendItem}>
            <Text style={styles.content1}>Trending in Pakistan</Text>
            <Text style={styles.content2}>#GrandeFratello</Text>
            <Text style={styles.content3}>145K posts</Text>
          </View>

          <View style={styles.trendItem}>
            <Text style={styles.content1}>Fashion & Beauty Trending</Text>
            <Text style={styles.content2}>#BoycottZara</Text>
            <Text style={styles.content3}>66.1K posts</Text>
          </View>

          <View style={styles.trendItem}>
            <Text style={styles.content1}>Trending in Pakistan</Text>
            <Text style={styles.content2}>#BabarAzam</Text>
            <Text style={styles.content3}>4,077 posts</Text>
          </View>
        </View>
      </ScrollView>

      <Text style={styles.heading}>Videos for you</Text>
      <Text style={styles.content}>
        Checkout these popular and trending videos for you
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.videoItem}>
          <Text style={styles.videoText}>Video 1</Text>
        </View>
        <View style={styles.videoItem}>
          <Text style={styles.videoText}>Video 2</Text>
        </View>
        <View style={styles.videoItem}>
          <Text style={styles.videoText}>Video 3</Text>
        </View>
        <View style={styles.videoItem}>
          <Text style={styles.videoText}>Video 4</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
  },

  heading: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 230,
    marginTop: 30,
  },

  trends: {
    marginRight: 190,
  },

  trendItem: {
    // Add any styling for each trend item here
  },

  content1: {
    fontFamily: 'Manrope',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#BDC1CA',
    marginTop: 30,
  },

  content3: {
    fontFamily: 'Manrope',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#BDC1CA',
    marginTop: 5,
  },

  content2: {
    fontFamily: 'Manrope',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 10,
    height: 120,
  },

  videoItem: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    backgroundColor: 'lightgray',
    borderRadius: 12,
  },

  videoText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default Search;
