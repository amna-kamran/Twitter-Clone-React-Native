import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = text => {
    setSearchText(text);
    console.log('Search text:', text);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading1}>Settings</Text>
      <TextInput
        style={styles.searchSettingsInput}
        placeholder="Search Settings"
        placeholderTextColor="#565D6D"
        onChangeText={handleSearchChange}
        value={searchText}
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            console.log('your account');
          }}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="account"
              size={24}
              color="white"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}>Your account</Text>
              <Text style={styles.settingContent}>
                See information about your account, download an archive of your
                data, or learn about your account deactivation options
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Security and account access');
          }}>
          <View style={styles.inputContainer}>
            <AntDesign
              style={styles.icon}
              name="lock"
              size={24}
              color="#FFFFFF"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}>
                Security and account access
              </Text>
              <Text style={styles.settingContent}>
                Manage your account's security and keep track of your account's
                usage including apps that you have connected to your account.
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Monetization');
          }}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="cash-multiple"
              size={24}
              color="#FFFFFF"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}>Monetization </Text>
              <Text style={styles.settingContent}>
                See how you can make money on X and manage your monetization
                options.
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Premium');
          }}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="alpha-x"
              size={24}
              color="#FFFFFF"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}> Premium </Text>
              <Text style={styles.settingContent}>
                Manage your subscription features including Undo post timing.{' '}
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Privacy and Safety');
          }}>
          <View style={styles.inputContainer}>
            <AntDesign
              style={styles.icon}
              name="Safety"
              size={24}
              color="#FFFFFF"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}>Privacy and safety </Text>
              <Text style={styles.settingContent}>
                Manage what information you see and share on X.
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Notifications');
          }}>
          <View style={styles.inputContainer}>
            <Ionicons
              style={styles.icon}
              name="notifications"
              size={24}
              color="#FFFFFF"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}>Notifications</Text>
              <Text style={styles.settingContent}>
                Select the kinds of notifications you get about your activities,
                interests, and recommendations.
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Accessibility, display and language');
          }}>
          <View style={styles.inputContainer}>
            <Foundation
              style={styles.icon}
              name="universal-access"
              size={24}
              color="#FFFFFF"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}>
                Accessibility, display, and languages
              </Text>
              <Text style={styles.settingContent}>
                Manage how X content is displayed to you.
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Additional resources');
          }}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="dots-horizontal-circle-outline"
              size={24}
              color="#FFFFFF"
            />
            <View style={styles.inputContainer2}>
              <Text style={styles.settingHeading}>Additional resources</Text>
              <Text style={styles.settingContent}>
                Check out other places for helpful information to learn more X
                products and services
              </Text>
            </View>
            <SimpleLineIcons
              style={styles.arrow}
              name="arrow-right"
              size={12}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0D0D0D',
    flex: 1,
    alignItems: 'center',
  },

  searchSettingsInput: {
    backgroundColor: '#202328',
    width: 321,
    height: 41,
    borderRadius: 21,
    marginTop: 20,
    color: '#676767',
    textAlign: 'center',
  },

  heading1: {
    fontFamily: 'Manrope',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 50,
    justifyContent: 'center',
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '130%',
  },

  inputContainer2: {
    flex: 2,
    width: 277,
    height: 80,
    marginRight: 80,
  },

  icon: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 20,
  },

  settingHeading: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  settingContent: {
    color: '#DEE1E6',
    fontSize: 12,
    fontFamily: 'Manrope',
  },

  arrow: {
    flex: 3,
    length: 16,
    width: 16,
    alignSelf: 'center',
  },
});
export default Settings;
