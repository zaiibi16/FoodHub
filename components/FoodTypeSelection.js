import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import normalized from 'rn-normalized';

import FoodTypeCard from './ui/FoodTypeCard';
import {FoodTypes} from '../data/FoodTypes';
import {Colors} from '../GlobalStyles/Colors';

const FoodTypeSelection = ({click, setClick}) => {
  const renderFoodType = ({item, index}) => {
    return (
      <View style={styles.item}>
        <FoodTypeCard
          title={item.title}
          image={item.image}
          onPress={() => {
            if (click === index) {
              setClick(null);
            } else {
              setClick(index);
            }
          }}
          backgroundColor={index === click ? Colors.orange400 : 'white'}
          shadowColor={index === click ? Colors.orange400 : Colors.gray200}
          titleColor={index === click ? 'white' : Colors.textBlack200}
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
        data={FoodTypes}
        renderItem={renderFoodType}
        keyExtractor={item => item.title}
        contentContainerStyle={{paddingLeft: normalized(30)}}
      />
    </View>
  );
};

export default FoodTypeSelection;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 1,
    paddingRight: 20,
  },
});
