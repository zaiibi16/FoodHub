import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import normalized from 'rn-normalized';

import {Colors} from '../../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const FoodTypeCard = ({
  image,
  title,
  onPress,
  backgroundColor,
  shadowColor,
  titleColor,
}) => {
  const bg = {
    backgroundColor: 'white',
    shadowColor: Colors.gray200,
  };
  const textColor = {
    color: Colors.textBlack200,
  };
  if (backgroundColor) {
    bg.backgroundColor = backgroundColor;
    bg.shadowColor = shadowColor;
  }
  if (titleColor) {
    textColor.color = titleColor;
  }
  return (
    <Pressable style={{paddingVertical: deviceHeight / 60}} onPress={onPress}>
      <View style={[styles.rootContainer, bg]}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={[styles.text, textColor]}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FoodTypeCard;

const styles = StyleSheet.create({
  rootContainer: {
    width: deviceWidth / 7,
    height: deviceWidth / 4,
    borderRadius: deviceWidth / 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: deviceHeight / 150,
    paddingBottom: deviceHeight / 50,
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  imageContainer: {
    width: deviceWidth / 8,
    height: deviceWidth / 8,
    borderRadius: deviceWidth / 16,
    overflow: 'hidden',
  },
  text: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(11),
    color: Colors.textBlack200,
  },
  image: {
    width: deviceWidth / 8,
    height: deviceWidth / 8,
  },
});
