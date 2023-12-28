import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const settingsData = [
  {
    title: 'Your account',
    description:
      'See information about your account, download an archive of your data, or learn about your account deactivation options',
    iconName: 'account',
    IconComponent: MaterialCommunityIcons,
  },
  {
    title: 'Security and account access',
    description:
      "Manage your account's security and keep track of your account's usage.",
    iconName: 'lock',
    IconComponent: AntDesign,
  },
  {
    title: 'Monetization',
    description:
      'See how you can make money on X and manage your monetization options.',
    iconName: 'cash-multiple',
    IconComponent: MaterialCommunityIcons,
  },
  {
    title: 'Premium',
    description:
      'Manage your subscription features including Undo post timing.',
    iconName: 'alpha-x',
    IconComponent: MaterialCommunityIcons,
  },
  {
    title: 'Privacy and safety',
    description: 'Manage what information you see and share on X.',
    iconName: 'Safety',
    IconComponent: AntDesign,
  },
  {
    title: 'Notifications',
    description:
      'Select the kinds of notifications you get about your activities, interests, and recommendations.',
    iconName: 'notifications',
    IconComponent: Ionicons,
  },
  {
    title: 'Accessibility, display, and languages',
    description: 'Manage how X content is displayed to you.',
    iconName: 'universal-access',
    IconComponent: Foundation,
  },
  {
    title: 'Additional resources',
    description:
      'Check out other places for helpful information to learn more X products and services',
    iconName: 'dots-horizontal-circle-outline',
    IconComponent: MaterialCommunityIcons,
  },
];

const SettingItem = ({title, description, iconName, IconComponent}) => (
  <TouchableOpacity onPress={() => console.log(title)}>
    <View style={styles.inputContainer}>
      <IconComponent
        name={iconName}
        size={24}
        color="#FFFFFF"
        style={styles.icon}
      />
      <View style={styles.inputContainer2}>
        <Text style={styles.settingHeading}>{title}</Text>
        <Text style={styles.settingContent}>{description}</Text>
      </View>
      <SimpleLineIcons
        name="arrow-right"
        size={12}
        color="#FFFFFF"
        style={styles.arrow}
      />
    </View>
  </TouchableOpacity>
);

const Settings = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.searchSettingsInput}
        placeholder="Search Settings"
        placeholderTextColor="#565D6D"
        onChangeText={handleSearchChange}
        value={searchText}
      />
      <ScrollView>
        {settingsData.map((item, index) => (
          <SettingItem key={index} {...item} />
        ))}
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
    width: 16,
    alignSelf: 'center',
  },
});
export default Settings;
