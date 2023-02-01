import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useState} from 'react';

import {useSelector} from 'react-redux';

import RestaurantCard from './ui/RestaurantCard';
import {Restaurants} from '../data/Restaurants';
import {Colors} from '../GlobalStyles/Colors';

const FavouriteRestaurantList = () => {
  const favouriteRestaurantIds = useSelector(
    state => state.favouriteRestaurants.ids,
  );

  const favouriteRestaurants = Restaurants.filter(item =>
    favouriteRestaurantIds.includes(item.id),
  );

  if (favouriteRestaurants.length === 0) {
    return <Text style={styles.text}>No Favourite Restaurants</Text>;
  }

  const renderRestaurant = ({item, index}) => {
    return (
      <View style={styles.item}>
        <RestaurantCard
          id={item.id}
          image={item.image}
          title={item.name}
          deliveryCharges={item.deliveryCharges}
          deliveryTime={item.deliveryTime}
          tags={item.tags}
          totalRating={item.totalRating}
          avgRating={item.avgRating}
          verified={item.verified}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        data={favouriteRestaurants}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FavouriteRestaurantList;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 1,
    paddingRight: 20,
  },
  text: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: 16,
    color: Colors.textBlack200,
  },
});
