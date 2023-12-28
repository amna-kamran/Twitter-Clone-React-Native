import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PostHeaderButton from '../buttons/PostHeaderButton';
import {SpacesW} from '../../../../utils/Spaces';

const HeaderRightButtons = ({isPostDisabled, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('drafts')}>
        <PostHeaderButton name={'Drafts'} />
      </TouchableOpacity>
      <SpacesW width={15} />
      <TouchableOpacity disabled={isPostDisabled} onPress={onPress}>
        <PostHeaderButton name={'Post'} isDisabled={isPostDisabled} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default HeaderRightButtons;
