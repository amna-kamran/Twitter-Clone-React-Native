import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const OverlayMenu = ({isVisible, onClose, options}) => {
  if (!isVisible) return null;

  return (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={onClose}>
      <View style={styles.menuContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={option.onPress}
            style={styles.menuItem}>
            <Text style={styles.menuItemText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
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
    padding: 16,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default OverlayMenu;
