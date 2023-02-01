import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import normalized from 'rn-normalized';
import {useState} from 'react';

import {Colors} from '../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Addons = ({image, name, cost, onPress, itemSelected}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.subContainer}>
        <Image source={image} />
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.nameText}>{`+$${cost.toFixed(2)}`}</Text>
        <Pressable
          style={[
            styles.circleContainer,
            itemSelected
              ? {borderColor: Colors.orange400}
              : {borderColor: Colors.gray200},
          ]}
          onPress={onPress}>
          <View
            style={[
              styles.circle,
              itemSelected
                ? {
                    backgroundColor: Colors.orange400,
                    shadowColor: Colors.orange400,
                  }
                : {backgroundColor: 'white', shadowColor: 'white'},
            ]}></View>
        </Pressable>
      </View>
    </View>
  );
};

export default Addons;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: deviceHeight / 100,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(14),
    color: Colors.textBlack300,
    paddingHorizontal: 5,
  },
  circleContainer: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 2,
  },
  circle: {
    width: deviceWidth / 30,
    height: deviceWidth / 30,
    borderRadius: deviceWidth / 15,
    elevation: 10,
  },
});
