import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../themes/Colors';
import IconF from 'react-native-vector-icons/Feather';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {SpacesH, SpacesW, height, width} from '../../utils/Spaces';
import ProfileTabs from './components/tabs/ProfileTabs';
import {inter} from '../../utils/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {signOut} from '../../provider/AuthProvider';

const Profile = ({navigation}) => {
  return (
    <View style={styles.background}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconI name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.iconsRight}>
          <IconF name="search" size={28} color="#fff" />
          <SpacesW width={width.w20} />
          <IconE name="dots-three-vertical" size={22} color="#fff" />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.profileheader}>
          <View style={styles.profilePicture} />

          <View style={styles.editButton}>
            <TouchableOpacity onPress={() => signOut()}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SpacesH height={height.h10} />
        <Text style={styles.name}>Amna Kamran</Text>
        <Text style={styles.username}>@amnakamran</Text>
        <SpacesH height={height.h25} />
        <View style={styles.date}>
          <IconFA name="calendar" size={14} color="grey" />
          <SpacesW width={width.w10} />
          <Text style={styles.dateText}>Joined January 21st</Text>
        </View>
        <SpacesH height={height.h15} />
        <View style={styles.stats}>
          <Text style={styles.statNumber}>37</Text>
          <Text style={styles.statName}>Following</Text>
          <SpacesW width={width.w15} />
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statName}>Followers</Text>
        </View>
      </View>
      <SpacesH height={height.h10} />
      <ProfileTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingLeft: 20,
  },
  profileheader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 75,
    width: 75,
    borderRadius: 37.5,
  },
  editButton: {
    borderWidth: 1,
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderRadius: 25,
    marginLeft: 'auto',
  },
  editButtonText: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontFamily: inter.bold,
    color: colors.textColor,
  },
  username: {
    color: 'grey',
    fontSize: 15,
    fontFamily: inter.regular,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: 'grey',
    fontSize: 16,
  },
  stats: {
    flexDirection: 'row',
  },
  statNumber: {
    color: colors.textColor,
    fontWeight: 'bold',
    paddingRight: 8,
  },
  statName: {
    color: 'grey',
  },
});

export default Profile;
