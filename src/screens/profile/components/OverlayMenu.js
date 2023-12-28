// OverlayMenu.js
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const OverlayMenu = ({isVisible, onClose}) => {
  if (!isVisible) return null;

  return (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={onClose}>
      <View style={styles.menuContainer}>
        <Text style={styles.menuItem}>Go Live</Text>
        <Text style={styles.menuItem}>Photos</Text>
        <Text style={styles.menuItem}>Post</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  menuItem: {
    fontSize: 18,
    color: '#333',
    padding: 16,
  },
});

export default OverlayMenu;
