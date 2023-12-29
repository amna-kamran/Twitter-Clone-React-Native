import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../../../themes/Colors';
import {SpacesW} from '../../../../../utils/Spaces';

// Sample data to represent messages
const messages = [
  {id: '1', user: 'Amna Kamran', message: 'hello', timestamp: '08 Oct'},
  {id: '2', user: 'Laiba', message: 'hello', timestamp: '04 Oct'},
  // ... other messages
];

const MessageScreen = ({navigation}) => {
  // This renders each individual message
  const renderMessage = ({item}) => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('chat-screen')}>
        <View style={styles.messageContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>{item.user.charAt(0)}</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.nameDisplay}>
              <Text style={styles.name}>{item.user}</Text>
              <SpacesW width={10} />
              <Text style={styles.username}>@{item.user}</Text>
            </View>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        </View>
        <View style={styles.divider} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#000',
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  avatarContainer: {
    backgroundColor: '#333',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  avatar: {
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
  username: {
    color: colors.grey,
  },
  message: {
    color: '#fff',
  },
  timestamp: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  divider: {
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 50, // To offset from the avatar
  },
  nameDisplay: {
    flexDirection: 'row',
  },
  // You can remove separator style if you're not using it
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
  },
});

export default MessageScreen;
