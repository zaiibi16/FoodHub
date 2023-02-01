import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import normalized from 'rn-normalized';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../../GlobalStyles/Colors';
import {FavouriteButton} from './Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavouriteFoodItem,
  removeFavouriteFoodItem,
} from '../../store/favouriteFoodItems';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const FoodItemCard = ({id, image, title, itemCost, totalRating, avgRating}) => {
  const navigation = useNavigation();
  const favouriteFoodItemIds = useSelector(
    state => state.favouriteFoodItems.ids,
  );
  const dispatch = useDispatch();

  const foodItemIsFavourite = favouriteFoodItemIds.includes(id);

  const itemClickedHandler = () => {
    navigation.navigate('FoodDetail', {foodId: id});
  };

  const favouriteFoodItemHandler = () => {
    if (foodItemIsFavourite) {
      dispatch(removeFavouriteFoodItem({id: id}));
    } else {
      dispatch(addFavouriteFoodItem({id: id}));
    }
  };

  return (
    <Pressable
      style={{paddingVertical: deviceHeight / 60}}
      onPress={itemClickedHandler}>
      <View style={styles.shadowContainer}>
        <View style={styles.rootContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground source={image} style={styles.image}>
              <View style={styles.priceFavContainer}>
                <View style={styles.priceContainer}>
                  <Text
                    style={{
                      fontFamily: 'SofiaPro-Regular',
                      color: Colors.orange400,
                      fontSize: normalized(12),
                      lineHeight: 12,
                    }}>
                    $
                  </Text>
                  <Text style={styles.priceText}>{itemCost.toFixed(2)}</Text>
                </View>
                <View>
                  <FavouriteButton
                    onPress={favouriteFoodItemHandler}
                    isFavourite={foodItemIsFavourite}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={[styles.ratingText, {fontFamily: 'SofiaPro-Bold'}]}>
              {avgRating}
            </Text>
            <MaterialIcons name="star" color={Colors.golden} size={16} />
            <Text style={styles.ratingText}>{`(${totalRating})`}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: Colors.gray200,
    elevation: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  rootContainer: {
    width: deviceWidth / 2.5,
    height: deviceWidth / 1.9,
    borderRadius: deviceWidth / 30,
    paddingBottom: deviceHeight / 50,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  imageContainer: {
    width: deviceWidth / 2.5,
    height: deviceWidth / 2.5,
    overflow: 'hidden',
    backgroundColor: 'gray',
    borderRadius: deviceHeight / 50,
  },
  text: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(15),
    color: Colors.textBlack300,
    resizeMode: 'contain',
  },
  image: {
    width: deviceWidth / 2.5,
    height: deviceWidth / 2.5,
  },
  textContainer: {
    padding: deviceWidth / 30,
    paddingTop: deviceWidth / 25,
  },
  priceFavContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(10),
    color: Colors.textBlack100,
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    position: 'absolute',
    marginTop: deviceWidth / 2.8,
    marginLeft: deviceWidth / 30,
    elevation: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(20),
    color: Colors.textBlack300,
    lineHeight: normalized(20 + 2),
  },
});
