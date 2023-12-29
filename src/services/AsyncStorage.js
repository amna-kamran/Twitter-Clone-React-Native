import AsyncStorage from '@react-native-async-storage/async-storage';
export const clearDrafts = async () => {
  try {
    await AsyncStorage.removeItem('drafts');
    console.log('Drafts cleared on logout.');
  } catch (e) {
    console.error('Failed to clear drafts:', e);
  }
};
