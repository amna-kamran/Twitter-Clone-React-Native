import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure this package is installed
import {colors} from '../../../../../themes/Colors';
import {useState} from 'react';

const FloatingActionButton = ({onPress, top, bottom, right, left}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.fab, {top, bottom, right, left}]}>
      <Icon name="add" size={30} color="#FFF" />
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
    backgroundColor: colors.accentColor,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
  },
});

export default FloatingActionButton;
