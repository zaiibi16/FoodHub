import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Colors} from '../GlobalStyles/Colors';

import FoodItemCard from './ui/FoodItemCard';
import {FoodItems} from '../data/FoodItems';

const FavouriteFoodItemList = () => {
  const favouriteFoodItemIds = useSelector(
    state => state.favouriteFoodItems.ids,
  );

  const favouriteFoodItems = FoodItems.filter(item =>
    favouriteFoodItemIds.includes(item.id),
  );

  if (favouriteFoodItems.length === 0) {
    return <Text style={styles.text}>No Favourite Food Item</Text>;
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
        overScrollMode="never"
        data={favouriteFoodItems}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default FavouriteFoodItemList;

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
