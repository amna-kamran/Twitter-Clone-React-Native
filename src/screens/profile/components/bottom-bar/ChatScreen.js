import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Define your color theme somewhere in your project
const colors = {
  background: '#1a1a1a',
  userMessage: '#0a81ab',
  partnerMessage: '#162447',
  text: '#ffffff',
};

// Message component
const Message = ({isUser, text, timestamp}) => {
  const messageStyle = isUser ? styles.userMessage : styles.partnerMessage;
  return (
    <View style={[styles.messageBubble, messageStyle]}>
      <Text style={styles.messageText}>{text}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

// Main Chat Screen component
const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Message isUser={false} text="Hello" timestamp="4th Oct" />
      <Message isUser={true} text="Hello" timestamp="8th Oct" />
      {/* Add more <Message /> components as needed */}
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        placeholderTextColor="#999"
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: colors.userMessage,
    alignSelf: 'flex-end',
  },
  partnerMessage: {
    backgroundColor: colors.partnerMessage,
    alignSelf: 'flex-start',
  },
  messageText: {
    color: colors.text,
  },
  timestamp: {
    color: colors.text,
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: colors.text,
    borderRadius: 20,
    padding: 10,
    marginTop: 'auto',
  },
});

export default ChatScreen;
