import {StyleSheet, Text, View, Dimensions} from 'react-native';
import normalized from 'rn-normalized';

import {Colors} from '../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const NotificationsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>No new Notifications</Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: deviceHeight / 8,
    paddingHorizontal: normalized(30),
  },
  text: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: 16,
    color: Colors.textBlack200,
  },
});
