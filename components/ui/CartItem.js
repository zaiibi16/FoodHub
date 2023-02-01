import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {FoodItems} from '../../data/FoodItems';
import {AddOnItems} from '../../data/AddOnItems';
import {CrossButton} from './Buttons';
import {editCartItem, removeCartItem} from '../../store/cart';
import ItemCounter from './ItemCounter';
import normalized from 'rn-normalized';
import {Colors} from '../../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const foodItem = FoodItems.find(item => item.id === cartItem.itemId);
  const addOn = AddOnItems.find(item => item.id === cartItem.addOnId);

  const removeHandler = () => {
    dispatch(removeCartItem({id: cartItem.id}));
  };

  const changeCounterHandler = count => {
    dispatch(
      editCartItem({
        id: cartItem.id,
        count: count,
      }),
    );
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image source={foodItem.image} style={styles.image} />
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.headingText}>{foodItem.name}</Text>
        <Text style={styles.adOnText}>{addOn && addOn.name}</Text>
        <Text style={styles.priceText}>{`$${(
          cartItem.cost * cartItem.count
        ).toFixed(2)}`}</Text>
      </View>
      <View style={styles.thirdContainer}>
        <CrossButton onPress={removeHandler} />
        <ItemCounter
          counter={cartItem.count}
          setCounter={changeCounterHandler}
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: deviceHeight / 100,
  },
  image: {
    width: deviceHeight / 10,
    height: deviceHeight / 10,
  },
  imageContainer: {
    borderRadius: deviceHeight / 40,
    overflow: 'hidden',
  },
  headingText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(18),
    color: Colors.textBlack200,
  },
  adOnText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(14),
    color: Colors.gray400,
  },
  priceText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: normalized(16),
    color: Colors.orange400,
  },
  secondContainer: {
    justifyContent: 'space-between',
  },
  thirdContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
