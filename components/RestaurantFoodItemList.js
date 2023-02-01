import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Colors} from '../GlobalStyles/Colors';

import FoodItemCard from './ui/FoodItemCard';
import {FoodItems} from '../data/FoodItems';
import {Restaurants} from '../data/Restaurants';

const RestaurantFoodItemList = ({restaurantId}) => {
  const restaurantIndex = Restaurants.findIndex(
    item => item.id === restaurantId,
  );

  const restaurantFoodItemIds = Restaurants[restaurantIndex]?.foodItem;

  const restaurantFoodItems = FoodItems.filter(item =>
    restaurantFoodItemIds.includes(item.id),
  );

  if (restaurantFoodItems.length === 0) {
    return <Text style={styles.text}>No Food Item</Text>;
  }

  const renderRestaurant = ({item, index}) => {
    return (
      <View style={styles.item}>
        <FoodItemCard
          id={item.id}
          image={item.image}
          title={item.name}
          itemCost={item.itemCost}
          totalRating={item.totalRating}
          avgRating={item.avgRating}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        data={restaurantFoodItems}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default RestaurantFoodItemList;

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
