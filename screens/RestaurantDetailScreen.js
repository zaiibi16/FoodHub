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

import {FavouriteButton, TextButton} from '../components/ui/Buttons';
import Title from '../components/ui/Title';
import {FoodItems} from '../data/FoodItems';
import {Restaurants} from '../data/Restaurants';
import {Colors} from '../GlobalStyles/Colors';

import {
  addFavouriteRestaurant,
  removeFavouriteRestaurant,
} from '../store/favouriteRestaurants';
import RestaurantFoodItemList from '../components/RestaurantFoodItemList';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const RestaurantDetailScreen = ({route, navigation}) => {
  const restaurantId = route.params.restaurantId;
  const restaurantItem = Restaurants.find(food => food.id === restaurantId);

  const favouriteRestaurantIds = useSelector(
    state => state.favouriteRestaurants.ids,
  );

  const dispatch = useDispatch();

  const restaurantIsFavourite = favouriteRestaurantIds.includes(restaurantId);

  const favouriteRestaurantHandler = () => {
    if (restaurantIsFavourite) {
      dispatch(removeFavouriteRestaurant({id: restaurantId}));
    } else {
      dispatch(addFavouriteRestaurant({id: restaurantId}));
    }
  };

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={restaurantItem.image}
        style={styles.imageContainer}
        imageStyle={{resizeMode: 'cover'}}>
        <View style={styles.favButton}>
          <FavouriteButton
            onPress={favouriteRestaurantHandler}
            isFavourite={restaurantIsFavourite}
          />
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View>
          <Title text={restaurantItem.name} fontSize={28} />
        </View>
        <View style={styles.reviewContainer}>
          <MaterialIcons name="star" color={Colors.golden} size={20} />
          <Text style={styles.ratingText}>{restaurantItem.totalRating}</Text>
          <Text style={[styles.ratingText, {fontFamily: 'SofiaPro-Regular'}]}>
            {`(${restaurantItem.avgRating})`}
          </Text>
          <TextButton text={'See Review'} underLine={true} />
        </View>
        <RestaurantFoodItemList restaurantId={restaurantId} />
      </View>
    </View>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    paddingHorizontal: normalized(30),
    flex: 1,
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
