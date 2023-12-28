import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PostHeaderButton from '../buttons/PostHeaderButton';
import {SpacesW} from '../../../../utils/Spaces';

const HeaderRightButtons = ({isPostDisabled}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Drafts')}>
        <PostHeaderButton name={'Drafts'} />
      </TouchableOpacity>
      <SpacesW width={15} />
      <TouchableOpacity
        onPress={() => (isPostDisabled ? null : console.log('Posted'))}
        disabled={isPostDisabled}>
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
