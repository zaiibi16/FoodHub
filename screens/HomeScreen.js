import React from 'react';
import {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import normalized from 'rn-normalized';

import SearchBar from '../components/ui/SearchBar';
import Title from '../components/ui/Title';
import FoodTypeSelection from '../components/FoodTypeSelection';
import RestaurantList from '../components/RestaurantList';
import {TextButton} from '../components/ui/Buttons';
import {Colors} from '../GlobalStyles/Colors';
import FoodItemList from '../components/FoodItemList';

import {FoodTypes} from '../data/FoodTypes';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const [click, setClick] = useState(null);

  const foodType = FoodTypes[click]?.title;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView style={styles.rootContainer} overScrollMode="never">
        <View style={{paddingBottom: deviceHeight / 15}}>
          <View style={{paddingLeft: normalized(30)}}>
            <View style={styles.titleContainer}>
              <Title text={'What would you like to order'} fontSize={30} />
            </View>
            <View style={styles.searchbarContainer}>
              <SearchBar />
            </View>
          </View>
          <View style={styles.foodcardContainer}>
            <FoodTypeSelection click={click} setClick={setClick} />
          </View>
          <View style={styles.featuredContainer}>
            <View style={styles.headingContainer}>
              <Title text={'Featured Restaurants'} fontSize={18} />
              <TextButton text={'View All >'} />
            </View>
            <RestaurantList typeFilter={foodType} />
          </View>
          <View style={styles.popularContainer}>
            <View style={styles.headingContainer}>
              <Title text={'Popular Items'} fontSize={18} />
            </View>
            <FoodItemList />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    //paddingLeft: normalized(30),
    paddingTop: deviceHeight / 13,
    backgroundColor: 'white',
  },
  titleContainer: {
    paddingRight: deviceWidth / 8,
  },
  searchbarContainer: {
    paddingRight: normalized(30),
    paddingVertical: deviceHeight / 50,
  },
  foodcardContainer: {
    paddingVertical: deviceHeight / 60,
  },
  featuredContainer: {
    paddingVertical: deviceHeight / 70,
  },
  popularContainer: {
    paddingVertical: deviceHeight / 70,
  },
  headingContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    paddingLeft: normalized(30),
    paddingRight: normalized(30),
    justifyContent: 'space-between',
  },
});
