import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import normalized from 'rn-normalized';

import FoodItemCard from './ui/FoodItemCard';
import {FoodItems} from '../data/FoodItems';

const FoodItemList = () => {
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
        horizontal={true}
        data={FoodItems}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingLeft: normalized(30)}}
      />
    </View>
  );
};

export default FoodItemList;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 1,
    paddingRight: 20,
  },
});
