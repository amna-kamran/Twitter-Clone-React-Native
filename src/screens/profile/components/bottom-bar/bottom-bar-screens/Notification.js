import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../../../themes/Colors';

const Notifications = () => {
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {[
          {
            username: 'Aimal',
            action: 'liked your post',
            description:
              'Spent the afternoon baking cookies, but I think I ate more dough than I actually baked. Oops!',
          },
          {
            username: 'Ifra',
            action: 'commented on your post',
            description: 'WHAT?!',
          },
          {
            username: 'Faizan',
            action: 'liked your reply',
            description: 'Just looking like a wow',
          },
          {
            username: 'Fahad',
            action: 'liked your comment',
            description: 'Moyee Moyeee',
          },
          {
            username: 'Laiba',
            action: 'commented on your post',
            description: 'Yes',
          },
        ].map((notification, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.notificationContainer}>
              <View style={styles.iconsRow}>
                <MaterialIcons
                  style={styles.profile}
                  name="circle"
                  size={40}
                  color="#1E1E1E"
                />
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text1}>
                  @{notification.username} {notification.action}
                </Text>
                <Text style={styles.text2}>{notification.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
    flex: 1,
  },

  iconContainer: {
    padding: 10,
  },

  notificationContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '95%',
    padding: 20,
  },

  iconsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },

  textContainer: {
    alignItems: 'left',
  },

  text1: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  profile: {
    marginRight: 230,
  },

  scrollContent: {
    left: 18,
  },
});

export default Notifications;
