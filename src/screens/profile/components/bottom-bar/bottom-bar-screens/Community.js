import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../../../themes/Colors';

const Community = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading2}>Discover new Communities</Text>
      <View style={styles.content}>
        <View style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.text1}>james marriott</Text>
          <Text style={styles.text2}>393 members</Text>
          <View style={styles.iconsRow}>
            <MaterialIcons name="circle" size={35} color="#1E1E1E" />
            <MaterialIcons name="circle" size={35} color="#1E1E1E" />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.text1}>wilburtwt</Text>
          <Text style={styles.text2}>12.4K members</Text>
          <View style={styles.iconsRow}>
            <MaterialIcons name="circle" size={35} color="#1E1E1E" />
            <MaterialIcons name="circle" size={35} color="#1E1E1E" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0D0D0D',
    flex: 1,
    alignItems: 'center',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 73,
    marginTop: 50,
    paddingHorizontal: 16,
  },

  iconContainer: {
    padding: 10,
  },

  iconContainer2: {
    marginLeft: 30,
  },

  iconContainer3: {
    marginLeft: 30,
  },

  heading1: {
    fontFamily: 'Manrope',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  heading2: {
    fontFamily: 'Manrope',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 120,
    marginTop: 10,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginRight: 150,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 20,
    backgroundColor: colors.grey,
  },

  details: {
    flexDirection: 'column',
  },

  text1: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  text2: {
    fontFamily: 'Manrope',
    fontSize: 12,
    color: '#FFFFFF',
  },

  iconsRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default Community;
