import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import normalized from 'rn-normalized';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../../GlobalStyles/Colors';
import {FavouriteButton} from './Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavouriteRestaurant,
  removeFavouriteRestaurant,
} from '../../store/favouriteRestaurants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const RestaurantCard = ({
  id,
  image,
  title,
  onPress,
  deliveryCharges,
  deliveryTime,
  tags,
  totalRating,
  avgRating,
  verified,
}) => {
  const navigation = useNavigation();
  const favouriteRestaurantsIds = useSelector(
    state => state.favouriteRestaurants.ids,
  );
  const dispatch = useDispatch();

  const tagViewer = tag => {
    return (
      <View style={styles.tagContainer} key={tag}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    );
  };

  const restaurantIsFavourite = favouriteRestaurantsIds.includes(id);

  let verifiedTick = <View />;

  if (verified) {
    verifiedTick = (
      <MaterialIcons name="verified" color={Colors.orange200} size={16} />
    );
  }

  const favouriteRestaurantHandler = () => {
    if (restaurantIsFavourite) {
      dispatch(removeFavouriteRestaurant({id: id}));
    } else {
      dispatch(addFavouriteRestaurant({id: id}));
    }
  };

  const itemClickedHandler = () => {
    navigation.navigate('RestaurantDetail', {restaurantId: id});
  };

  return (
    <Pressable
      style={{paddingVertical: deviceHeight / 60}}
      onPress={itemClickedHandler}>
      <View style={styles.shadowContainer}>
        <View style={styles.rootContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground source={image} style={styles.image}>
              <View style={styles.ratingFavContainer}>
                <View style={styles.ratingContainer}>
                  <Text
                    style={[styles.ratingText, {fontFamily: 'SofiaPro-Bold'}]}>
                    {avgRating}
                  </Text>
                  <MaterialIcons name="star" color={Colors.golden} size={16} />
                  <Text style={styles.ratingText}>{`(${totalRating})`}</Text>
                </View>
                <View>
                  <FavouriteButton
                    onPress={favouriteRestaurantHandler}
                    isFavourite={restaurantIsFavourite}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.textContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text}>{title}</Text>
              {verifiedTick}
            </View>
            <View style={styles.subtitleInfoContainer}>
              <View style={styles.subtitleItem}>
                <MaterialIcons
                  name="delivery-dining"
                  color={Colors.orange200}
                  size={16}
                />
                <Text style={styles.subtitleText}>{deliveryCharges}</Text>
              </View>
              <View style={styles.subtitleItem}>
                <MaterialIcons
                  name="timer"
                  color={Colors.orange200}
                  size={16}
                />
                <Text style={styles.subtitleText}>{deliveryTime}</Text>
              </View>
            </View>
            <View style={styles.tagsContainer}>
              {tags.slice(0, 3).map(tagViewer)}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: Colors.gray200,
    elevation: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  rootContainer: {
    width: deviceWidth / 1.5,
    height: deviceWidth / 1.7,
    borderRadius: deviceWidth / 30,
    paddingBottom: deviceHeight / 50,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: Colors.gray200,
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  imageContainer: {
    width: deviceWidth / 1.5,
    height: deviceWidth / 3,
    overflow: 'hidden',
    backgroundColor: 'gray',
  },
  text: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(15),
    color: Colors.textBlack300,
    paddingRight: 5,
  },
  image: {
    width: deviceWidth / 1.5,
    height: deviceWidth / 3,
  },
  textContainer: {
    padding: deviceWidth / 30,
  },
  subtitleInfoContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: deviceWidth / 10,
  },
  subtitleItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(12),
    color: Colors.textBlack100,
    paddingLeft: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: deviceWidth / 15,
  },
  tagContainer: {
    backgroundColor: Colors.gray100,
    padding: 5,
    borderRadius: 5,
  },
  tagText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(10),
    color: Colors.textBlack100,
  },
  ratingFavContainer: {
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
  },
});
