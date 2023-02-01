import React from 'react';
import {FlatList, StyleSheet, View, Text, Dimensions} from 'react-native';
import {useState} from 'react';
import normalized from 'rn-normalized';

import RestaurantCard from './ui/RestaurantCard';
import {Restaurants} from '../data/Restaurants';
import {Colors} from '../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;

const RestaurantList = ({typeFilter}) => {
  const [click, setClick] = useState(null);

  const restaurantList = Restaurants.filter(item => {
    if (typeFilter === undefined) {
      return Restaurants;
    } else {
      return item.tags.includes(typeFilter?.toUpperCase());
    }
  });

  if (restaurantList.length === 0) {
    return (
      <View
        style={{
          paddingLeft: normalized(30),
          paddingVertical: deviceHeight / 30,
        }}>
        <Text style={styles.text}>No Restaurants Found</Text>
      </View>
    );
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
        horizontal={true}
        data={restaurantList}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingLeft: normalized(30)}}
      />
    </View>
  );
};

export default RestaurantList;

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
