import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../../themes/Colors';

const Message = () => {
  const MessageContainer = () => {
    return (
      <View>
        <Text>text</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <MessageContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
export default Message;
