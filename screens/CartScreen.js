import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../components/ui/CartItem';
import normalized from 'rn-normalized';

import {Colors} from '../GlobalStyles/Colors';
import {PrimaryButton} from '../components/ui/Buttons';
import CostReceiptItem from '../components/ui/CostReceiptItem';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const CartScreen = ({navigation}) => {
  const cart = useSelector(state => state.cart.items);

  if (cart.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Cart is Empty</Text>
      </View>
    );
  }

  const tax = 5;
  const delivery = 1;

  const costCalculator = (totalCost, item) => {
    return totalCost + item.cost * item.count;
  };

  const checkoutHandler = () => {
    navigation.navigate('Checkout');
  };

  const totalCost = cart.reduce(costCalculator, 0);

  return (
    <View style={styles.rootContainer}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        {cart.map(item => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </ScrollView>
      <View style={{paddingVertical: deviceHeight / 50}}>
        <View style={styles.promoCodeContainer}>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              placeholder="Promo Code"
              placeholderTextColor={Colors.gray200}
              style={styles.placeholderText}
              maxLength={6}
            />
          </View>
          <PrimaryButton
            containerPaddingVertical={deviceHeight / 100}
            containerPaddingHorizontal={deviceWidth / 15}
            text={'Apply'}
          />
        </View>
      </View>
      <View style={styles.costSection}>
        <CostReceiptItem text={'SubTotal'} cost={totalCost} />
        <View style={styles.line}></View>
        <CostReceiptItem text={'Tax and Fees'} cost={tax} />
        <View style={styles.line}></View>
        <CostReceiptItem text={'Delivery'} cost={delivery} />
        <View style={styles.line}></View>
        <CostReceiptItem
          text={'Total'}
          cost={totalCost + tax + delivery}
          items={cart.length}
        />
      </View>
      <View style={{paddingHorizontal: deviceWidth / 10}}>
        <PrimaryButton text="CHECKOUT" onPress={checkoutHandler} />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: deviceHeight / 15,
    paddingHorizontal: normalized(30),
    paddingBottom: deviceHeight / 50,
  },
  screenContainer: {
    backgroundColor: 'gray',
  },
  text: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: 16,
    color: Colors.textBlack200,
  },
  promoCodeContainer: {
    borderColor: Colors.gray100,
    borderWidth: 1,
    padding: deviceHeight / 150,
    borderRadius: deviceHeight / 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: deviceWidth / 30,
  },
  placeholderText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(14),
    color: Colors.gray200,
    padding: 0,
  },
  costSection: {
    paddingBottom: deviceHeight / 40,
  },
  line: {
    borderBottomColor: Colors.gray100,
    borderWidth: 0.4,
    opacity: 0.25,
  },
});
