import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import {colors} from '../../../../themes/Colors';
import {inter} from '../../../../utils/Fonts';
import {SpacesH, SpacesW} from '../../../../utils/Spaces';

const PostCard = ({tweet}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDotsPress = () => {
    setModalVisible(true);
  };

  const handleDeleteTweet = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <View style={styles.profilePicture} />
        </TouchableOpacity>

        <View style={styles.textBox}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{tweet?.username}</Text>
            <SpacesW width={10} />
            <Text style={styles.username}>@{tweet?.username}</Text>
            <Text style={styles.day}>. 2d</Text>
            <SpacesW width={180} />
            <TouchableOpacity style={styles.dots} onPress={handleDotsPress}>
              <IconE name="dots-three-vertical" size={16} color={'grey'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tweet}>{tweet?.text}</Text>
          <SpacesH height={30} />
          <View style={styles.icons}></View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={handleDeleteTweet}>
                <Text style={styles.textStyle}>Delete Tweet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
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
  dots: {
    height: 30,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.textColor,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.accentColor,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PostCard;
