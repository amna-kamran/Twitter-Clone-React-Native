import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../../../../themes/Colors';

const FloatingMessageButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Icon name="mail-outline" size={30} color="#FFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 80,
    backgroundColor: colors.accentColor,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
  },
});

export default FloatingMessageButton;
