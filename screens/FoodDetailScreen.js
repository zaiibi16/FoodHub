import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import normalized from 'rn-normalized';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

import {
  AddToCartButton,
  FavouriteButton,
  TextButton,
} from '../components/ui/Buttons';
import Title from '../components/ui/Title';
import {FoodItems} from '../data/FoodItems';
import {Colors} from '../GlobalStyles/Colors';
import ItemCounter from '../components/ui/ItemCounter';
import Addons from '../components/AddOns';
import {AddOnItems} from '../data/AddOnItems';
import {
  addFavouriteFoodItem,
  removeFavouriteFoodItem,
} from '../store/favouriteFoodItems';
import {addCartItem} from '../store/cart';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const FoodDetailScreen = ({route, navigation}) => {
  const [itemCounter, setItemCounter] = useState(1);
  const [addOnSelection, setAddOnSelection] = useState(null);
  const foodId = route.params.foodId;
  const foodItem = FoodItems.find(food => food.id === foodId);

  const favouriteFoodItemIds = useSelector(
    state => state.favouriteFoodItems.ids,
  );

  const cart = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  const foodItemIsFavourite = favouriteFoodItemIds.includes(foodId);

  const favouriteFoodItemHandler = () => {
    if (foodItemIsFavourite) {
      dispatch(removeFavouriteFoodItem({id: foodId}));
    } else {
      dispatch(addFavouriteFoodItem({id: foodId}));
    }
  };

  let cost = foodItem.itemCost;

  const addOns = AddOnItems.filter(item => foodItem.addOns.includes(item.id));

  let addOnIdNum;
  if (addOnSelection !== null) {
    const {id: addOnId} = addOns[addOnSelection];
    const {cost: addOnCost} = addOns[addOnSelection];
    addOnIdNum = addOnId;
    cost += addOnCost;
  }

  const AddOnComp = () => {
    if (addOns.length === 0) {
      return <Text style={styles.descriptionText}>No AddOns</Text>;
    }
  };

  const addToCartHandler = () => {
    dispatch(
      addCartItem({
        id: Math.floor(100000 + Math.random() * 900000),
        itemId: foodId,
        count: itemCounter,
        addOnId: addOnIdNum,
        cost: cost,
      }),
    );
    navigation.navigate('CartScreen');
  };

  return (
    <ScrollView
      style={styles.rootContainer}
      overScrollMode="never"
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={foodItem.image}
        style={styles.imageContainer}
        imageStyle={{resizeMode: 'cover'}}>
        <View style={styles.favButton}>
          <FavouriteButton
            onPress={favouriteFoodItemHandler}
            isFavourite={foodItemIsFavourite}
          />
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View>
          <Title text={foodItem.name} fontSize={28} />
        </View>
        <View style={styles.reviewContainer}>
          <MaterialIcons name="star" color={Colors.golden} size={20} />
          <Text style={styles.ratingText}>{foodItem.totalRating}</Text>
          <Text style={[styles.ratingText, {fontFamily: 'SofiaPro-Regular'}]}>
            {`(${foodItem.avgRating})`}
          </Text>
          <TextButton text={'See Review'} underLine={true} />
        </View>
        <View style={styles.priceCalculatorContainer}>
          <View style={styles.priceContainer}>
            <Text
              style={{
                fontFamily: 'SofiaPro-Regular',
                color: Colors.orange400,
                fontSize: normalized(14),
                lineHeight: 16,
              }}>
              $
            </Text>
            <Text style={styles.priceText}>
              {(foodItem.itemCost * itemCounter).toFixed(2)}
            </Text>
          </View>
          <ItemCounter counter={itemCounter} setCounter={setItemCounter} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{foodItem.description}</Text>
        </View>
        <View style={styles.addOnsContainer}>
          <Title text={'Choice of Add On'} fontSize={normalized(18)} />
          <AddOnComp />
          {addOns.map((item, index) => {
            return (
              <Addons
                {...item}
                key={item.id}
                onPress={() => {
                  if (index === addOnSelection) {
                    setAddOnSelection(null);
                  } else {
                    setAddOnSelection(index);
                  }
                }}
                itemSelected={index === addOnSelection}
              />
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <AddToCartButton onPress={addToCartHandler} />
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    paddingHorizontal: normalized(30),
    paddingTop: Platform.OS === 'ios' ? deviceHeight / 20 : deviceHeight / 50,
  },
  imageContainer: {
    borderRadius: 15,
    width: deviceWidth / 1.2,
    height: deviceHeight / 4,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  favButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    paddingTop: deviceHeight / 50,
    paddingBottom: deviceHeight / 50,
  },
  reviewContainer: {
    flexDirection: 'row',
    paddingRight: deviceWidth / 2.5,
    justifyContent: 'space-between',
    paddingVertical: deviceHeight / 100,
  },
  ratingText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(14),
    color: Colors.textBlack300,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(31),
    lineHeight: normalized(31),
    color: Colors.orange400,
  },
  priceCalculatorContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingVertical: deviceHeight / 100,
  },
  descriptionText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(15),
    color: Colors.gray400,
  },
  descriptionContainer: {
    paddingVertical: deviceHeight / 100,
  },
  addOnsContainer: {
    paddingVertical: deviceHeight / 50,
  },
  buttonContainer: {
    paddingHorizontal: deviceWidth / 6,
  },
});
