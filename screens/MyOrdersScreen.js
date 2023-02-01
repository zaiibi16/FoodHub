import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';

import OrderCard from '../components/ui/OrderCard';

const deviceHeight = Dimensions.get('window').height;

const MyOrdersScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <OrderCard />
    </View>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? deviceHeight / 6 : deviceHeight / 8,
  },
});
