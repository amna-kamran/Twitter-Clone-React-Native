import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../../themes/Colors';
import {inter} from '../../../../utils/Fonts';
import {SpacesH, SpacesW} from '../../../../utils/Spaces';

const PostCard = ({tweet}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <View style={styles.profilePicture} />
      </TouchableOpacity>

      <View style={styles.textBox}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{tweet?.username}</Text>
          <SpacesW width={10} />
          <Text style={styles.username}>@{tweet?.username}</Text>
          <Text style={styles.day}>. 2d</Text>
          <SpacesW width={180} />
          <TouchableOpacity style={styles.dots} onPress={null}>
            <IconE name="dots-three-vertical" size={16} color={'grey'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.tweet}>{tweet.text}</Text>
        <SpacesH height={30} />
        <View style={styles.icons}>
          <View style={[styles.iconGroup, {width: 80}]}>
            <IconF name="message-circle" size={17} color={'grey'} />
            <SpacesW width={5} />
            <Text style={styles.iconText}>230k</Text>
          </View>

          <View style={[styles.iconGroup, {width: 80}]}>
            <IconA name="retweet" size={19} color={'grey'} />
            <SpacesW width={5} />
            <Text style={styles.iconText}>10.5k</Text>
          </View>

          <View style={[styles.iconGroup, {width: 80}]}>
            <IconF name="heart" size={17} color={'grey'} />
            <SpacesW width={5} />
            <Text style={styles.iconText}>2,300</Text>
          </View>

          <View style={[styles.iconGroup, {width: 80}]}>
            <IconF name="bar-chart" size={17} color={'grey'} />
            <SpacesW width={5} />
            <Text style={styles.iconText}>230K</Text>
          </View>

          <View style={[styles.iconGroup, {width: 50}]}>
            <IconF name="share-2" size={17} color={'grey'} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 150,
    padding: 10,
    flexDirection: 'row',
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 55,
    width: 55,
    borderRadius: 27.5,
  },
  textBox: {
    padding: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: inter.bold,
    color: colors.textColor,
  },
  username: {
    fontFamily: inter.medium,
    color: colors.grey,
  },
  day: {
    color: colors.grey,
  },
  tweet: {
    color: colors.textColor,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: colors.grey,
    fontSize: 13,
  },
  loadingText: {
    color: colors.grey,
    fontFamily: inter.medium,
  },
  dots: {
    height: 30,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostCard;
