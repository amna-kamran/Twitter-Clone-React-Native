import {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {getTweets} from '../../../../../../services/TweetProvider';
import TweetList from '../../../posts/TweetList';
import {useSelector} from 'react-redux';
import {colors} from '../../../../../../themes/Colors';

const ForYou = () => {
  const userProfile = useSelector(state => state.user.userProfile);
  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchTweets = async () => {
      if (!userProfile) {
        isMounted && setTweets(null);
        return;
      }

      try {
        const fetchedTweets = await getTweets(userProfile.userId);
        if (isMounted) {
          setTweets(fetchedTweets);
        }
      } catch (error) {
        console.error('Failed to fetch tweets:', error);
      } finally {
        isMounted && setLoading(false);
      }
    };

    // Clear tweets and show loader when userProfile changes
    setTweets(null);
    setLoading(true);
    fetchTweets();

    return () => {
      isMounted = false;
    };
  }, [userProfile]);

  if (loading || !tweets) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <TweetList tweets={tweets} />;
};

export default ForYou;

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
