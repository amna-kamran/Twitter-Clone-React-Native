import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../themes/Colors';
import {inter} from '../../../../utils/Fonts';

const PostHeaderButton = ({name}) => {
  const containerStyle = {
    ...styles.container,
    backgroundColor: name === 'Post' ? colors.accentColor : colors.background,
  };

  const textStyle = {
    ...styles.text,
    color: name === 'Drafts' ? colors.accentColor : colors.textColor,
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
  },
  text: {
    fontFamily: inter.bold,
    fontSize: 16,
  },
});

export default PostHeaderButton;
