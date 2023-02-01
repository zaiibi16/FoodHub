import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {PrimaryButton} from '../components/ui/Buttons';
import Title from '../components/ui/Title';
import {Colors} from '../GlobalStyles/Colors';
import {emptyCart} from '../store/cart';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const CheckoutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const doneHandler = () => {
    dispatch(emptyCart());
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.rootContainer}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.circle}>
          <Ionicons name="checkmark" size={deviceHeight / 20} color={'white'} />
        </View>
        <View style={{paddingVertical: deviceHeight / 20}}>
          <Title text={'Thank you for placing order'} fontSize={20} />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/images/delivery.png')}
          style={styles.image}
        />
      </View>
      <View style={{paddingHorizontal: deviceWidth / 5}}>
        <PrimaryButton text="DONE" onPress={doneHandler} />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: deviceHeight / 10,
    justifyContent: 'space-between',
  },
  circle: {
    width: deviceHeight / 10,
    height: deviceHeight / 10,
    borderRadius: deviceHeight / 20,
    backgroundColor: Colors.orange300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: deviceHeight / 3,
    height: deviceHeight / 3,
  },
});
